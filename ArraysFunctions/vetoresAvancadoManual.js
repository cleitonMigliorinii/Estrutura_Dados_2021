/*

    -> Adicionar valor no final do vetor.
    -> Adicionar no inicio do vetor.
    -> Verificar quantidade de valor.
    -> Mostrar valores do vetor.
    -> Obter valor da ultima posicao.
    -> Obter valor de qualquer posicao.
    -> Verificar se valor existe.
    -> Remover ultimo valor.
    -> Remover qualquer valor.
    -> Remover qualquer posicao.

*/
const constTamanhoTotal = 10;
var vetor = new Array(constTamanhoTotal);
var controleTamanhoOcupado = 0;

function verificarVetorCheio(){
    /*if(controleTamanhoOcupado < constTamanhoTotal){
        return true;
    }else{
        return false
    }*/

    // Condição Ternário
    // condicao ? respostaVerdadeira : respostaFalsa;
    // ? - > retorna duas condicoes
    // && -> somente com verdadeiro
    return (controleTamanhoOcupado < constTamanhoTotal) ? true : false;

}

function adicionarValorVetor(posicao, valor){
    vetor[posicao] = valor;
    controleTamanhoOcupado++;
}

function adicionarValorFinalVetor(valor){

    if(verificarVetorCheio()){
        adicionarValorVetor(controleTamanhoOcupado, valor);
    }else{
        console.log("O vetor esta cheio !!!! ");
    }
  
}

function adicionarValorInicioVetor(valor){
     //[0 , 1 , 2 ,3 , 4, 5] - index
    // [1 , 2 , 3 ,4 , 4 ]
    // realocar [ 1, 1 , 2 , 3 , 4 , 5];
    if(verificarVetorCheio()){

        for(var i = controleTamanhoOcupado; i >= 0; i--){
            vetor[i] = vetor[i - 1];
        }

        adicionarValorVetor(0, valor);
    }

}

function verificarQuantidadeValoresVetor(){
    return controleTamanhoOcupado;
}

function mostrarValoresDoVetor(){
    console.log(`vetor ${vetor}`);
    console.log(`Tamanho Ocupado ${controleTamanhoOcupado}`);

    var vetorResultado = [];

    for(i = 0; i < controleTamanhoOcupado; i++){
        vetorResultado[i] = vetor[i];
    }

    return vetorResultado.toString();
}

function obterValorUltimaPosicao(){
    return vetor[controleTamanhoOcupado - 1];
}

function obterValorQualquerPosicao(posicao){
    return posicao < controleTamanhoOcupado ? vetor[posicao] : null;
}

function retornaPosicaoDoValorNoVetor(valorBusca){

    let posicaoEncontrada = null;

    for(var i = 0; i < controleTamanhoOcupado; i++){
         (vetor[i] == valorBusca) && (posicaoEncontrada = i);
    }

    return posicaoEncontrada;

}

function removeUltimoValorVetor(){
    if(controleTamanhoOcupado > 0){
        vetor[controleTamanhoOcupado - 1] = undefined;
        controleTamanhoOcupado--; 
    }
}

function removerQualquerValorVetor(valorBusca){

    const posicao = retornaPosicaoDoValorNoVetor(valorBusca);

    if(posicao != null){
        // [1, 2, 3 ,4] - REMOVER O 2
        // [1, 3, 4]
        for(var i = posicao; i < controleTamanhoOcupado; i++){
            vetor[i] = vetor[i + 1];
        }

        controleTamanhoOcupado--;

    }

}

function removerQualquerPosicaoVetor(posicao){

    if(posicao >= 0 && posicao < controleTamanhoOcupado){
        // [1, 2, 3 ,4] - REMOVER O 2
        // [1, 3, 4]
        for(var i = posicao; i < controleTamanhoOcupado; i++){
            vetor[i] = vetor[i + 1];
        }

        controleTamanhoOcupado--;

    }

}

module.exports = 
{
    verificarQuantidadeValoresVetor,
    verificarVetorCheio,
    adicionarValorFinalVetor,
    mostrarValoresDoVetor,
    removerQualquerPosicaoVetor

}


/*
mostrarValoresDoVetor();
adicionarValorFinalVetor(10);
adicionarValorFinalVetor(20);
adicionarValorFinalVetor(30);
adicionarValorFinalVetor(40);
mostrarValoresDoVetor();
adicionarValorInicioVetor(-5);
mostrarValoresDoVetor();

console.log(retornaPosicaoDoValorNoVetor(20));

removerQualquerValorVetor(20)
mostrarValoresDoVetor();
*/


















