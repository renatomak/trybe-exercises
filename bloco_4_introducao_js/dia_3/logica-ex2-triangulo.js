/**2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo: */

const valor = 5;

let contador = valor;


while(contador){
    let linhaSaida = "";

    for(let index = 0; index < valor - (contador - 1); index += 1){
        linhaSaida += "*";
    }

    console.log(linhaSaida);
    contador-=1;
}

/**for(let i = 0; i < valor; i+=1){
    let linha = "";
    for(let j = 0; j < valor; j+=1){
        if( i > j || i === j){
            linha += "*";
        }else{
            linha += " ";
        }
    }
    console.log(linha);
} */