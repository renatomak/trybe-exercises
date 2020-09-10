function squareNumber(number){
    const expoente = 2;
    return number * expoente;
}

function halfNumber(number){
    const divisor = 2;
    let resultado = (number / divisor).toFixed(2);
    
    resultado = `Metade de ${number} é ${resultado}`;

    return resultado;
}

function percentOf(number1, number2){
    let result = ((number1 / number2) * 100).toFixed(0);
    result = `${number1} é ${result}% de ${number2}`;

    return result;
}

console.log(percentOf(5, 10));