"use client"

import { useProblem } from "@/context/problem";
import { useTheme } from "@/context/theme";
import {useEffect} from "react";

import { CFG } from "@/types/CFG";
export default function CFGBoard() {
    const {state} = useProblem();
    const {theme} = useTheme();
    
    useEffect(() => {
        // Path: src\types\CFG.ts
        console.log(state.cfg.getString())
    },[state.cfg])
    return (
        <>
            {
                state.cfg.getString().split("\n").map((line, index) => 
                    <p key={index} className={`font-bold text-[5rem] text-${theme}-500`}>{line}</p>
                )
            }
        </>
    )
}