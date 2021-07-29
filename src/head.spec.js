const head = require('./head');

describe('Head of array',()=>{

    it('Should return null or undefined if input array is empty',()=>{

        const inputArray = [];
        const expectedFilteredArray = undefined;
        expect(head(inputArray)).toEqual(expectedFilteredArray);

    })

})