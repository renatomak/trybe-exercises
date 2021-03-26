const readLine = require('readline-sync');

console.log("Informe a distância: ")
const distancia = readLine.questionInt("Informe a distância Kilometros: ");
const tempo = readLine.questionInt("Informe o tempo da viagem em horas: ");
const velocidade = distancia / tempo;
console.log(velocidade, "Km/h")