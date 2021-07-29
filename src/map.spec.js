const map= require('./map');

describe('Map Function', () => {

    it('Should return an empty array if the map function is applied on an empty array', () => {
        const inputArray = [];
        const cube = number => number**3;
        const expectedOutput= [];
        expect(map(inputArray, cube)).toEqual(expectedOutput);
    });

    it('Should return an array containing a cube of the input array elements', () => {
        const numbers = [1,2,3];
        const cube = number => number**3;
        const expectedCubedNumbers= [1,8,27];
        expect(map(numbers, cube)).toEqual(expectedCubedNumbers);
    });

    it('Should return an array containing value if object array is passed as input ', () => {
        const items = [{x : 10},{x : 22}];
        const increementValue = someObject => someObject.x + 1;
        const expectedOutput= [11,23];
        expect(map(items, increementValue)).toEqual(expectedOutput);
    });

    it('Should return an array containing same value', () => {
        const number = [2,4,8];
        const identity = number => number;
        const expectedOutput= [2,4,8];
        expect(map(number, identity)).toEqual(expectedOutput);
    });
})