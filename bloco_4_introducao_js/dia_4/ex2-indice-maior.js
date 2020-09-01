/**2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1];.
Valor esperado no retorno da função: 4. */

let valores = [2, 3, 6, 7, 10, 1];


function posicaoMaior(array){
    let maior = 0;

    for(let i = 1; i < valores.length; i++){
    
        if(valores[maior] <= valores[i]) maior = i;
    }
    
    return maior;
}

console.log("A posição do maior valor é " + posicaoMaior(valores));
