"use client"
import { CFG, DFA, PDA, Trace } from "@/types";
import React, { useReducer, createContext, useEffect, useMemo } from "react";
import { prob1, prob1_cfg, prob1_pda, prob2, prob2_cfg, prob2_pda } from ".";

const PROBLEMS = {
    "1": {
        problem: "(aa+bb)(a+b)*(a+b+ab+ba)(a+b+ab+ba)*(aa+bab)*(a+b+aa)(a+b+bb+aa)*",
        dfa: prob1, cfg: prob1_cfg, pda: prob1_pda,
    },
    "2": {
        problem: "((101)+(111)*+(100)+(1+0+11)*)(1+0+01)*(111+000+101)(1+0)*",
        dfa: prob2, cfg: prob2_cfg, pda: prob2_pda,
    },
} as const;

/** PDA frames lead the shared clock by one, since its first move (Start -> Read1) reads no input. */
export const PDA_CLOCK_OFFSET = 1;

export type SimulationStatus = "idle" | "playing" | "paused" | "done";

export interface IProblemState {
    selection: "1" | "2";
    problem: string;
    dfa: DFA;
    cfg: CFG;
    pda: PDA;
    simulation: {
        status: SimulationStatus;
        /** Shared clock. Each board shows min(tick, its last frame). */
        tick: number;
        /** Milliseconds per step. */
        speed: number;
    };
    currentInput: string;
}

export type IProblemAction =
    { type: "SELECT", payload: { selection: "1" | "2" } } |
    { type: "ENTERED_INPUT", payload: { currentInput: string } } |
    { type: "SET_SPEED", payload: { speed: number } } |
    { type: "PLAY" | "PAUSE" | "RESET", total: number } |
    { type: "STEP" | "TICK" | "VALIDATE", total: number };

export interface IProblemContext {
    state: IProblemState;
    dispatch: React.Dispatch<IProblemAction>;
    dfaTrace: Trace;
    pdaTrace: Trace;
    /** Number of ticks in the run (the longer of the two traces). */
    total: number;
    /** Accept/reject once a run has finished, otherwise null. */
    result: boolean | null;
}
export const ProblemContext = createContext({} as IProblemContext);

const reducer = (state: IProblemState, action: IProblemAction): IProblemState => {
    const sim = state.simulation;
    switch (action.type) {
        case "SELECT":
            return {
                ...state,
                selection: action.payload.selection,
                ...PROBLEMS[action.payload.selection],
                currentInput: "",
                simulation: { ...sim, status: "idle", tick: 0 },
            };
        case "ENTERED_INPUT":
            return { ...state, currentInput: action.payload.currentInput, simulation: { ...sim, status: "idle", tick: 0 } };
        case "SET_SPEED":
            return { ...state, simulation: { ...sim, speed: action.payload.speed } };
        case "PLAY":
            if (sim.status === "paused")
                return { ...state, simulation: { ...sim, status: "playing" } };
            return { ...state, simulation: { ...sim, status: action.total > 1 ? "playing" : "done", tick: 0 } };
        case "PAUSE":
            return sim.status === "playing" ? { ...state, simulation: { ...sim, status: "paused" } } : state;
        case "RESET":
            return { ...state, simulation: { ...sim, status: "idle", tick: 0 } };
        case "STEP": {
            if (sim.status === "idle" || sim.status === "done")
                return { ...state, simulation: { ...sim, status: action.total > 1 ? "paused" : "done", tick: 0 } };
            const tick = Math.min(sim.tick + 1, action.total - 1);
            return { ...state, simulation: { ...sim, status: tick >= action.total - 1 ? "done" : "paused", tick } };
        }
        case "TICK": {
            if (sim.status !== "playing") return state;
            const tick = Math.min(sim.tick + 1, action.total - 1);
            return { ...state, simulation: { ...sim, status: tick >= action.total - 1 ? "done" : "playing", tick } };
        }
        case "VALIDATE":
            return { ...state, simulation: { ...sim, status: "done", tick: action.total - 1 } };
        default:
            return state;
    }
};

const initialState: IProblemState = {
    selection: "1",
    ...PROBLEMS["1"],
    simulation: { status: "idle", tick: 0, speed: 900 },
    currentInput: "",
};

export const ProblemProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { dfa, pda, currentInput, simulation } = state;

    const dfaTrace = useMemo(() => dfa.trace(currentInput), [dfa, currentInput]);
    const pdaTrace = useMemo(() => pda.trace(currentInput), [pda, currentInput]);
    const total = Math.max(dfaTrace.frames.length, pdaTrace.frames.length - PDA_CLOCK_OFFSET);

    // Single clock for every board, so the DFA and PDA always advance together.
    useEffect(() => {
        if (simulation.status !== "playing") return;
        const timeout = setTimeout(() => dispatch({ type: "TICK", total }), simulation.speed);
        return () => clearTimeout(timeout);
    }, [simulation.status, simulation.tick, simulation.speed, total]);

    const result = simulation.status === "done" ? dfaTrace.accepted : null;

    return (
        <ProblemContext.Provider value={{ state, dispatch, dfaTrace, pdaTrace, total, result }}>
            {children}
        </ProblemContext.Provider>
    );
};
export const useProblem = () => React.useContext(ProblemContext);
