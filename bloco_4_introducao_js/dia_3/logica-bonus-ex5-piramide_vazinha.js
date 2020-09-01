let base = 15;
let altura = Math.ceil(base / 2) - 1;

for (let i = 0; i < altura+1; i+=1) {
    let linha = "";

    for (let j = 0; j < base; j+=1) {

        if ((altura - i) === j || (altura + i) === j || i === altura) {
            linha += "*";
        } else {
            linha += " ";
        }
    }
    
    console.log(linha);
}