// Online C compiler to run C program online
#include <stdio.h>

int main() {
    int vetor[10];
    
    for(int i = 0; i < 10; i++){
        vetor[i] = 9 - i;
        printf("Valor %d \n", vetor[i]);
    }
    
    for(int i = 0; i < 10; i++){
        
        /*
            vetor[0] = vetor[vetor[0]];
            vetor[0] = vetor[9];
            vetor[0] = 0;
        
            vetor[1] = vetor[vetor[1]];
            vetor[1] = vetor[8];
            vetor[1] = 1;
        */
      
        vetor[i] = vetor[vetor[i]];
        printf("Valor %d \n", vetor[i]);
    }
    
    
    return 0;
}
