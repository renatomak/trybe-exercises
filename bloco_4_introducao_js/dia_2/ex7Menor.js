/**7 - Utilizando for, descubra qual o menor valor contido no array e imprima-o; */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function menorValor(valores){
    let menor = 9999999;/*Aqui poderia usar a função maior() do exercício 05*/

    for(valor of valores){
        if(valor < menor){

            menor = valor;
        }
    }

    return menor;
}

console.log(`Exercício 07: O menor valor é ${menorValor(numbers)}`);