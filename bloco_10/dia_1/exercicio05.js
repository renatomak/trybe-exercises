const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

assert.deepStrictEqual(obj1, obj2, 'teste 1 e 2');
//assert.deepStrictEqual(obj1, obj3, 'teste 1 e 3');
assert.deepStrictEqual(obj3, obj2, 'teste 3 e 2');