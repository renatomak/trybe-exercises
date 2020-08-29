/* Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.*/

const a = 3;
const b = 9; 
const c = 2;
let maior = 0;

if(a > b && a > c){
    maior = a;
}else if(b > a && b > c){
    maior = b;
}else{
    maior = c;
}
console.log("O maior valor entre "+ a +","+ b + " e "+ c + " é "+maior);