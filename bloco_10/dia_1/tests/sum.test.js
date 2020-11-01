const sum = require('./sum');

describe('1 - The sum(a, b) function returns the sum of parameter a with b', () => {
    it('Test if the sum retun (4, 5) is 9', () => {
        expect(sum(4, 5)).toBe(9);
    })
})


/**describe('', () => {
    it('', () => {
        
    })
}) */