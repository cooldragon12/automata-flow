
import { ASTNode } from './AST';
export class DFAState {
    transitions: { [symbol: string]: DFAState | undefined };
    isAccepting: boolean;
  
    constructor() {
      this.transitions = {};
      this.isAccepting = false;
    }
  }
  
export class DFA {
    startState: DFAState | null;
    states: DFAState[];
    alphabet: Set<string>;
  
    constructor() {
      this.startState = null;
      this.states = [];
      this.alphabet = new Set<string>();
    }
  
    addTransition(from: DFAState, to: DFAState, symbol: string) {
      from.transitions[symbol] = to;
    }
  
    convertFromAST(ast: ASTNode) {
      const startState = new DFAState();
      this.startState = startState;
  
      this.convertASTToDFA(ast, startState);
  
      this.states = [startState];
      this.collectStates(startState);
    }
  
    convertASTToDFA(node: ASTNode, currentState: DFAState) {
      if (node.type === 'Literal') {
        const symbol = node.value!;
        this.alphabet.add(symbol);
        const nextState = new DFAState();
        this.addTransition(currentState, nextState, symbol);
      } else if (node.type === 'Concatenation') {
        for (const child of node.children!) {
          const nextState = new DFAState();
          this.addTransition(currentState, nextState, '');
          this.convertASTToDFA(child, nextState);
          currentState = nextState;
        }
      } else if (node.type === 'Union') {
        for (const child of node.children!) {
          const nextState = new DFAState();
          this.convertASTToDFA(child, nextState);
          this.addTransition(currentState, nextState, '');
        }
      } else if (node.type === 'Kleene') {
        const nextState = new DFAState();
        this.addTransition(currentState, nextState, '');
        this.convertASTToDFA(node.children[0]!, nextState);
        this.addTransition(nextState, nextState, '');
      }
    }
  
    collectStates(state: DFAState) {
      for (const symbol in state.transitions) {
        const nextState = state.transitions[symbol];
        if (nextState && !this.states.includes(nextState)) {
          this.states.push(nextState);
          this.collectStates(nextState);
        }
      }
    }
  }