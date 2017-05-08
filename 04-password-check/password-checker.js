// TODO use string.search();

'use strict';

module.exports.checkLowerCase = function(pass) {
  const regExpLowerCase = /[a-z]{1,}/;

  return checkRegExp(pass, regExpLowerCase);
};

module.exports.checkNumber = function(pass) {
  const regExpNumber = /[0-9]{1,}/;

  return checkRegExp(pass, regExpNumber);
};

module.exports.checkCharacter = function(pass) {
  const regExpHash = /[$#@]{1,}/;

  return checkRegExp(pass, regExpHash);
};

module.exports.checkPass = function(pass) {
    const passRegExp = /[0-9]{1,}[a-z]{1,}[A-Z]{1,}/;

    return checkRegExp(pass, passRegExp);
};

module.exports.checkFullPass = function(pass) {
    const passRegExp = /[0-9]{1,}[a-z]{1,}[A-Z]{1,}/;

    return checkRegExp(pass, passRegExp) && pass.length >= 6 && pass.length <= 16;
};

module.exports.checkLength = function(pass) {
  return pass.length >= 6 && pass.length <= 16;
};

function checkRegExp(text, regExp) {
    return regExp.test(text);
}
