import { ASTNode } from "./AST";
export type IRegExpParser = {
    input: string;
    position: number;
}
export class RegExpParser implements IRegExpParser{
    position: number;
    constructor(public input:string) {
      this.input = input;
      this.position = 0;
    }
  
    parse(): ASTNode {
      const rootNode = this.parseExpression();
      return rootNode;
    }
    
    parseExpression(): ASTNode  {
      let node = this.parseTerm();
  
      while (this.position < this.input.length && this.input[this.position] === '+') {
        this.consume();
        const rightNode = this.parseTerm();
        node = new ASTNode('Union', null, [node, rightNode]);
      }
  
      return node;
    }
  
    parseTerm(): ASTNode {
      let node = this.parseFactor();
  
      while (this.position < this.input.length && this.input[this.position] !== ')' && this.input[this.position] !== '+' && this.input[this.position] !== ' ') {
        const rightNode = this.parseFactor();
        node = new ASTNode('Concatenation', null, [node, rightNode]);
      }
  
      return node;
    }
  
    parseFactor(): ASTNode {
      const char = this.consume();
  
      if (char === '(') {
        const node = this.parseExpression();
        this.expect(')');
        return node;
      }
  
      return new ASTNode('Literal', char);
    }
  
    consume(): string {
      return this.input[this.position++];
    }
  
    expect(expected: string) {
      const actual = this.consume();
      if (actual !== expected) {
        throw new Error(`Expected "${expected}" but found "${actual}"`);
      }
    }

}


