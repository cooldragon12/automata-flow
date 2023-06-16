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


}