// Online C compiler to run C program online
#include <stdio.h>

typedef struct{
    int isnb;
    char nomeLivro[50]; //1 BYTE = 'C'  50 = .....
    int paginas;
    int paginasLidas;
    int minutosTermino;
} LivroVO;

void lerDados(LivroVO *ponteiroLivro){
    
    printf("Informe o ISNB do livro :");
    scanf("%d", &ponteiroLivro->isnb );
    
    printf("Informe o Nome do livro :");
    scanf("%s", &ponteiroLivro->nomeLivro);
    
    printf("Informe quantas pág. o livro tem :");
    scanf("%d", &ponteiroLivro->paginas );
    
    do {
        printf("Informe quantas pág. você já leu :");
        scanf("%d", &ponteiroLivro->paginasLidas );
    } while ( ponteiroLivro->paginasLidas > ponteiroLivro->paginas );
    
    if(ponteiroLivro->paginas == ponteiroLivro->paginasLidas){
        printf("Em quantos minutos voce terminou ? ");
        scanf("%d", &ponteiroLivro->minutosTermino );
    }
    

}

void retornarPaginasFaltantes(LivroVO livro){
    // (*ponteiro) ponteiro-> quando type for um ponteiro
    int paginasFaltantes;
    paginasFaltantes = livro.paginas - livro.paginasLidas;
    printf("Ainda faltatam %d páginas", paginasFaltantes);
    
}

int main() {
   
    LivroVO livro;
    LivroVO *ponteiro = &livro;
    
    lerDados(ponteiro);
    retornarPaginasFaltantes(livro);
    
   
    return 0;
}
