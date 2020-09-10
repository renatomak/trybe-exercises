let basePiramide = 15;
let altura = Math.ceil(basePiramide / 2) - 1;

for (let index = 0; index < altura+1; index+=1) {
    let linha = "";

    for (let posicao = 0; posicao < basePiramide; posicao+=1) {

        if ((altura - index) === posicao || (altura + index) === posicao || index === altura) {
            linha += "*";
        } else {
            linha += " ";
        }
    }
    
    console.log(linha);
}