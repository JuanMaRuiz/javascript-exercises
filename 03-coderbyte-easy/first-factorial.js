'use strict';

module.exports.getFactorial = function(num) {
    let arr = [],
        result;

    for(let i = 1; i <= num; i++) {
        arr.push(i);
    }

    result = arr.reduce(function(current, next) {
        return current * next;
    });
    return result;

};