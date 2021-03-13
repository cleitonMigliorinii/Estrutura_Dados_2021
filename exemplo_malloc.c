// Online C compiler to run C program online
#include <stdio.h>

typedef struct{
    int isnb;
    char nomeLivro[10]; //1 BYTE = 'C'  50 = .....
    int paginas;
    int paginasLidas;
    int minutosTermino;
} LivroVO;

int main() {
    int *ponteiroNumero; // 4 byets
    
    /* (tipo) malloc(
        tamanho que sera reservado
         * deve ser um int
         utilizar sizeOf para obter tamanho do tipo
        )
    */
    
    
    printf(" SIZEOF : %d \n", sizeof(LivroVO));
    
    ponteiroNumero = (int *) malloc( 10 * sizeof(int));
    ponteiroNumero[0] = 10;
    ponteiroNumero[1] = 10;
     printf(" SIZEOF ponteiro: %d \n", sizeof(*ponteiroNumero));
    
    printf(" %x ", ponteiroNumero);
    printf(" %x ", ponteiroNumero + 1);
    printf(" %x ", ponteiroNumero + 2);
    printf(" %x ", ponteiroNumero + 3);
    printf(" %x ", ponteiroNumero + 4);

    return 0;
}
