function squareNumber(number){
    return number * number;
}

function halfNumber(number){
    const divisor = 2;
    let resultado = (number / divisor).toFixed(2);
    
    console.log(`Metade de ${number} é ${resultado}`);

    return resultado;
}

function percentOf(number1, number2){
    let result = ((number1 / number2) * 100).toFixed(0);
    return `${number1} é ${result}% de ${number2}`;
}

function areaOfCircle(raio){
    const pi = 3.14159;
    const area = (raio*raio*pi).toFixed(2);
  
    return  `A área de um círculo com raio ${raio} é ${area}`;
}


function updateDivSolution(reslt){
    document.getElementById('solution').innerText = reslt;
}

function calcSquare() {
    const inputSquare = document.getElementById('square-input').value;
    updateDivSolution(squareNumber(inputSquare));
}

function calcHalfNumber(){
    const inputHalf = document.getElementById('half-input').value;
    updateDivSolution(halfNumber(inputHalf))
}

function calcPercent(){
    const inputPercent1 = document.getElementById('percent1-input').value;
    const inputPercent2 = document.getElementById('percent2-input').value;
    updateDivSolution(percentOf(inputPercent1, inputPercent2));
}

function calcAreaCircle(){
    const inputArea = document.getElementById('area-input').value;
    updateDivSolution(areaOfCircle(inputArea));
}

module.exports = { squareNumber, halfNumber, percentOf, areaOfCircle }

window.onload = function () {
    document.getElementById('square-button').addEventListener('click', calcSquare);
    document.getElementById('square-input').addEventListener('change', calcSquare);
    document.getElementById('half-button').addEventListener('click', calcHalfNumber);
    document.getElementById('half-input').addEventListener('change', calcHalfNumber);
    document.getElementById('percent-button').addEventListener('click', calcPercent);
    document.getElementById('percent2-input').addEventListener('change', calcPercent);
    document.getElementById('area-button').addEventListener('click', calcAreaCircle);
    document.getElementById('area-input').addEventListener('change', calcAreaCircle);

}