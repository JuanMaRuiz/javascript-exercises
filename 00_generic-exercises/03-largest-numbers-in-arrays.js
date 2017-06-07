'use strict';

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

const largestOfFour = function(givenArr) {
let newArr = [];

    for(let i = 0; i < givenArr.length; i++) {
        const maxValInArray = getMaxOfArray(givenArr[i]);
        newArr.push(maxValInArray);
    }
    return newArr;
};

module.exports = {
    largestOfFour: largestOfFour
}
