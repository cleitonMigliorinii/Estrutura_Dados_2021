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
var vetor = new Array();
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
    return (vetor.length < constTamanhoTotal) ? true : false;

}

function erroVetorCheio(){
    console.log("O vetor esta cheio !!!! ");
}

function adicionarValorFinalVetor(valor){
    verificarVetorCheio() ? vetor.push(valor) : erroVetorCheio();
}

function adicionarValorInicioVetor(valor){
    verificarVetorCheio() ? vetor.unshift(valor) : erroVetorCheio();
}

function verificarQuantidadeValoresVetor(){
    return vetor.length;
}

function mostrarValoresDoVetor(){
    console.log(`vetor ${vetor}`);
    console.log(`Tamanho Ocupado ${vetor.length}`);

    return vetor.toString();
}

function obterValorUltimaPosicao(){
    return vetor[vetor.length - 1];
}

function obterValorQualquerPosicao(posicao){
    return posicao < vetor.length ? vetor[posicao] : null;
}

function retornaPosicaoDoValorNoVetor(valorBusca){

    return vetor.indexOf(valorBusca);

}

function removeUltimoValorVetor(){
    vetor.length > 0 && vetor.pop(); 
}

function removerPrimeiroValorVetor(){
    vetor.length > 0 && vetor.shift();
}

function removerQualquerValorVetor(valorBusca){

    const posicao = retornaPosicaoDoValorNoVetor(valorBusca);

    if(posicao != null){
        // [1, 2, 3 ,4] - REMOVER O 2
        // [1, 3, 4]
        for(var i = posicao; i < vetor.length; i++){
            vetor[i] = vetor[i + 1];
        }
    }

}

function removerQualquerPosicaoVetor(posicao){

    if(posicao >= 0 && posicao < vetor.length){
        // [1, 2, 3 ,4] - REMOVER O 2
        // [1, 3, 4]
        for(var i = posicao; i < vetor.length; i++){
            vetor[i] = vetor[i + 1];
        }

   

    }

}

module.exports = 
{
    verificarQuantidadeValoresVetor,
    verificarVetorCheio,
    adicionarValorFinalVetor,
    mostrarValoresDoVetor,
    removerQualquerPosicaoVetor,
    removerPrimeiroValorVetor

}


/*
mostrarValoresDoVetor();

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


















