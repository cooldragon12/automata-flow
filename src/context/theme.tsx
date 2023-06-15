"use client"
import React, {useState, createContext, useEffect, useCallback} from "react";




export const ThemeContext = createContext({} as ITheme);

type ThemeMode = "Light" | "Dark";
export interface ITheme{
    theme: ThemeMode;
    toggle: ()=>void;
}


export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
    const [theme, modeChange] = useState<ThemeMode>("Light");

    const getUserTheme = ()=>{
        return localStorage.getItem("theme") as ThemeMode;
    }

    const getSystemTheme = ()=>{
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
        return systemTheme.matches;
    }

    const toggle = ()=>{
        modeChange(theme === "Light" ? "Dark" : "Light");
        if (document.documentElement.classList.contains("dark")){
            localStorage.setItem("theme", "Light");
            document.documentElement.classList.remove("dark");
            modeChange("Light");
            return;
        }
        document.documentElement.classList.add("Dark");
        localStorage.setItem("theme", "Dark");
        modeChange("Dark");
    }
    const getTheme = useCallback(()=>{
        const userTheme = getUserTheme();
        const systemTheme = getSystemTheme();
        if (userTheme === "Dark" || (systemTheme && !userTheme)){
            document.documentElement.classList.add("dark");
            modeChange("Dark");
            return; 
        }
    }, []);

    useEffect(()=>{
        getTheme();
        return ()=>{
            getTheme();
        };
    }, [theme, getTheme]);
    
    return (
        <ThemeContext.Provider value={{theme, toggle}}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = ()=>{
    const {theme, toggle} = React.useContext(ThemeContext);
    return {theme, toggle};
}