//let romanos = [I, II, III, IV, V, VI, VII, VII, IX, X, XII];
const I = 1;
const V = 5;
const X = 10;

let romanos = ["XXXIX", "XXVIII"];
function contaIguais(romano, uni){
    let heSequencia = true;
    let repeticao = 0;

    for(const key in ramano){

        if(romano[key] === uni && heSequencia){
            repeticao++;
        }else{
            
        }
    }

}


function gerarRomanos(romano) {
    numeral = []

    for (let i = 0; i < romano.length; i++) {

        switch (romano[i]) {
            case "I":
                numeral[i] = 1;

                break
            case "V":
                numeral[i] = 5;
                break
            case "X":
                numeral[i] = 10;
                break
            case "L":
                numeral[i] = 50;
                break
            case "C":
                numeral[i] = 100;
                break
            case "D":
                numeral[i] = 500;
                break
            case "M":
                numeral[i] = 500;
                break
        }
    }

    return numeral;
}

console.log(gerarRomanos("IVXLCDM"));