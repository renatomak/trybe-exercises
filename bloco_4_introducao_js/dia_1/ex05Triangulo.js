/*Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.

Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. Caso os ângulos estejam inválidos, o programa deve retornar uma mensagem de erro.
*/

const ladoA = 45;
const ladoB = 45;
const ladoC = 90;

const somaAngulos = ladoA + ladoB + ladoC;

let ehTriangulo = false;

if(somaAngulos === 180){
    ehTriangulo = true;
}

console.log( "Resultado: " + ehTriangulo)
