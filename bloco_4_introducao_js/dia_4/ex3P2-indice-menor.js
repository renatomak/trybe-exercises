/**3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3];.
Valor esperado no retorno da função: 6. */

let valores = [2, 4, 6, 7, 10, 0, -3];

function indiceMenorValor(array){
    let menor = 0;

    for(let i = 1; i < array.length; i++){
        if(array[menor] >= array[i]){
            menor = i;
        }
    }

    return menor;
}

console.log("A posição do menor valor é " + indiceMenorValor(valores));