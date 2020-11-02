const uppercase = require('../src/ex1-uppercase');

test('Must return a capitalized string', done => {
    uppercase('Renato', (str) => {
        expect(str).toBe('RENATO');
        done();
    })
  });