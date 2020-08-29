/*02 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados. */
const a = 5; 
const b = 6;
let maior = 0;

if(a > b){
    maior = a;
}else{
    maior = b;
}

console.log("O maior valor entre "+ a + " e " + b + " é "+maior);