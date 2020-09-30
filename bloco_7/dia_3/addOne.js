const assert = require('assert');

function addOne(array){
    let newArray = [];

    array.forEach((element) => {
        newArray.push(element + 1);
    });

    return newArray;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function', 'ERRO1');
assert.deepEqual(output, expected, 'ERRO2');
assert.deepStrictEqual(myArray, unchanged, 'ERRO3');