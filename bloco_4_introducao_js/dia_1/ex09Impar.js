/*Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.

Bonus: use somente um if.*/
const numA = 4; 
const numB = 2;
const numC = 1;

let resultado = false;

if(numA % 2 != 0 || numB % 2 != 0 || numC % 2 != 0){
    resultado = true;
}

console.log(resultado);