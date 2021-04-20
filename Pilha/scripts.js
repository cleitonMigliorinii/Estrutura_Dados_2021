
function Pilha(){

    let itensPilha = [];

    this.push = function(value){
       
        itensPilha.push(value);
        this.createItemStack(value);
        console.table(itensPilha);

    };

    this.pop = function(){};

    this.clean = function(){};

    this.createItemStack = function(value){

        //DOM
        let elementoPilha = document.getElementById("pilha");
        elementoPilha.remove();
    }

}


const pilha = new Pilha();
