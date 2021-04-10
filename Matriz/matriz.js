//linha
var temperaturas = [];

//coluna
temperaturas[0] = [];

temperaturas[0][0] = 5;
temperaturas[0][1] = 6;
temperaturas[0][2] = 7;

temperaturas[1] = [];
temperaturas[1][0] = 8;
temperaturas[1][1] = 9;
temperaturas[1][2] = 10;

//printMatriz(temperaturas);
createMatriz3x3x3();

function printMatriz(matriz){

    for(var linha = 0; linha < matriz.length; linha++){
        //vai percorrer as linhas
        for(var coluna = 0; coluna < matriz[linha].length; coluna++ ){
            //vai percorrer as colunas
            console.log(`Matriz [${linha}][${coluna}] = ${matriz[linha][coluna]}`)

        }
    }

}

function printMatriz3X3X3(matriz){
    //out Matriz[0][0][1] = valor

    for(var linha = 0; linha < matriz.length; linha++){
        //vai percorrer as linhas
        for(var coluna = 0; coluna < matriz[linha].length; coluna++ ){
            //vai percorrer as colunas

            for(var profundidade = 0; profundidade < matriz[linha][coluna].length; 
                        profundidade++ ){
                //vai percorrer as colunas

                //vai exibir a Matriz
                console.log(`Matriz [${linha}][${coluna}][${profundidade}] 
                            = ${matriz[linha][coluna][profundidade]}`)
    
            }

        }
    }

}

function createMatriz3x3x3(){

    //criar dimensao 1
    var matriz3x3x3 = [];

    for(var linha = 0; linha < 3; linha++){
        //percorrer a linha

        //criando a dimensao 2
        matriz3x3x3[linha] = [];

        for(var coluna = 0; coluna < 3; coluna++){
            //percorrer a coluna

            //criando a dimensao 3
            matriz3x3x3[linha][coluna] = [];

            for(var profundidade = 0; profundidade < 3; profundidade++){
                //percorrer a profundidade

                //vai popular a matriz
                matriz3x3x3[linha][coluna][profundidade] 
                                        = linha + coluna + profundidade;

            }

        }
        

    }

    printMatriz3X3X3(matriz3x3x3);

}





