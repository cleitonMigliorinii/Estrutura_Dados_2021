// Online C compiler to run C program online
#include <stdio.h>
#include <stdlib.h>

int main() {
    
  int numeroCasa;
  int *ponteiroNumeroCasa;
  int **ponteiroDoPonteiroNumeroCasa;

  numeroCasa = 0;
  printf("O numero da casa eh : %d \n", numeroCasa);
  printf("O endereço da variavel eh : %x \n", &numeroCasa);

  ponteiroNumeroCasa = &numeroCasa;
  ponteiroDoPonteiroNumeroCasa = &ponteiroNumeroCasa;

  printf(" O end. guardado do ponteiro eh: %x \n", ponteiroNumeroCasa);

  printf(" O end. do ponteiro eh: %x \n", &ponteiroNumeroCasa);
  printf(" O end. pont. do ponteiro eh: %x \n", ponteiroDoPonteiroNumeroCasa);

  *ponteiroNumeroCasa = 100;
  printf("O numero da casa eh : %d \n", numeroCasa);

  **ponteiroDoPonteiroNumeroCasa = 500;
  printf("O numero da casa eh : %d \n", numeroCasa);


  return 0;
}
