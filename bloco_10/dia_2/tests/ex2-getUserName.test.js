const getUserName = require('../src/ex2-getUserName');

describe('Tests for the function getUserName', () => {
    test('Checks if the user is found', () => {
        expect.assertions(1);
        return getUserName(4).then(id => {
          expect(id).toBe('Mark');
        });
    });

    test('checks if a non-existent user generates an error', () => {
        return getUserName(1).catch(error => expect(error).toEqual({ error: 'User with 1 not found.' }))
    })
})

