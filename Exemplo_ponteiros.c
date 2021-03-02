// Online C compiler to run C program online
#include <stdio.h>
#include <stdlib.h>

int main() {
    
    //Criação da variavel
    int idadeUsuario = 27;
    float imcUsuario = 60.8;
    
    /*  
        Declaração do ponteiro
        O * identifica que será um ponteiro.
        O tipo do ponteiro deve ser igual o da variavel que desejamos armazenar
    */
    int *ponteiro;
    
    /*  
        Atribuindo o endereço para o ponteiro
        O & obtem o endereço da variavel.
    */
    *ponteiro = &idadeUsuario;
    
    // %d = int, %x = hexadecimal, %f = float 
    // %.2f = definir casas decimais float
    printf(" O valor da variavel eh: %d \n", idadeUsuario);
    printf(" O endereço eh : %x \n", &idadeUsuario);
    printf(" O endereco do ponteiro : %x \n", ponteiro);
    printf(" O endereco da var via ponteiro : %x \n", *ponteiro);
    
    printf("O valor do IMC eh : %.2f \n", imcUsuario);
    printf("Endereço do imc eh : %x \n", &imcUsuario);
    
    return 0;
}
