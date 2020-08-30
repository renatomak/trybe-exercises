
/**Retirei a ideia para o algoritmo do site https://forum.scriptbrasil.com.br/topic/161741-como-fazer-pir%C3%A2mide-de-asterisco/ */

let base = 5;
let altura = Math.ceil(base/2);
let espacos = altura-1;
let asteriscos = 1;/**define quantos asteriscos irá aparecer por linha */


for(let i = 0; i < altura; i++){
   
    let linha = "";

    for(let j = espacos; j >= 1; j-=1){
        linha +="   ";
    }

    for(let j = asteriscos; j >= 1; j-=1){
        linha +=" * ";
    }

    asteriscos+=2;

    espacos--;

    console.log(linha);
}