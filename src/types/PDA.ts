/**
 * @name Pushdown Automaton
 * @description A class representing a Pushdown Automaton
 * 
 */
export class PDA {

    public action: string[]
    
    public NonTerminal: string[] | ["Start", "Accept", "Reject"]

    public transition: {[key:string]: string}

    public path: string[]


    constructor(transition: {[key:string]: string}, action: string[], NonTerminal: string[]) {
        this.transition = transition
        this.path = []
        this.action = action
        this.NonTerminal = NonTerminal
    }
    

    getPath(input:string): string[] {
        if (this.path.length >= 0) this.path = []
        
        let state = "Start"
        this.path.push(state)

        for (let i = 0; i < input.length; i++) {
            let key = state + "." + input[i]
            if (this.transition[key] === undefined) {
                return this.path
            }
            state = this.transition[key]
            this.path.push(state)
        }   
        return this.path
    }


}