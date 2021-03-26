const readLine = require("readline-sync");
let laco = 1;

function gerarNumeroAleatorio() {
  const numRandon = Math.round(Math.random() * 10);

  return numRandon;
}

const jogoAcreteNumeroAleatorio = () => {
  while (laco) {
    const aleatorio = gerarNumeroAleatorio();

    const escolha = readLine.questionInt("Informe o número escolhido: ");
    console.log(
      "Numero aleatorio = ",
      aleatorio,
      "\nNúmero escolhido = ",
      escolha
    );
    if (escolha === aleatorio) {
      console.log("\n Parabéns, número correto!");
    } else {
      console.log("Opa, não foi dessa vez. O número era ", aleatorio);
    }

    laco = readLine.questionInt("Deseja continuar? Digit 1 - sim ou 0 - não: ");
  }
};

module.exports = jogoAcreteNumeroAleatorio;