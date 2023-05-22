export interface IASTNode {
    type: "Union"|"Concatenation"|"Kleene"|"Literal";
    value: string | null;
    children: ASTNode[];
}
export class ASTNode implements IASTNode{
  constructor(public type: "Union"|"Concatenation"|"Kleene"|"Literal", public value: string | null, public children: ASTNode[] = []){
      this.type = type;
      this.value = value;
      this.children = children;
  }
}