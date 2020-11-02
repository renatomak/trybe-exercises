const sum = require('../src/sum');
console.log(sum(4, 5))
describe('1 - The sum(a, b) function returns the sum of parameter a with b', () => {
    it('Test if the sum retun (4, 5) is 9', () => {
        expect(sum(4, 5)).toBe(9);
    })

    it('Teste se o retorno de sum(0, 0) é 0', () => {
        expect(sum(0, 0)).toBe(0);
    })

    it('Teste se a função sum lança um erro quando os parametros são 4 e "5"(string 5)', () => {
        expect( () => { sum(4, '5') }).toThrow();
    })

    it('Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
        function stringParameter(){
            sum(4, '5');
        }
        expect(stringParameter).toThrowErrorMatchingSnapshot();
    })
})



/**describe('', () => {
    it('', () => {
        
    })
}) */