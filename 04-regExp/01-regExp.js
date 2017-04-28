'use strict';

function logMessage(message, result) {
    let res = result === undefined ?  "" : result;
    return message + res;
}

module.exports.firstCharacterIsUppercase = function(string) {
    const regExp = /^[A-Z]/,
          firstCharacter = string.charAt(0),
          message = "First character is in uppercase: ",
          isUppercase = regExp.test(firstCharacter) ? true : false;

    return logMessage(message, isUppercase);
};

module.exports.checkCreditCardFormat = function (num) {
    const creditCardFormat = /^([0-9]{4}\-){3}[0-9]{4}/,
          message = creditCardFormat.test(num) ? "The credit card number is correct" : "The credit card number is NOT correct";

    return logMessage(message);

}
