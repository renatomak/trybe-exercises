let randomNum = function (){
    return Math.floor(Math.random() * 100)
}

describe('testing the function of random numbers', () =>{
    const newRandomNum = function (a, b, c) {
        return a * b * c;
    }
    randomNum = jest.fn().mockImplementation(newRandomNum); 

    test('Test whether the function was called', () => {             
        randomNum(1, 2, 3);
        expect(randomNum).toHaveBeenCalled();
    })
    test('what is your return', () => {
        expect(randomNum(1,2,3)).toBe(6);
    })
    test('how many times the randomNum run was called', () => {
        expect(randomNum).toHaveBeenCalledTimes(2)
    })

    test('Test whether the function was called, second implementation', () => {         
        randomNum.mockReset();

        randomNum = jest.fn().mockImplementation((a) => a + a );    
        expect(randomNum(3)).toBe(6);
        expect(randomNum).toHaveBeenCalled();        
        expect(randomNum).toHaveBeenCalledTimes(1)
    })
})

/**
 * describe('', () =>{
    test('', () => {
        
    })
})
 */