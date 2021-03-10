// Online C compiler to run C program online
#include <stdio.h>
#include <stdlib.h>

typedef struct{
    int raAluno;
    float notaG1;
    float notaG2;
} AlunoVO;


int main() {

    float media;
    float notaSubG1;
    AlunoVO aluno;
    // & -> pega o endereco da variavel
    AlunoVO *ponteiroAluno = &aluno;
    
    aluno.raAluno = 3456;
    aluno.notaG1 = 3.4; 
    aluno.notaG2 = 7.6;
    
    media = (aluno.notaG1 + aluno.notaG2) / 2;
    
    printf(" RA %d \n", (*ponteiroAluno).raAluno );
    printf("-----------------\n");
    printf("Nota G1 :  %.2f \n", ponteiroAluno->notaG1);
    printf("Nota G2 :  %.2f \n", aluno.notaG2);
    printf("Media final : %.2f \n", media);
    
    printf(" Informe a nota de sub de G1 : \n");
    scanf("%f", &notaSubG1);
    
    //aluno.notaG1 = notaSubG1;
    //(*ponteiroAluno).notaG1 = notaSubG1;
    ponteiroAluno->notaG1;
    
    media = (aluno.notaG1 + aluno.notaG2) / 2;
    
    printf(" RA %d \n", (*ponteiroAluno).raAluno );
    printf("-----------------\n");
    printf("Nota G1 :  %.2f \n", ponteiroAluno->notaG1);
    printf("Nota G2 :  %.2f \n", aluno.notaG2);
    printf("Media final : %.2f \n", media);
    
    return 0;
}
