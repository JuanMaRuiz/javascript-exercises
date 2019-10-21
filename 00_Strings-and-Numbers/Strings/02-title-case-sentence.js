'use strict';

module.exports.convertToTitleCase = function(str) {
    let convertedString = [];
    let stringToArr = str.split(" ");

    stringToArr.forEach(function(value) {
        let word = value,
            firstLetter = value.charAt(0),
            restOfWord = value.substr(1, (value.length - 1));

        word = word.replace(firstLetter, firstLetter.toUpperCase());
        word = word.replace(restOfWord, restOfWord.toLowerCase());

        convertedString.push(word);
    });

    return convertedString.join(" ");
}
