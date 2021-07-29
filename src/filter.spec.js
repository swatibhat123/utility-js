const filter= require('./filter');

describe('Filter', () => {

    it('Should return an empty array if the filter is applied on an empty array', () => {
        const inputArray = [];
        const filterTruthyValue = x => true;
        const expectedFilteredArray = [];
        expect(filter(inputArray, filterTruthyValue)).toEqual(expectedFilteredArray);
    });

    it('Should return an empty array if the falsy filter is applied on an array containing truthy values', () => {

        const numbers = [1,2,3];
        const filterFalsyValue = number => false;
        const expectedFilteredArray = [];
        expect(filter(numbers, filterFalsyValue)).toEqual(expectedFilteredArray);

    });

    it('Should return a filtered array containing truthy values', () => {

        const numbers = [1,2,3];
        const filterTruthyValue = number => true;
        const expectedFilteredArray = [1,2,3];
        expect(filter(numbers, filterTruthyValue)).toEqual(expectedFilteredArray);

    });

    it('Should return a filtered array containing values greater than one', () => {

        const numbers = [0,-1,1,2,3];
        const filterElementGreaterThanOne = number => number>1;
        const expectedFilteredArray = [2,3];
        expect(filter(numbers, filterElementGreaterThanOne)).toEqual(expectedFilteredArray);

    });

    it('Should return a filtered array containing upper case letters', () => {

        const letters = ['a','B','c','D'];
        const filterUpperCase = letter => letter === letter.toUpperCase();
        const expectedFilteredArray = ['B','D'];
        expect(filter(letters, filterUpperCase)).toEqual(expectedFilteredArray);

    });

})
