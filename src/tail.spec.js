const tail = require('./tail')

describe('Tail function',()=>{

    it('Should return an empty array if the input array is empty',()=>{

        const inputArray = [];
        const expectedArray = [];
        expect(tail(inputArray)).toEqual(expectedArray);

    });


})