
const reduce = require('../utility/reduce')

describe('Reduce function',() => {

    it('Should return undefined if initial value is not defined and input array is empty',()=>{

        const numbers=[];
        const sum = (x,y)=> x+y;

        const sumOfNumbers = reduce(numbers,sum);

        const expectedSum = undefined;
        expect(sumOfNumbers).toEqual(expectedSum);

    });

    it('Should return initialValue if initial value and empty array is passed as parameter',()=>{

        const input=[];
        const sum = (x,y)=> x+y;
        const initialValue = 10;

        const sumOfNumbers = reduce(input,sum,initialValue);

        const expectedSum = 10;
        expect(sumOfNumbers).toEqual(expectedSum);

    });

    it('Should return sum if initial value is not defined and number array is passed as parameter',()=>{

        const numbers=[1,2,3];
        const sum = (x,y)=> x+y;

        const sumOfNumbers = reduce(numbers,sum);

        const expectedSum = 6;
        expect(sumOfNumbers).toEqual(expectedSum);

    });

    it('Should return abc if initial value is not defined and array containing letters(abc) is passes as parameter',()=>{

        const letters = ['a','b','c'];
        const concatenation = (x,y)=>x+y;

        const concatinatedletters = reduce(letters,concatenation);

        const expectedLetters = 'abc';
        expect(concatinatedletters).toEqual(expectedLetters);

    });

    it('Should return zabc if initial value is z and array containing letters(abc) is passes as parameter',()=>{
        
        const letters = ['a','b','c'];
        const concatenation = (x,y)=>x+y;
        const initialValue = 'z';

        const concatinatedletters = reduce(letters,concatenation,initialValue);
        
        const expectedLetters = 'zabc';
        expect(concatinatedletters).toEqual(expectedLetters);

    })

})