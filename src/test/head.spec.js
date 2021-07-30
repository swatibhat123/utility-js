const head = require('../utility/head');

describe('Head of array',()=>{

    it('Should return null or undefined if input array is empty',()=>{

        const inputArray = [];

        const headElement = head(inputArray);

        const expectedValue = null;
        expect(headElement).toEqual(expectedValue);

    });

    it('Should return first element of array if the empty array is not empty',()=>{

        const numbers = [1,2,3];

        const headElement = head(numbers);

        const expectedNumber = 1;
        expect(headElement).toEqual(expectedNumber);

    })

})