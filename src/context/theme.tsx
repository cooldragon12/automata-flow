"use client"
import React, {useState, createContext} from "react";




export const ThemeContext = createContext({} as any);

type ThemeMode = "Light" | "Dark";
export interface ITheme{
    mode: ThemeMode;
    toggle: ()=>void;
    modeChange: React.Dispatch<React.SetStateAction<ThemeMode>>;
}

export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
    const [mode, modeChange] = useState<ThemeMode>("Light");

    const toggle = ()=>{
        modeChange(mode === "Light" ? "Dark" : "Light");
    }

    return (
        <ThemeContext.Provider value={{mode, toggle, modeChange}}>
            {children}
        </ThemeContext.Provider>
    );
};