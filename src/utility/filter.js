
const filter = (inputArray,callbackFn) => {

    const filteredArray = [];
    let index =0;
    return applyFilter(inputArray,callbackFn,index,filteredArray);

}


function applyFilter(inputArray,callbackFn,index,filteredArray){

    if(index >= inputArray.length )
       return filteredArray;
    
    const result = callbackFn(inputArray[index]);  

    if(result)
        filteredArray.push(inputArray[index]);
    
    return applyFilter(inputArray,callbackFn,++index,filteredArray)

}

module.exports = filter;


