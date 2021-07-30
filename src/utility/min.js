
const reduce = require('../utility/reduce');

const min = (inputArray) => {

    const minFn = (minValue,currentValue) => Math.min(minValue,currentValue);

    return reduce(inputArray,minFn);
}

module.exports = min;