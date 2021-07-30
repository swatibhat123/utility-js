const max = require('../utility/max');

describe('Maximum element in an array',()=>{

    it('Should return undefined for empty array',()=>{
       
        const input = [];

        const maxNumber = max(input);

        const expectedOutput = undefined;
        expect(expectedOutput).toEqual(maxNumber);
        
    });

    it('Should return maximum element in the input array',()=>{
        const numbers = [1,2,3,4]

        const maxNumber = max(numbers);

        const expectedMaxValue = 4;
        expect(expectedMaxValue).toEqual(maxNumber);
    });

})