/**
 * @name Context-Free Grammar
 * @description A context-free grammar (CFG) is a set of recursive rewriting rules (or productions) used to generate patterns of strings. A CFG consists of the following components:
 * @property V - set of variables or non-terminals (e.i. S, A, B)
 * @property T - set of terminals like `{"a", "b", "c"}`
 * @property P - set of productions like `{"S":["aSb", "A"], "A":["bA", "b"]}`
 * @property S - start variable like `S`
 * 
 */
export class CFG {
    /**
     * @description The set of variables of the CFG
     * @example
     * V = {S, A, B}
     */
    public V: string[]

    /**
     * @description The set of terminals of the CFG
     * @example
     * T = {a, b}
     * @example
     * T = {a, b, c}
     */
    public terminals: string[]

    /**
     * @description The set of productions of the CFG
     * @example
     * P = {
     * "S": ["aSb", "A"],
     * "A": ["bA", "b"]
     * }
     */
    public production: {[key: string]: string[]}

    /**
     * @description The start variable of the CFG
     * @example
     * S
     */
    public start_variable: string

    constructor(V: string[], T: string[], P: {[key: string]: string[]}, S: string) {
        this.V = V; // set of variables
        this.terminals = T; // set of terminals
        this.production = P; // set of productions
        this.start_variable = S; // start variable
    }
    /**
     * 
     * @returns The string representation of the CFG
     */
    getString(): string {
        var str = "";
        for (var key in this.production) str += `${key} -> ${this.production[key].join(' | ')}\n`
        return str
    }
    getAvailableVariables(): string[] {
        return this.V
    }

}

