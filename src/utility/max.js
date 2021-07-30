
const reduce = require('../utility/reduce');

const max = (inputArray) => {

    const maxFn = (maxValue,currentValue) => Math.max(maxValue,currentValue);

    return reduce(inputArray,maxFn);
}

module.exports = max;