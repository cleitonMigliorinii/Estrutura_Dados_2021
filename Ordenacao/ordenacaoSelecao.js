/* 
    
    Pega o primeiro valor, comparar com o restatante.

    Encontrando o menor valor, realiza a troca.

    Comparação e passos == metodo bolha.

    Troca tem no máximo o numero de passos.

    5 PASSOS NO MÁXIMO VOU TER 5 TROCAS.

*/
/*
    Teste [3,2,4,1,7,6]
    5 passos
    15 comparação
    3 Trocas
*/

var vetor = [3,2,4,1,7,6];
var comparacoes = 0;
var trocas = 0;
var passos = 0;
var tempo = 0;

function realizarTroca(posicaoInicial, posicaoTroca){

    var vetorAux = vetor[posicaoInicial];
    vetor[posicaoInicial] = vetor[posicaoTroca];
    vetor[posicaoTroca] = vetorAux;

    trocas++;

}

function ordenarVetorMetodoSelecao(){

    //Obter o tamanho do vetor
    var tamanhoVetor = vetor.length;
    var posicaoInteragindo;

    //Vai controlar os passos
    for(var i = 0; i < tamanhoVetor - 1; i++){
        
        passos++;
        //Controlador de menor posicao
        posicaoInteragindo = i;

        //Vai comparar os valores 
        for(var j = i + 1; j < tamanhoVetor; j++){
          
            if(vetor[posicaoInteragindo] > vetor[j]){
                // Mudo quando encontrar uma posicao menor que a posicao Interagindo
                posicaoInteragindo = j;
            }

            comparacoes++;

        }

        if(i !== posicaoInteragindo){
            //Se o posicaoInteragindo for digerente da posicao atual realiza uma troca
            realizarTroca(i, posicaoInteragindo);
        }

    }

}

console.time();
    ordenarVetorMetodoSelecao();
console.timeEnd();

console.log(` Comparações : ${comparacoes}`);
console.log(` Trocas : ${trocas}`);
console.log(` Passos : ${passos}`);
console.log(` Vetor Ordenado : ${vetor}`);