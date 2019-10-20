'use strict';

module.exports.repeatStringNumTimes = function(str, num) {
    const numberOfTimes = (num >= 0) ? num : 0
    return str.repeat(numberOfTimes);
}
