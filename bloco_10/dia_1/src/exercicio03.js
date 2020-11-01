const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}


const array = [1, 2, 3, 4]
const expected = myRemoveWithoutCopy(array, 5);
/* 
assert.deepStrictEqual(expected, [1, 2, 4])
assert.notDeepStrictEqual(expected, [1, 2, 3, 4]); 

 console.log(myRemoveWithoutCopy(array, 3));
console.log(array)
assert.deepStrictEqual(array, [1, 2, 3, 4]) */

assert.deepStrictEqual(expected, array)