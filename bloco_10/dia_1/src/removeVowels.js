const assert = require('assert')

const removeVowels = (word) => {
    const characters = word.split('');
    let cont = 1;

    for (let i = 0; i < characters.length; i += 1) {
      if (
        characters[i] === 'a' ||
        characters[i] === 'o' ||
        characters[i] === 'i' ||
        characters[i] === 'e' ||
        characters[i] === 'u'
      ) {
        characters[i] = cont;
        cont +=1;
      }

    }
    return characters.join('');
  };
  
  
  const parameter = 'Dayane';
  const result = 'D1y2n3';

assert.strictEqual(typeof removeVowels(parameter), 'string');
assert.strictEqual(removeVowels(parameter), result);