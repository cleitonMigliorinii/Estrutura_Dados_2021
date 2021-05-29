// Ordenacao BubbleSort
var vetor = [3,2,4,1,7,6];
// P - 4  C - 10 - T - 3 - vetor [3, 4, 5 ,6 ,10]
// 4 3 2 1 
var tamanhoVetor = 50000;

var comparacao = 0;
var trocas = 0;
var passos = 0;
var tempo = 0;

function gerarVetor(){

    for(i = 0; i < tamanhoVetor; i++){

        vetor[i] = Math.floor(Math.random() * 10000);

        if(i == 500){
            vetor[i] = 400;
        }

    }

}

function realizarTrocas(posicaoInicial, posicaoTroca){

    var valorAux = vetor[posicaoInicial];
    vetor[posicaoInicial] = vetor[posicaoTroca];
    vetor[posicaoTroca] = valorAux;

    trocas++;
}

function ordenarVetor(){

    let controleTamanhoVetor = vetor.length - 1;
    //Vai realizar os passos
    for(var i = 0; i < vetor.length - 1;i++){
        passos++;    
        //Realizar comparacao e troca
        for(var j= 0; j < controleTamanhoVetor; j++){

            if(vetor[j] > vetor[j+1]){
                //realizar a troca
                realizarTrocas(j, j+1);
            }
            comparacao++;
        }
        controleTamanhoVetor--;
    }
};

//gerarVetor();

//var dataStart = Date.now();
    console.time();
    ordenarVetor();
    console.timeEnd();
//var dateEnd = Date.now();

//tempo = dateEnd - dataStart;

console.log(`Tempo ${tempo} ms`)
console.log(`Passos : ${passos}`);
console.log(`Comparaçoes : ${comparacao}`);
console.log(`Trocas : ${trocas}`);

