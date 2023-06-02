"use client"
import React, {useReducer, createContext, useEffect} from "react";



export interface IProblemContext{
    state: IProblemState;
    dispatch: React.Dispatch<IProblemAction>;
} 
export const ProblemContext = createContext({} as IProblemContext);


export interface IProblemState{
    selection: "1"|"2"|string;
    problem?: "(aa+bb)(a+b)*(a+b+ab+ba)+(a+b+ab+ba)*(aa+bab)*(a+b+aa)(a+b+bb+aa)*"|"((101)+(111)*+(100)+(1+0+11)*)(1+0+01)*(111+000+101)(1+0)*"|string;
    validating: boolean;
    simulating: boolean;
}

export interface IProblemAction {
    type:'SELECT' | 'START_SIMULATE'|  'START_VALIDATE' | 'END_SIMULATE' | 'END_VALIDATE';
    payload:{
        selection: "1"|"2"|string;
    }
}

const reducer = (state: IProblemState, action: IProblemAction) => {
    switch (action.type){
        case 'SELECT':
            return {...state, selection: action.payload.selection, problem: action.payload.selection === "1" ? "(aa+bb)(a+b)*(a+b+ab+ba)+(a+b+ab+ba)*(aa+bab)*(a+b+aa)(a+b+bb+aa)*" : "((101)+(111)*+(100)+(1+0+11)*)(1+0+01)*(111+000+101)(1+0)*"};
        case 'START_SIMULATE':
            return {...state, simulating: true};
        case 'END_SIMULATE':
            return {...state, simulating: false};
        case 'START_VALIDATE':
            return {...state, validating: true};
        case 'END_VALIDATE':
            return {...state, validating: false};
        default:
            return state;
    }
}

export const ProblemProvider = ({children}: {children: React.ReactNode}) => {
    const initialState: IProblemState = {
        selection: "1",
        problem: "(aa+bb)(a+b)*(a+b+ab+ba)+(a+b+ab+ba)*(aa+bab)*(a+b+aa)(a+b+bb+aa)*",
        validating: false,
        simulating: false
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(()=>{
        console.log("Problem Context: selected - ", state.selection, "_", state.problem);
    }, [state]);

    return (
        <ProblemContext.Provider value={{state, dispatch}}>
            {children}
        </ProblemContext.Provider>
    );
};
export const useProblem = () => React.useContext(ProblemContext);