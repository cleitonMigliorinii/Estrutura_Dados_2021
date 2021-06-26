import NodeTree from "../model/NodeTree";


class ServicesTree {

 
    insertionTree(rootTree:any, value : number) : NodeTree{

        const newNode = new NodeTree(value);

        rootTree ? this.insertionNodeTree(rootTree, newNode) : rootTree = newNode;

        return rootTree;
    }

    private insertionNodeTree(rootNode:NodeTree, newNode: NodeTree){

        if(newNode.nodeValue < rootNode.nodeValue){
            //Vai para a esquerda
            rootNode.nodeLeft ? this.insertionNodeTree(rootNode.nodeLeft, newNode) 
                              : rootNode.nodeLeft = newNode;

        }else{
            //Vai para a direita
            rootNode.nodeRigth ? this.insertionNodeTree(rootNode.nodeRigth, newNode)
                               : rootNode.nodeRigth = newNode

        }

        return 0;

    }

    printTree(rootTree:any) : NodeTree | null{
        return rootTree;
    }


}

export default ServicesTree;