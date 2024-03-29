const assert = require('assert')

const greetPeople = (people) => {
    let greeting = [];
  
    for (const person in people) {
      greeting.push(`Hello ${people[person]}`);
    }
    return greeting;
  };
  
  const parameter = ['Irina', 'Ashleigh', 'Elsa'];
  const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

  assert.deepStrictEqual(typeof greetPeople(parameter), 'object')
  greetPeople(parameter);
  assert.deepStrictEqual(parameter, ['Irina', 'Ashleigh', 'Elsa'])
  assert.deepStrictEqual(greetPeople(parameter), result);
