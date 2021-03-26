const imc = require('./imc');
const bhaskara = require('./bhaskara');
const jogo = require('./sorteio');
const velocidadeMedia = require('./velocidade');
const readLine = require('readline-sync');

const executar = () => {
  const escolha = readLine.questionInt(`
  Faça sua escolha entre as funcionalidades disponiveis: 
  1 - IMC;
  2 - Bhaskara;
  3 - Jogo- Acrete o número aleatório;
  4 - Velociade Média.`)

  switch(escolha) {
    case 1:
      imc();
      break;
    case 2:
      bhaskara();
      break;
    case 3:
      jogo();
      break;
    case 4:
      velocidadeMedia();
      break;
    default:
      console.log("Escolha invalida")
  }
}

executar();