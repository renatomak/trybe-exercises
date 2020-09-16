function squareNumber(number){
    const expoente = 2;
    return number * expoente;
}

function halfNumber(number){
    const divisor = 2;
    let resultado = (number / divisor).toFixed(2);
    
    console.log(`Metade de ${number} é ${resultado}`);

    return resultado;
}

function percentOf(number1, number2){
    let result = ((number1 / number2) * 100).toFixed(0);

    console.log(`${number1} é ${result}% de ${number2}`);

    return result;
}

function areaOfCircle(raio){
    const pi = 3.14159;
    const area = (raio*raio*pi).toFixed(2);

    console.log(`A área de um círculo com raio ${raio} é ${area}`);
    
    return area;
}

function execucao(number){
    let result = '';

    let metade = halfNumber(number);
    let quadrado = squareNumber(metade);
    let area = areaOfCircle(quadrado);
    result = percentOf(quadrado, area);
    
    return result;
}

console.log(execucao(6));