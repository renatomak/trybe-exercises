const assert = require('assert');

function wordLengths(){
    let exitArray = [];

    for(let i = 0 ; i < arguments[0].length; i += 1){
        exitArray.push(arguments[0][i].length);
    }
    return exitArray;
}


const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

console.log(wordLengths(words));

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);