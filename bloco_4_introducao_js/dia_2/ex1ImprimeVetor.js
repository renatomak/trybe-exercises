let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/*1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();*/

function imprimirLaco(valores){
    let impressao = "";
    for(valor of valores){
        impressao += valor + ", ";
    }
    console.log("Exercício 1: Impressão --> " + impressao);
}

imprimirLaco(numbers);