const getUserName = require('../src/ex2-getUserName');

describe('Tests for the function getUserName with async/await', () => {
    test('Checks if the user is found', async () => {
        const id = await getUserName(4)
        expect(id).toBe('Mark');
    });

    test('checks if a non-existent user generates an error', async () => {
        try {
            await getUserName(1);
        } catch (error) {
            expect(error).toEqual({ error: 'User with 1 not found.' });
        }
    })
})

