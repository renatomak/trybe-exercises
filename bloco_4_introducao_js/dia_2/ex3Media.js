/*3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function somaVetor(valores){
    let soma = 0;

    for(valor of valores){
        soma += valor;
    }

    return soma;    
}

function media(valores){
    let tamanho = Object.keys(valores);


    let media = somaVetor(valores)/tamanho.length;

    console.log("Exercício 3: Média = " + media);
    
}
media(numbers)


