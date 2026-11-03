"use client"

import { useProblem } from "@/context/problem";

export default function CFGBoard() {
    const {state} = useProblem();
    const {production, start_variable} = state.cfg;
    return (
        <dl className="grid grid-cols-[auto_auto_1fr] items-baseline gap-x-3 sm:gap-x-5 gap-y-3 md:gap-y-5 font-mono rounded-2xl border border-black/10 dark:border-white/10 bg-[var(--dg-canvas)] shadow-sm p-4 sm:p-8">
            {Object.entries(production).map(([variable, rules]) => (
                <div key={variable} className="contents">
                    <dt className={`text-2xl md:text-5xl font-bold ${variable === start_variable ? "text-accent" : ""}`}>{variable}</dt>
                    <span className="text-xl md:text-4xl opacity-50" aria-hidden>→</span>
                    <dd className="flex flex-wrap gap-x-2 gap-y-1 text-lg md:text-4xl font-semibold">
                        {rules.map((rule, i) => (
                            <span key={rule} className="break-all">
                                {rule}{i < rules.length - 1 && <span className="opacity-40"> |</span>}
                            </span>
                        ))}
                    </dd>
                </div>
            ))}
        </dl>
    )
}
