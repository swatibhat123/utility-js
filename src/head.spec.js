const head = require('./head');

describe('Head of array',()=>{

    it('Should return null or undefined if input array is empty',()=>{

        const inputArray = [];
        const expectedValue = null;
        expect(head(inputArray)).toEqual(expectedValue);

    });

    it('Should return first element of array if the empty array is not empty',()=>{

        const numbers = [1,2,3];
        const expectedNumber = 1;
        expect(head(numbers)).toEqual(expectedNumber);

    })

})