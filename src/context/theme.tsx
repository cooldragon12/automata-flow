"use client"
import React, { createContext, useCallback, useEffect, useSyncExternalStore } from "react";

type ThemeMode = "Light" | "Dark";
export interface ITheme{
    theme: ThemeMode;
    toggle: ()=>void;
}

export const ThemeContext = createContext({} as ITheme);

const DARK_QUERY = "(prefers-color-scheme: dark)";
const listeners = new Set<() => void>();

const getUserTheme = (): ThemeMode | null => {
    try {
        const stored = localStorage.getItem("theme");
        return stored === "Dark" || stored === "Light" ? stored : null;
    } catch {
        return null;
    }
};

/** The saved choice wins; otherwise follow the system setting. */
const readTheme = (): ThemeMode =>
    getUserTheme() ?? (window.matchMedia(DARK_QUERY).matches ? "Dark" : "Light");

const subscribe = (onChange: () => void) => {
    const mql = window.matchMedia(DARK_QUERY);
    listeners.add(onChange);
    mql.addEventListener("change", onChange);
    return () => {
        listeners.delete(onChange);
        mql.removeEventListener("change", onChange);
    };
};

export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
    const theme = useSyncExternalStore(subscribe, readTheme, () => "Light" as ThemeMode);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "Dark");
    }, [theme]);

    const toggle = useCallback(() => {
        try {
            localStorage.setItem("theme", theme === "Light" ? "Dark" : "Light");
        } catch {}
        listeners.forEach((l) => l());
    }, [theme]);

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
