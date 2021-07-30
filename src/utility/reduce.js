const reduce = (inputArray,callBackFn,initialValue)=> {

    const sizeOfEmptyArray = 0;
    if(inputArray.length === sizeOfEmptyArray && initialValue === undefined)
      return undefined;

    let accumulator = initialValue !== undefined ? initialValue : inputArray[0];
    let array = initialValue !== undefined ? [initialValue, ...inputArray] : inputArray;
    let initialIndex = 1;
    return applyReduce(array,callBackFn,accumulator,initialIndex);

}

function applyReduce(inputArray,callBackFn,accumulator,index){

    if(index >= inputArray.length )
       return accumulator;
    
    accumulator = callBackFn(accumulator,inputArray[index]);

    return applyReduce(inputArray,callBackFn,accumulator,++index)
}

module.exports = reduce;