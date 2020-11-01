let { squareNumber, halfNumber, percentOf, areaOfCircle } = require('./calculadora');

describe('', () =>{
    test('Elevar ao quadrado', () => {
        expect(squareNumber(3)).toBe(9);
    })
    test('Retorna a metade do numero passado', () => {
        halfNumber = jest.fn(() => 'funciona');

        expect(halfNumber()).toBe('funciona');
    })
})