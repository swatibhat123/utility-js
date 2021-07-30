
const map = (inputArray,callbackFn) => {

    const mappedArray = [];
    let index =0;
    return getMappedElements(inputArray,callbackFn,index,mappedArray);

}


function getMappedElements(inputArray,callbackFn,index,mappedArray){

    if(index >= inputArray.length )
       return mappedArray;
    
    const mappedValue = callbackFn(inputArray[index]);  
    mappedArray.push(mappedValue);
    
    return getMappedElements(inputArray,callbackFn,++index,mappedArray)

}

module.exports = map;


