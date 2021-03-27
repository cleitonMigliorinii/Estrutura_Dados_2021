const test = require('tape');
const vetor = require('./vetoresAvancado.js');

//test(description, function);

test('deveVerificarSeVetorAdicionouValor', (value) => {
    vetor.adicionarValorFinalVetor(15);
    value.assert(vetor.verificarQuantidadeValoresVetor() == 1, "Adicinou no contador")
    value.end();
})

