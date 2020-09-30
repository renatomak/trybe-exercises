const assert = require('assert');

const greaterThanTen = (array) => {
  let results = [];

  for(const index in array){
    
    if(array[index] > 10){
      results.push(array[index]);
    }
  }

  return results;
};

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];

 assert.deepStrictEqual(greaterThanTen(parameter), result); 