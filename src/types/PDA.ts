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


    constructor(path: {[key:string]: string}, action: string[], NonTerminal: string[]) {
        this.transition = path
        this.path = []
        this.action = action
        this.NonTerminal = NonTerminal
    }
    

    getPath(): string[] {
        return this.path
    }

}