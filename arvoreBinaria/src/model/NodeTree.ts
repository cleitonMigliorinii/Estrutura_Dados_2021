class NodeTree {

    nodeValue : number;
    nodeLeft : NodeTree | null;
    nodeRigth : NodeTree | null;

    constructor(value : number){
        this.nodeValue = value;
        this.nodeLeft = null;
        this.nodeRigth = null;
    }

}

export default NodeTree;