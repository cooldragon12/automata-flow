"use client"
import { CFG, DFA, PDA} from "@/types";
import React, {useReducer, createContext, useEffect} from "react";
import {prob1, prob1_cfg, prob1_pda, prob2, prob2_cfg, prob2_pda} from ".";


export interface IProblemContext{
    state: IProblemState;
    dispatch: React.Dispatch<IProblemAction>;
} 
export const ProblemContext = createContext({} as IProblemContext);


export interface IProblemState{
    selection: "1"|"2"|string;
    problem?: "(aa+bb)(a+b)*(a+b+ab+ba)(a+b+ab+ba)*(aa+bab)*(a+b+aa)(a+b+bb+aa)*"|"((101)+(111)*+(100)+(1+0+11)*)(1+0+01)*(111+000+101)(1+0)*"|string;
    dfa: DFA;
    cfg: CFG;
    pda: PDA;
    validation:{
        valid: boolean | null;
        validating: boolean;
    };
    simulation: {
        simulating: boolean;
        step: number;
    }
    currentInput: string;
    
}


export type IProblemAction = 
    {type:'SELECT',
    payload:{selection: "1"|"2"|string;} }| 
    {type: 'ENTERED_INPUT', payload:{currentInput: string}}|
    {type: | 'SIMULATE'|  'VALIDATE' |'VALIDATING'| 'NEXT_STEP' | 'STOP_SIMULATION'} 

const reducer = (state: IProblemState, action: IProblemAction) => {
    switch (action.type){
        case 'SELECT':
            return {...state, 
                selection: action.payload.selection, 
                problem: action.payload.selection === "1" ? "(aa+bb)(a+b)*(a+b+ab+ba)(a+b+ab+ba)*(aa+bab)*(a+b+aa)(a+b+bb+aa)*" : "((101)+(111)*+(100)+(1+0+11)*)(1+0+01)*(111+000+101)(1+0)*",
                dfa: action.payload.selection=== "1"? prob1: prob2,
                cfg: action.payload.selection=== "1"? prob1_cfg: prob2_cfg,
                pda: action.payload.selection=== "1"? prob1_pda: prob2_pda,};
        case 'SIMULATE':
            
            state.dfa.execute(state.currentInput);
            state.pda.getStack(state.currentInput);
            return {
                ...state,
                validation:{
                    validating: false,
                    valid:null
                },
                simulation:{
                    simulating: true,
                    path: state.dfa.path,
                    step: 0
                }
            };
        case 'VALIDATE':
            // console.log(state.currentInput)
            return {...state, validation:{validating:true, valid: null}};
        case 'VALIDATING':
            return {...state, validation:{validating:false, valid: state.dfa.execute(state.currentInput)}}
        case 'NEXT_STEP':
            return {...state, 
                validation:{...state.validation},
                simulation: {
                    simulating: state.simulation.simulating, 
                    step: state.simulation.step + 1
                }
            };
        case 'STOP_SIMULATION':
            return {...state, 
                simulation: {
                    simulating: false, 
                    step: -1
                },
                validation: {
                    validating: false,
                    valid:state.dfa.execute(state.currentInput)
                }
            };
        case 'ENTERED_INPUT':
            return {...state, validation:{valid:null, validating: state.validation.validating},currentInput: action.payload.currentInput};
        default:
            return state;
    }
}

export const ProblemProvider = ({children}: {children: React.ReactNode}) => {
    const initialState: IProblemState = {
        selection: "1",
        problem: "(aa+bb)(a+b)*(a+b+ab+ba)(a+b+ab+ba)*(aa+bab)*(a+b+aa)(a+b+bb+aa)*",
        dfa: prob1,
        cfg: prob1_cfg,
        pda: prob1_pda,
        validation: {
            validating:false,
            valid:null
        },
        simulation: {
            simulating: false,
            step:-1
        },
        currentInput: ""
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    
    useEffect(()=>{
        console.log("Problem Context: selected - ", state.selection, "_", state.problem);
    }, [state.problem, state.selection]);
    
    
    return (
        <ProblemContext.Provider value={{state, dispatch}}>
            {children}
        </ProblemContext.Provider>
    );
};
export const useProblem = () => React.useContext(ProblemContext);


