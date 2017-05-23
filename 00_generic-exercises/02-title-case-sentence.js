'use strict';

module.exports.convertToTitleCase = function(str) {
    let convertedString = [];
    str.split(" ").forEach(function(value) {
        let word = value,
            firstLetter = value.charAt(0);
        word = word.replace(firstLetter, firstLetter.toUpperCase());
        convertedString.push(word);
    });

    return convertedString.join(" ");
}
