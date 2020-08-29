/**Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"; */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function somaVetor(valores){
    let soma = 0;

    for(valor of valores){
        soma += valor;
    }

    return soma;    
}


function media(valores) {
    let tamanho = Object.keys(valores);

    let media = somaVetor(valores) / tamanho.length;

    return media;
}

media(numbers) > 20 ?  console.log("valor maior que 20") : console.log("valor menor ou igual a 20")