var vetor = [];
var vetorOrdenado = [];
var tamanhoVetor = 100000;

function gerarVetor(){

    for(i = 0; i < tamanhoVetor; i++){

        vetor[i] = Math.floor(Math.random() * 10000);

        if(i == 500){
            vetor[i] = 400;
        }

    }

}

function buscarValorVetorNaoOrdenado(valorBusca){

    for(i = 0; i < tamanhoVetor; i++){

        if(vetor[i] == valorBusca){
            return true;
        }

    }

    return false;

}

function ordenarVetor(){

    return vetor.sort();

}

function buscarValorVetorOrdenado(valorBusca){

    for(i = 0; i < tamanhoVetor; i++){

        if(vetorOrdenado[i] == valorBusca){
            return true;
        }

        if(vetorOrdenado[i] > valorBusca){
            return false;
        }

    }

    return false;

}


gerarVetor();
console.time('Ordenar');
vetorOrdenado = ordenarVetor();
console.timeEnd('Ordenar');

console.time('Não ordenado');
    var encontrou = buscarValorVetorNaoOrdenado(-1);
console.timeEnd('Não ordenado');

console.time('Ordenado');
    var encontrouOrder = buscarValorVetorOrdenado(-1);
console.timeEnd('Ordenado');
