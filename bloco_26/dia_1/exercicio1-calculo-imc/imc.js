const readline = require('readline-sync');


function imc() {
  console.log("Fazendo o cálculo de Bháskara")
  const altura = readline.questionInt("Digite sua altura: ");
  const peso = readline.questionFloat("Digite sua peso: ");
  console.log(altura, peso)
  console.log("Seu IMC é: ", calculoIMC(altura, peso));
}

function calculoIMC(altura, peso) {
  altura = altura/100;
  return (peso/(altura*altura))
}

imc();