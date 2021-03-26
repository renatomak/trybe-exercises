const readLine = require("readline-sync");

const velocidadeMedia = () => {
  console.log("Informe a distância: ");
  const distancia = readLine.questionInt("Informe a distância Kilometros: ");
  const tempo = readLine.questionFloat("Informe o tempo da viagem em horas: ");
  const velocidade = distancia / tempo;
  console.log(velocidade, "Km/h");
};

module.exports = velocidadeMedia;