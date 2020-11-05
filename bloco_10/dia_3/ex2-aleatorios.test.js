let randomNum = function (){
    return Math.floor(Math.random() * 100)
}

describe('testing the function of random numbers', () =>{
    const newRandomNum = function (num1, num2) {
        return num1 / num2;
    }
    test('Test whether the function was called', () => {
        randomNum = jest.fn(newRandomNum);
        expect(randomNum(4, 2)).toBe(2);     
        expect(randomNum).toHaveBeenCalled();
    })
})

/**
 * describe('', () =>{
    test('', () => {
        
    })
})
 */