const assert = require('assert');

function addAllnumbers(arr){
    let plus = 0;
    arguments[0].forEach(element => {
        plus += element;
    });

    return plus;
}



const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);


assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);