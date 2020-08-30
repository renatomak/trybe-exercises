/**1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. */

const valor = 5;
let contador = valor;

while (contador) {
    let linha = "";
    for (let i = 0; i < valor; i += 1) {
        linha += " * ";
    }
    console.log(linha);
    contador -= 1;
}