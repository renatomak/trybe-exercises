const tamanhoBase = 5;

for(let i = 0; i < tamanhoBase; i+=1){
    let linha = "";
    for(let j = 0 ; j < tamanhoBase; j+=1){
        if((i + j) < (tamanhoBase-1)){
            linha += "   ";
        }else{
            linha += " * ";
        }
    }
    console.log(linha);
}

