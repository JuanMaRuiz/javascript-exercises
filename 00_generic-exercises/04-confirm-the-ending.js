'use strict';

const checkEndOfTheWord = function(str, target) {
    let lastStr;

    if(str.indexOf(" ") !== -1) {
        const strToArr = str.split(" ");
        lastStr = strToArr[strToArr.length - 1];
        return lastStr  === target;
    } else {
        lastStr = str.length - 1;
        return str.charAt(lastStr)  === target;
    }
}

module.exports = {
    checkEndOfTheWord: checkEndOfTheWord
}
