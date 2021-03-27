//Por que utilizar Vetores
const nomeAluno_1 = "Lucas";
const nomeAluno_2 = "Garbin";
const nomeAluno_3 = "Prolo";
const nomeAluno_4 = "Glademir";
const nomeAluno_5 = "Gustavo";
const nomeAluno_6 = "Santola";
const nomeAluno_7 = "Gabriel";
const nomeAluno_8 = "Eric";
const nomeAluno_9 = "Julio";
const nomeAluno_10 = "Marco";

// O index do vetor sempre começa de ZERO

//Criação de um vetor
var vetorNomeAlunos = ["Carlos", "Roberto", "Taffe"];
vetorNomeAlunos[3] = "Lucas";
vetorNomeAlunos[4] = "Santola";
console.log(vetorNomeAlunos);

//Criar um array dinamico sem tamanho fixo
var arrayNomeAlunos = new Array();

//Criar um array com tamanho
var arrayNomeAlunosStatic = new Array(3);
arrayNomeAlunosStatic[0] = "Eric";
arrayNomeAlunosStatic[4] = "Prolo";

//Criar um array com valores
var arrayNomeAlunos = new Array("Paulo", "Zé");

console.error(arrayNomeAlunos);
console.warn(arrayNomeAlunosStatic);
console.table(arrayNomeAlunos);
