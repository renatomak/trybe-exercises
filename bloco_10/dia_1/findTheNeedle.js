const assert = require('assert');

function findTheNeedle(arr, string){
    let pos = -1;

    arr.forEach((element, key) => {
        if(element === string){
            pos = key;
        }
    });


    return pos;
}


let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);