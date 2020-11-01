const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
const array = [1, 2, 3, 4]
const expected =  myRemove(array, 3);

assert.deepStrictEqual(expected, [1, 2, 4]);

assert.notDeepStrictEqual(expected, array)

myRemove(array);

assert.deepStrictEqual(array, array);
assert.deepStrictEqual(myRemove(array, 5), array);