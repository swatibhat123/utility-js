
const reduce = require('../utility/reduce')

describe('Reduce function',() => {

    it('Should return undefined if initial value is not defined and input array is empty',()=>{

        const input=[];
        const sum = (x,y)=> x+y;
        const expectedOutput = undefined;
        expect(reduce(input,sum)).toEqual(expectedOutput);

    });

    it('Should return initialValue if initial value and empty array is passed as parameter',()=>{

        const input=[];
        const sum = (x,y)=> x+y;
        const initialValue = 10;
        const expectedOutput = 10;
        expect(reduce(input,sum,initialValue)).toEqual(expectedOutput);

    });

    it('Should return sum if initial value is not defined and number array is passed as parameter',()=>{

        const number=[1,2,3];
        const sum = (x,y)=> x+y;
        const expectedSum = 6;
        expect(reduce(number,sum)).toEqual(expectedSum);

    });

    it('Should return abc if initial value is not defined and array containing letters(abc) is passes as parameter',()=>{
        const letters = ['a','b','c'];
        const concatenation = (x,y)=>x+y;
        const expectedLetters = 'abc';
        expect(reduce(letters,concatenation)).toEqual(expectedLetters);

    });

    it('Should return zabc if initial value is z and array containing letters(abc) is passes as parameter',()=>{
        const letters = ['a','b','c'];
        const concatenation = (x,y)=>x+y;
        const initialValue = 'z';
        const expectedLetters = 'zabc';
        expect(reduce(letters,concatenation,initialValue)).toEqual(expectedLetters);

    })

})