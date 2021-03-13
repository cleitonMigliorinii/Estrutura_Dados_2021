// Online C compiler to run C program online
#include <stdio.h>
#include <stdlib.h>

int main() {
    
    char *senha;
    
    //RESERVA 1BYTE POR ENDEREÇO.
    senha = (char *) malloc(20 * sizeof(char));
    printf("Informe sua senha (MAX. 20) : ");
    scanf("%s", senha);
    
    printf("Sua senha eh : %s \n", senha);
    printf("Endereço eh : %X \n", senha);
    
    printf("---------- realloc -----------------\n");
    senha = (char*) realloc(senha, 30 * sizeof(char));
    printf("Sua senha eh : %s \n", senha);
    printf("Endereço eh : %X \n", senha);
    printf(" ultimo endereço eh: %X \n", senha + 1);

    printf("---------- free -----------------\n");
    free(senha);
    senha = NULL;
    printf("---------- exec free -----------------\n");
    printf("Endereço apos free : %X \n", senha);
    printf("Senha apos free : %s", senha);
 
    return 0;
}
