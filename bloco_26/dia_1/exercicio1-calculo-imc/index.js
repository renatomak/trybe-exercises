/* const ImcCalc = require('fasam-imc-calc');
const imc = new ImcCalc(85, 1.7);
console.log(imc.calc()) */

const readline = require('readline-sync');

function calcularBhaskara() {
  console.log("Fazendo o cálculo de Bháskara")
  const a = readline.questionInt("Digite o valor de A: ");
  const b = readline.questionInt("Digite o valor de B: ");
  const c = readline.questionInt("Digite o valor de C: ");
  console.log("Coeficientes: A: ", a, " B: ", b, "C: ", c); 
  const delta = calcularDelta(a, b, c)

  if( delta < 0 ){
    console.log("Delta menor que 0 (zero)");
    return;
  }
  
  console.log("Delta: ", delta)
}

function calcularDelta(a, b, c) {
  return (b*b) -(4*a*c)
}



calcularBhaskara()