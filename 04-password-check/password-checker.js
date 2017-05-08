// TODO use string.search();

'use strict';

module.exports.checkLowerCase = function(pass) {
  let result;
  const containsLowerCase = /[a-z]{1,}/;

  result = containsLowerCase.test(pass);
  return result;
};

module.exports.checkNumber = function(pass) {
  let result;
  const containsNumber = /[0-9]{1,}/;

  result = containsNumber.test(pass);
  return result;
};

module.exports.checkLength = function(pass) {
  return pass.length >= 6 && pass.length <= 16;
};
