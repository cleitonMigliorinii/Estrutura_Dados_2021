import ServicesTree from "../services/ServicesTree";
import { Request, Response } from "express";
import NodeTree from "../model/NodeTree";

var rootTree: NodeTree | null = null;

class ControllerTree {

   executeInsertionNodeTree(request: Request, response: Response){ 
        
          const serviceTree = new ServicesTree();
          const { node } = request.params;
          rootTree = serviceTree.insertionTree(rootTree, parseInt(node));

          response.json({code:200, msg:"Inserido com sucesso"});
   }

   executePrintTree(request: Request, response: Response){
        const serviceTree = new ServicesTree();
        response.json(serviceTree.printTree(rootTree));
   }

}

export { ControllerTree };

/*let controllerTree = new ControllerTree();

controllerTree.executeInsertionNodeTree(10);
controllerTree.executeInsertionNodeTree(20);
controllerTree.executeInsertionNodeTree(15);
controllerTree.executeInsertionNodeTree(56);
controllerTree.executeInsertionNodeTree(23);

controllerTree.executePrintTree();
*/