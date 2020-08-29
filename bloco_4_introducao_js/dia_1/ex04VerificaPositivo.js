/*Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.*/

const valor = 5;

let resultado = "";

if(valor > 0 ){
    resultado = "Positivo";
}else if(valor < 0){
    resultado = "Negativo";
}else{
    resultado = "zero";
}

console.log("O valor informado é " + resultado);