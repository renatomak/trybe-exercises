/**Utilizando for, descubra qual o maior valor contido no array e imprima-o; */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function maiorValor(valores){
    let maior = 0;
    for(valor of valores){
        if(valor > maior){
            maior = valor;
        }
    }

    return maior;
}

console.log("Exercício 05: Maior valor é " + maiorValor(numbers));