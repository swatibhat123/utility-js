const filter= require('../utility/filter');

describe('Filter', () => {

    it('Should return an empty array if the filter is applied on an empty array', () => {
        
        const inputArray = [];
        const filterTruthyValue = x => true;

        const truthyValues = filter(inputArray, filterTruthyValue);

        const expectedFilteredArray = [];
        expect(truthyValues).toEqual(expectedFilteredArray);
    });

    it('Should return an empty array if the falsy filter is applied on an array containing truthy values', () => {

        const numbers = [1,2,3];
        const filterFalsyValue = number => false;

        const falsyValues = filter(numbers, filterFalsyValue);

        const expectedFilteredArray = [];
        expect(falsyValues).toEqual(expectedFilteredArray);

    });

    it('Should return a filtered array containing truthy values', () => {

        const numbers = [1,2,3];
        const filterTruthyValue = number => true;

        const truthyValues = filter(numbers, filterTruthyValue);

        const expectedFilteredArray = [1,2,3];
        expect(truthyValues).toEqual(expectedFilteredArray);

    });

    it('Should return a filtered array containing values greater than one', () => {

        const numbers = [0,-1,1,2,3];
        const filterElementGreaterThanOne = number => number>1;

        const elementsGreaterThanOne = filter(numbers, filterElementGreaterThanOne);

        const expectedFilteredArray = [2,3];
        expect(elementsGreaterThanOne).toEqual(expectedFilteredArray);

    });

    it('Should return a filtered array containing upper case letters', () => {

        const letters = ['a','B','c','D'];
        const filterUpperCase = letter => letter === letter.toUpperCase();

        const upperCaseLetters = filter(letters, filterUpperCase);

        const expectedFilteredArray = ['B','D'];
        expect(upperCaseLetters).toEqual(expectedFilteredArray);

    });

})
