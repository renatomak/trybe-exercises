const valor = 5;

for(let i = 0; i < valor; i+=1){
    let linha = "";
    for(let j = 0 ; j < valor; j+=1){
        if((i + j) < (valor-1)){
            linha += "   ";
        }else{
            linha += " * ";
        }
    }
    console.log(linha);
}

