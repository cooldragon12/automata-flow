import type { Trace, TraceFrame } from "./DFA"

/**
 * @name Pushdown Automaton
 * @description A class representing a Pushdown Automaton
 * 
 */
export class PDA {

    public action: string[]
    
    public NonTerminal: string[] | ["Start", "Accept", "Reject"]

    public transition: {[key:string]: string}

    public stack: string[]


    constructor(transition: {[key:string]: string}, action: string[], NonTerminal: string[]) {
        this.transition = transition
        this.stack = []
        this.action = action
        this.NonTerminal = NonTerminal
    }
    

    getStack(input:string): string[] {
        if (this.stack.length >= 0) this.stack = []

        let state = "Start"
        this.stack.push(state)
        state = "Read1"
        this.stack.push(state)

        while (input.length >= 0) {
            if (input.length === 0) {
                let key = state + "." + "ε"
                if (this.transition[key] === undefined) {
                    return this.stack
                }
                state = this.transition[key]
                this.stack.push(state)
                return this.stack
            }
            let key = state + "." + input[0]

            if (this.transition[key] === undefined) {
                
                return this.stack
            }
            state = this.transition[key]
            this.stack.push(state)
            input = input.slice(1)
        }   
        return this.stack
    }


    /**
     * @description Pure step-by-step run used by the simulation. Halts on Accept/Reject or a missing transition.
     */
    trace(input: string): Trace {
        const frames: TraceFrame[] = [{ node: "Start", consumed: 0 }]
        let state = this.transition["Start"]
        frames.push({ node: state, from: "Start", consumed: 0 })
        let i = 0
        while (!(this.NonTerminal as string[]).includes(state)) {
            const symbol = i === input.length ? "ε" : input[i]
            const next = this.transition[`${state}.${symbol}`]
            if (next === undefined) break
            if (symbol !== "ε") i++
            frames.push({ node: next, from: state, symbol, consumed: i })
            state = next
            if (symbol === "ε") break
        }
        return { frames, accepted: state === "Accept" }
    }
}
