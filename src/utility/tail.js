const tail = (inputArray)=>{
    
    const sizeOfEmptyArray = 0;
    if(inputArray.length === sizeOfEmptyArray)
      return inputArray;
    
    const startIndex = 1;
    const tailArray = inputArray.slice(startIndex);

    return tailArray;

}

module.exports=tail;

