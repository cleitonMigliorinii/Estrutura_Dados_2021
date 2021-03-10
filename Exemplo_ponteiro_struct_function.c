#include <stdio.h>
#include <stdlib.h>

typedef struct{
    int raAluno;
    float notaG1;
    float notaG2;
    float media;
} AlunoVO;

void calcularMedia(AlunoVO *ponteiroAluno){
    
    float media;
    
    media = ((*ponteiroAluno).notaG1 + (*ponteiroAluno).notaG2) / 2;
    
    (*ponteiroAluno).media = media;
}

void calcularMediaSemPonteiro(AlunoVO aluno){
    float media;
    
    printf(" Endereço funcao : %x \n", &aluno);
    
    media = (aluno.notaG1 + aluno.notaG2) /2;
    
    aluno.media = media;
}

int main() {
   
    float media;
    float notaSubG1;
    AlunoVO aluno;
    // & -> pega o endereco da variavel
    AlunoVO *ponteiroAluno = &aluno;
    
    printf(" Endereço eh : %x \n", &aluno);
    
    aluno.raAluno = 3456;
    aluno.notaG1 = 3.4; 
    aluno.notaG2 = 7.6;
    
    //calcularMedia(ponteiroAluno); // vai manipular o mesmo objeto
    calcularMediaSemPonteiro(aluno); // vai criar um novo endereço
    
    printf(" Media eh : %f \n", aluno.media);
    
    return 0;
}
