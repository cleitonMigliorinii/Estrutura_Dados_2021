/*
    Pega a posicao 1 como pixo e compara para a esquerda com a posicao 0.

    Caso trocar compara novamente com a posicao anterior.
*/
/*
    Comparacao = 8
    Trocas = 5[3,2,4,1,7,6]
    Passos = 5
*/

var vetor = [3,2,4,1,7,6];
var comparacoes = 0;
var passos = 0;
var trocas = 0;


function ordenarVetorMetodoInsercao(){

    var tamanhoVetor = vetor.length;
    var valorAux;
    var posicaoComparacao;

    //realizar os passos
    for( var i = 1; i < tamanhoVetor; i++){
        passos++;
        posicaoComparacao = i;
        valorAux = vetor[i];

        while(posicaoComparacao > 0 
            && vetor[posicaoComparacao -1] > valorAux){

                comparacoes++;
                trocas++;
                vetor[posicaoComparacao] = vetor[posicaoComparacao - 1];
                posicaoComparacao--;
        }

        if(posicaoComparacao > 0){
            comparacoes++;
        }

        vetor[posicaoComparacao] = valorAux;

    }



}

console.time();
    ordenarVetorMetodoInsercao();
console.timeEnd();

console.log(` Comparações : ${comparacoes}`);
console.log(` Trocas : ${trocas}`);
console.log(` Passos : ${passos}`);
console.log(` Vetor Ordenado: ${vetor}`)