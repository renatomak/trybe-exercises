/**Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
Valor esperado no retorno da função: Fernanda. */

function maiorNome(nomes){
    let maior = "";

    for(const i in nomes){
        
        if(Object(nomes[(i-1)]).length < nomes[i].length){
            maior = nomes[i];
        }
    }

    return maior;
}

let teste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log(maiorNome(teste));
