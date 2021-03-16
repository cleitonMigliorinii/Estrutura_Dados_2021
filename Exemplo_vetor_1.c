// Online C compiler to run C program online
#include <stdio.h>

int main() {
   
   //int vetorIdades[10] = {1,2,3,4,5,6,7,8,9,0};
   int vetorIdades[10];
   double valor = 5.34453523278523;
   
   printf(" Valor na posicao 0 eh : %f \n\n",valor);
   
   vetorIdades[0] = 90;
   vetorIdades[1] = 91.7;
   vetorIdades[2] = 92.7;
   
   printf(" Valor na posicao 0 eh : %d \n\n", vetorIdades[1]);
   
   
   int vetorNumeroCasa[10];
   
   vetorNumeroCasa[0] = 10;
   vetorNumeroCasa[1] = 917;
   vetorNumeroCasa[2] = 927;
   int contador = 3;
   int somarNumeros = 0;
   
   for(int i = 0; i < contador; i++){
       
       printf("Numero da casa na posicao %d eh %d no endereco %x \n", i, vetorNumeroCasa[i], vetorNumeroCasa + i);
       
       somarNumeros = somarNumeros + vetorNumeroCasa[i];
       
   }
   
   printf("Soma eh %d", somarNumeros);
   
   
    
    return 0;
}
