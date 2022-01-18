const counting = require('../scripts/sheeps');

describe('Testing', () => {
    
    test('Should give sheeps', () =>{
        expect(counting([true, false, true, false, true])).toBe(3);
    })
});