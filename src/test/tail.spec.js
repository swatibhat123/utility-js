const tail = require('../utility/tail')

describe('Tail function',()=>{

    it('Should return an empty array if the input array is empty',()=>{

        const input = [];

        const tailArray = tail(input);

        const expectedOutput = [];
        expect(tailArray).toEqual(expectedOutput);

    });

    it('Should return everything except first element',()=>{

        const numbers = [1,2,3,4];
        
        const tailArray = tail(numbers);

        const expectedNumbers = [2,3,4];
        expect(tailArray).toEqual(expectedNumbers);

    });


})