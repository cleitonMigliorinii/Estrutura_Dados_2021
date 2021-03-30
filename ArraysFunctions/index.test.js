const test = require('tape');
const vetor = require('./vetoresAvancado.js');

//test(description, function);

test('deveVerificarSeVetorAdicionouValor', (value) => {
    vetor.adicionarValorFinalVetor(5);
    value.assert(vetor.verificarQuantidadeValoresVetor() == 1, "Adicinou no contador")
    value.end();
});

test('deveVerificarRealocacaoDeValoresDoVetor', (value) => {
    vetor.adicionarValorFinalVetor(10);
    vetor.adicionarValorFinalVetor(20);
    vetor.adicionarValorFinalVetor(30);
    vetor.adicionarValorFinalVetor(40);
    // [5,10,20,30,40]

    vetor.removerPrimeiroValorVetor();
    const retorno = vetor.mostrarValoresDoVetor();
    value.assert(retorno == '10,20,30,40', "Valores após remoção ficou correto")
    value.assert(vetor.verificarQuantidadeValoresVetor() == 4, "Tamanho retornou corretamente !")
    value.end();

})


