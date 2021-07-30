const map= require('../utility/map');

describe('Map Function', () => {

    it('Should return an empty array if the map function is applied on an empty array', () => {
        
        const inputArray = [];
        const cube = number => number**3;

        const cubeNumbers = map(inputArray, cube);

        const expectedOutput= [];
        expect(cubeNumbers).toEqual(expectedOutput);
    });

    it('Should return an array containing a cube of the input array elements', () => {

        const numbers = [1,2,3];
        const cube = number => number**3;

        const cubeNumbers = map(numbers, cube);

        const expectedCubedNumbers= [1,8,27];
        expect(cubeNumbers).toEqual(expectedCubedNumbers);
    });

    it('Should return an array containing incremented value if object array is passed as input ', () => {

        const items = [{x : 10},{x : 22}];
        const incrementValue = someObject => someObject.x + 1;
        
        const value = map(items, incrementValue);

        const expectedIncrementedValue= [11,23];
        expect(value).toEqual(expectedIncrementedValue);
    });

    it('Should return an array containing same value', () => {

        const number = [2,4,8];
        const identity = number => number;

        const identityValues = map(number, identity);

        const expectedIdentityValues= [2,4,8];
        expect(identityValues).toEqual(expectedIdentityValues);
    });
})