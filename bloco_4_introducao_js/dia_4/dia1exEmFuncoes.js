function soma(elemento1, elemento2) {
    return elemento1 + elemento2;
}

function divisao(elemento1, elemento2) {
    return elemento1 / elemento2;
}

function modulo(num) {
    return num % 2;
}

function multiplicacao(elemento1, elemento2) {
    return elemento1 * elemento2
}

function subtracao(elemento1, elemento2) {
    return elemento1 - elemento2;
}

function maiorDeDoisValores(elemento1, elemento2) {
    let maior = elemento1 > elemento2 ? elemento1 : elemento2;
    return maior;
}

function maiorDeTres(a, b, c) {
    let maior = 0;

    if (a > b && a > c) {
        maior = a;
    } else if (b > a && b > c) {
        maior = b;
    } else {
        maior = c;
    }

    return maior;
}

function verificaStatus(valor) {

    let resultado = "";

    if (valor == 0) {
        resultado = "zero";
    } else {
        resultado = valor > 0 ? "Positivo" : "Negativo";
    }

    return resultado;
}

function somaAngulos(ladoA, ladoB, ladoC) {
    let ehTriangulo = false;

    if (somaAngulos === 180) {
        ehTriangulo = true;
    }
    return ehTriangulo;
}