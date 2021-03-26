const readline = require('readline-sync');


function imc() {
  console.log("CALCÚLO DO IMC\n")
  const altura = readline.questionInt("Digite sua altura: ");
  const peso = readline.questionFloat("Digite sua peso: ");
  const value = calculoIMC(altura, peso);
  console.log("Seu IMC é: ", value);


  if(value >= 18.5 && value <= 24.9) {
    console.log("Abaixo do peso (magresa)")
  } else if(value <= 29.9) {
    console.log("Peso normal")
  } else if (value <= 34.9) {
    console.log("Obesidade grau I")
  }else if (value <= 39.9) {
    console.log("Obesidade grau II")
  } else if (value >= 40 ) {
    console.log("Obesidade graus III e IV ")
  } else {
    console.log("Valor não avaliado")
  }
}

function calculoIMC(altura, peso) {
  altura = altura/100;
  return (peso/(altura*altura))
}

module.exports = imc;