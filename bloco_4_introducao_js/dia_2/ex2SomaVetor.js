/*2 - Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;*/

const assert = require('assert');

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function sumVector(valores){
    let soma = 0;

    for(valor of valores){
        soma += valor;
    }

    return soma;    
}

console.log("Exercício 2: A Soma é = " + sumVector(numbers));

const expected = sumVector(numbers);

assert.ok(expected === 278, "erro")
assert(expected === 2, 'O resultado é 278');