const head = (inputArray)=>{
  
    const sizeOfEmptyArray = 0;
    if(inputArray.length === sizeOfEmptyArray)
      return null;
    
    return inputArray[0];

}

module.exports = head;
