/**5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3];.
Valor esperado no retorno da função: 2. 
[2, 2]*/

let valores = [2, 3, 2, 5, 8, 2, 3];

function maiorRepeticao(vetor) {
    let maiorRepeticao = 0;
    let objMaior = {};

    /**Monta um objeto com os valores do array inicial sendo a chave 
     * do objeto. Dentro do segundo for passo a contar quantas vezes cada 
     * chave se repete e sigo guardando esse resultado dentro do atributo 
     * da chave
     */
    for (const i in vetor) {
        objMaior[vetor[i]] = 0;

        for (const j in vetor) {
            if (vetor[i] === vetor[j]) {
                objMaior[vetor[i]] += 1;
            }
        }
    }

    maiorRepeticao = objMaior[2];
    for (const key in objMaior) {
        if (maiorRepeticao < objMaior[key]) {
            maiorRepeticao = objMaior[key];
        }
    }


    return maiorRepeticao;
}

console.log(maiorRepeticao(valores));