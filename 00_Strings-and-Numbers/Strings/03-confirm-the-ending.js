'use strict';

const checkEndOfTheWord = function(str, target) {
    const targetLength = target.length;
    const endOfString = str.substring(str.length - targetLength);

    return endOfString === target;
};

module.exports = {
    checkEndOfTheWord: checkEndOfTheWord
}
