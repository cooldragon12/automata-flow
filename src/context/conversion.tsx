"use client"

import { stat } from "fs";
import React, {Dispatch, createContext, useReducer} from "react";


const reducer = (state: any, action: any) => {
    
}
export interface Action<T> {
    type: "C";
    payload?: {
        
    };
   }
export const ConversionContext = createContext({} as any);


export const ConversionProvider = ({children}: {children: React.ReactNode}) => {
    const [state, dispatch] = useReducer(conversionReducer, initialState);
    return (
        <ConversionContext.Provider value={{state, dispatch}}>
            {children}
        </ConversionContext.Provider>
    );
};