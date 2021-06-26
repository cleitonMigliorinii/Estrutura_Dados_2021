import {Router} from "express";
import { ControllerTree } from './controllers/ControllerTree';

const router = Router();
const controllerTree = new ControllerTree();

/*
router.get("/admin", function(request, response){
    response.json({
        "nome": "Cleiton",
        "idade": 19
    })
});*/

router.get("/inserirNo/:node", controllerTree.executeInsertionNodeTree);
router.get("/mostrarArvore", controllerTree.executePrintTree);



export {router};