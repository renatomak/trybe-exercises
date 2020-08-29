/** 6 Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"; */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function procurarImpar(valores){
    let Qtdimpar = 0;
    for(valor of valores){
        if(valor % 2 !== 0){
            Qtdimpar++;
        }
    }

    return Qtdimpar;
}

let qtdImpar = procurarImpar(numbers);

qtdImpar ? console.log(qtdImpar) : console.log("nenhum valor ímpar encontrado") ;