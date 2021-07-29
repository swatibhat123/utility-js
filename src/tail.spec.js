const tail = require('./tail')

describe('Tail function',()=>{

    it('Should return an empty array if the input array is empty',()=>{

        const input = [];
        const expectedOutput = [];
        expect(tail(input)).toEqual(expectedOutput);

    });

    it('Should return everything except first element',()=>{

        const numbers = [1,2,3,4];
        const expectedNumbers = [2,3,4];
        expect(tail(numbers)).toEqual(expectedNumbers);

    });


})