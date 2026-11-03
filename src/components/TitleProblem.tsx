"use client"

import { useProblem } from "@/context/problem";
import { AnimatePresence, motion } from "framer-motion";

const TitleProblem = () => { 
    const {state} = useProblem();
    return(
        <div className="w-full max-w-6xl flex flex-col items-center text-center gap-3 py-6 md:py-10">
            <AnimatePresence mode="wait" initial={false}>
                <motion.div key={state.selection} className="flex flex-col items-center gap-3 w-full"
                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}>
                    <h1 className="text-3xl md:text-4xl font-bold">Problem {state.selection}</h1>
                    <p className="font-mono text-sm sm:text-base md:text-lg break-all rounded-xl border border-black/10 dark:border-white/10 bg-[var(--dg-canvas)] px-4 py-3 max-w-full">
                        {state.problem}
                    </p>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}
export default TitleProblem;
