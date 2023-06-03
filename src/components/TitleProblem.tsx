"use client"

import { useProblem } from "@/context/problem";
import { animate, motion} from "framer-motion";
const TitleProblem = () => { 
    const {state} = useProblem();
    // animate("h1", {},{})
    
    return(
        <motion.div 
            className="flex flex-col items-center justify-center select-none overflow-hidden relative w-[100%] h-[3em] group">
            <motion.h1 className="problem-description text-4xl font-bold text-center -top-10 absolute group-hover:top-0 transition-all">{state.problem}</motion.h1>
            <motion.h1 className="problem-label text-4xl font-bold text-center absolute bottom-0 group-hover:-bottom-10 transition-all">Problem {state.selection}:</motion.h1 >
        </motion.div>
    )
}
export default TitleProblem;