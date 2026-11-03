"use client"
import { useEffect, useMemo, useRef } from "react";
import { PDA_CLOCK_OFFSET, useProblem } from "@/context/problem";
import Diagram from "./Diagram";
import { edgesFromTransitions } from "./geometry";
import { DFA_LAYOUTS, PDA_LAYOUTS } from "./layouts";

const AutomatonBoard = ({ kind }: { kind: "dfa" | "pda" }) => {
    const { state, dfaTrace, pdaTrace } = useProblem();
    const { selection, currentInput, simulation, dfa, pda } = state;
    const trace = kind === "dfa" ? dfaTrace : pdaTrace;
    const layout = (kind === "dfa" ? DFA_LAYOUTS : PDA_LAYOUTS)[selection];
    const edges = useMemo(
        () => edgesFromTransitions(kind === "dfa" ? dfa.delta : pda.transition),
        [kind, dfa, pda],
    );

    const active = simulation.status !== "idle";
    const last = trace.frames.length - 1;
    // The PDA's first step is Start -> Read1 (no input read), so it runs one frame ahead to stay aligned by symbol.
    const offset = kind === "pda" ? PDA_CLOCK_OFFSET : 0;
    const frame = active ? Math.min(simulation.tick + offset, last) : 0;
    const finished = active && frame === last;
    const current = trace.frames[frame];

    return (
        <div className="flex flex-col gap-3 w-full">
            <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-[var(--dg-canvas)] shadow-sm p-3 sm:p-6">
                <Diagram
                    title={`${kind.toUpperCase()} diagram for problem ${selection}`}
                    layout={layout}
                    edges={edges}
                    finals={kind === "dfa" ? dfa.F : []}
                    trace={trace}
                    frame={frame}
                    active={active}
                    // Stop advancing the key once this board has finished, so its last step doesn't replay.
                    stepKey={frame}
                    stepMs={simulation.speed}
                />
            </div>
            <Tape input={currentInput} consumed={active ? current.consumed : 0} lastSymbol={active ? current.symbol : undefined} />
            <div className="flex flex-wrap items-center justify-between gap-2 text-sm" aria-live="polite">
                <span className="opacity-70">
                    {active ? <>State <b className="font-mono opacity-100">{current.node}</b> · step {Math.max(frame - offset, 0)} of {last - offset}</> : "Enter a string, then Simulate or Validate."}
                </span>
                {finished && (
                    <span className={`rounded-full px-3 py-1 font-semibold text-white ${trace.accepted ? "bg-success" : "bg-danger"}`}>
                        {trace.accepted ? "Accepted" : "Rejected"}
                    </span>
                )}
            </div>
        </div>
    );
};

/** The input string as a tape: read cells are dimmed, the symbol just read is highlighted. */
const Tape = ({ input, consumed, lastSymbol }: { input: string; consumed: number; lastSymbol?: string }) => {
    const scroller = useRef<HTMLDivElement>(null);
    const head = lastSymbol && lastSymbol !== "ε" ? consumed - 1 : -1;

    // Keep the head in view on long inputs without scrolling the page.
    useEffect(() => {
        const el = scroller.current;
        const cell = el?.children[Math.max(head, 0)] as HTMLElement | undefined;
        if (!el || !cell) return;
        el.scrollTo({ left: cell.offsetLeft - el.clientWidth / 2 + cell.clientWidth / 2, behavior: "smooth" });
    }, [head]);

    if (!input)
        return <div className="font-mono text-sm opacity-60 px-1">ε (empty string)</div>;
    return (
        <div ref={scroller} className="flex gap-1 overflow-x-auto py-1 px-1 scrollbar-none" aria-label="Input tape">
            {input.split("").map((c, i) => (
                <span key={i}
                    className={`shrink-0 grid place-items-center w-8 h-9 rounded-md border font-mono font-semibold transition-colors duration-200
                        ${i === head ? "bg-accent border-accent text-white scale-110"
                            : i < consumed ? "opacity-40 border-black/20 dark:border-white/20"
                                : "border-black/20 dark:border-white/20"}`}>
                    {c}
                </span>
            ))}
        </div>
    );
};

export default AutomatonBoard;
