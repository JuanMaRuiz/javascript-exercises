'use strict';

module.exports.getFactorial = function(number) {
    let numArr = [];
    for(let i = 1; i <= number; i++) {
        numArr.push(i);
    }

    let result = numArr.reduce(function(prev, current) {
        return prev * current;
    });

    return result;
}
