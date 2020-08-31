/**6- Faça um programa que diz se um número definido numa variável é primo ou não.
Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar. */

let contaDivisor = 0;
const numero = 5;
let primo = false;

for(let i = 0; i <= numero; i++){
    if(i%2 === 0){
        contaDivisor+=1;
    }
}

if(contaDivisor == 2 || numero === 1){
    primo = true;
}

if(primo){
    console.log(`O número ${numero} é primo!`);
}else{
    console.log(`O número ${numero} NÃO é primo!`);
}

