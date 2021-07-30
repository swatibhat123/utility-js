const min = require('../utility/min');

describe('Minimum element in an array',()=>{

    it('Should return undefined for empty array',()=>{
       
        const input = [];

        const minNumber = min(input);

        const expectedOutput = undefined;
        expect(expectedOutput).toEqual(minNumber);
        
    });

    it('Should return minimum element in the input array',()=>{
        const numbers = [1,2,3,4]

        const minNumber = min(numbers);

        const expectedMinValue = 1;
        expect(expectedMinValue).toEqual(minNumber);
    });

})