"use client"
import {DFA} from "@/types/DFA";
import React, {useReducer, createContext, useEffect} from "react";



export interface IProblemContext{
    state: IProblemState;
    dispatch: React.Dispatch<IProblemAction>;
} 
export const ProblemContext = createContext({} as IProblemContext);


export interface IProblemState{
    selection: "1"|"2"|string;
    problem?: "(aa+bb)(a+b)*(a+b+ab+ba)+(a+b+ab+ba)*(aa+bab)*(a+b+aa)(a+b+bb+aa)*"|"((101)+(111)*+(100)+(1+0+11)*)(1+0+01)*(111+000+101)(1+0)*"|string;
    dfa: DFA;
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
            return {...state, selection: action.payload.selection, problem: action.payload.selection === "1" ? "(aa+bb)(a+b)*(a+b+ab+ba)+(a+b+ab+ba)*(aa+bab)*(a+b+aa)(a+b+bb+aa)*" : "((101)+(111)*+(100)+(1+0+11)*)(1+0+01)*(111+000+101)(1+0)*"};
        case 'SIMULATE':
            
            state.dfa.execute(state.currentInput);
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
    const prob1 = new DFA(
            ["a","b"],  
            // ['q0', 'q1', 'q3', 'q5', 'q7', 'q2', 'q4', 'q6','q8'], 
            ['q0','q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7','q8'],
            'q0', 
            ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7','q8'],
            {
                "q0.a":"q1", "q0.b":"q2",
                "q1.a":"q3", "q1.b":"q7",
                "q2.a":"q8", "q2.b":"q4",
                "q3.a":"q5", "q3.b":"q6",
                "q4.a":"q5", "q4.b":"q6",
                "q5.a":"q5", "q5.b":"q6",
                "q6.a":"q5", "q6.b":"q6",
                "q7.a":"q8", "q7.b":"q8",
                "q8.a":"q7", "q8.b":"q7",
            }
        );
    const initialState: IProblemState = {
        selection: "1",
        problem: "(aa+bb)(a+b)*(a+b+ab+ba)+(a+b+ab+ba)*(aa+bab)*(a+b+aa)(a+b+bb+aa)*",
        dfa: prob1,
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
    useEffect(()=>{
        console.log("Problem Context: currentInput - ", state.currentInput)
    }, [state.currentInput]);
    
    return (
        <ProblemContext.Provider value={{state, dispatch}}>
            {children}
        </ProblemContext.Provider>
    );
};
export const useProblem = () => React.useContext(ProblemContext);