'use strict';

const firstCharacterIsUppercase = function(string) {
    const regExp = /^[A-Z]/;
    const firstCharacter = string.charAt(0);
    return regExp.test(firstCharacter) ? true : false;
}

module.exports = {
    firstCharacterIsUppercase: firstCharacterIsUppercase
}
