/**
 * @name Deterministic Finite Automaton
 * 
 * @description This class is used to create or construct a DFA. It has the following properties:
 * 
 * @property Q - set of states
 * 
 * @property Sigma - alphabet
 * 
 * @property delta - transition function
 * 
 * @property q0 - start state
 * 
 * @property F - final states
 * 
 * @property path - path of the DFA
 * 
 */
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
   * "q0.a":"q1", "q0.b":"q2",
   * "q1.a":"q3", "q1.b":"q7",
   * "q2.a":"q8", "q2.b":"q4",
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


  /**
   * @description The path of the DFA. This is used to show the path of the DFA when it is executed.
   * @example path = [q0, q1, q2]
   * @example path = [q0, q1, q2, q3]
  */
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
  /**
   * @description gets the states of the Regular Expression
   * @param w - input of the user
   * @returns boolean
   */
  execute(w:string) { // w = "ab"
    if (this.path.length > 0)
      this.path = [];
      
    let q = this.q0; // "q0"
    this.path.push(q);
    while (w != "" && this.Q.includes(q) && q != "qT") {
      q = this.delta[`${q}.${w[0]}`]; // "q0.a": "q1"
      this.path.push(q); 
      w = w.slice(1);
    }
    if (this.F.includes(q)) 
      return true;
    return false;
  }
}

/**
 * Example of a DFA
 * const prob1 = new DFA(
            ["a","b"],  
            ['q0', 'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7','q8'], 
            'q0', 
            ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7','q8'],
            {
                "q0.a":"q1", "q0.b":"q2",
                "q1.a":"q3", "q1.b":"q7",
                "q2.a":"q8", "q2.b":"q4",
                "q3.a":"q5", "q3.b":"q6",
                "q4.a":"q5", "q4.b":"q6",
                "q5.a":"q5", "q5.b":"q6",
                "q6.a":"q5", "q6.b":"q6",
                "q7.a":"q8", "q7.b":"q8",
                "q8.a":"q7", "q8.b":"q7",
            }
        );
 */