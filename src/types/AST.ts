export interface IASTNode {
    type: "Union"|"Concatenation"|"Kleene"|"Literal";
    value: string | null;
    children: ASTNode[];
    child: ASTNode | null;
}
export class ASTNode implements IASTNode{
  child: ASTNode | null;
  constructor(public type: "Union"|"Concatenation"|"Kleene"|"Literal", public value: string | null, public children: ASTNode[] = []){
      this.type = type;
      this.value = value;
      this.children = children;
      this.child = null;
  }
}