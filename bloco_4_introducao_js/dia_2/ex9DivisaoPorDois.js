/**9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2. */

let numbers = [];

for( let i = 1; i <= 25; i +=1 ){
    numbers.push(i);
}

function dividPorDois(valores){
    for(valor of valores){
        console.log(valor/2);
    }
}

dividPorDois(numbers);