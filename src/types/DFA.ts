

export class DFA {
  /**
   * @description The set of states of the DFA
   * @example
   * Q = {q0, q1, q2}
   * @example
   * Q = {q0, q1, q2, q3}
   */
  public Q: string[]
  /**
   * @description The alphabet of the DFA
   */
  public Sigma: string[]
  /**
   * @description The transition function of the DFA
   * @example
   * delta = {
   * q0: {a: q1, b: q2},
   * q1: {a: q1, b: q2},
   * }
   */
  public delta: {[key: string]: string}
  /**
   * @description The start state of the DFA or the initial state.
   * @example
   * q0
   */
  public q0: string
  /**
   * @description The final state/states of the DFA. This could be multiple.
   * @example F = [0,2]
   */
  public F: string[]

  public path: string[]
  constructor(Sigma:string[], Q: string[] , q0: string, F: string[], delta: {[key: string]: string}) {
    this.Q = Q; // set of states
    this.Sigma = Sigma; // alphabet
    this.delta = delta; // transition function
    this.q0 = q0; // start state
    this.F = F; // final states
    this.path = [];
  }
  /**
   * @description gets the alphabet of the Regular Expression
   * @param reg Regular Expression
   * @returns the alphabet of the Regular Expression. e.i ['a','b']
   */
  getSymbols(reg:string): string[] {
    if (this.Q.length > 0) 
      return this.Q;
    
    let symbols: string[] = [];
    for (let i = 0; i < reg.length; i++) 
      if (reg[i] != '(' && reg[i] != ')' && reg[i] != '*' && reg[i] != '+' && reg[i] != '|'  && !symbols.includes(reg[i])) 
        symbols.push(reg[i]);
    return symbols;
  }
  execute(w:string) {
    if (this.path.length > 0)
      this.path = [];
      
    let q = this.q0;
    this.path.push(q);
    while (w != "" && this.Q.includes(q)) {
      q = this.delta[`${q}.${w[0]}`];
      this.path.push(q);
      w = w.slice(1);
    }
    if (this.F.includes(q)) 
      return true;
    return false;
  }
}

