let randomNum = function (){
    return Math.floor(Math.random() * 100)
}

describe('testing the function of random numbers', () =>{
    
    test('Test whether the function was called', () => {
        randomNum = jest.fn();       
        randomNum();
        expect(randomNum).toHaveBeenCalled();
    })
    test('what is your return', () => {
        randomNum = jest.fn().mockReturnValue(5);
        expect(randomNum()).toBe(5);
    })
    test('how many times the randomNum run was called', () => {
        expect(randomNum).toHaveBeenCalledTimes(1)
    })
})

/**
 * describe('', () =>{
    test('', () => {
        
    })
})
 */