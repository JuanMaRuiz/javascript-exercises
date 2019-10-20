'use strict';

module.exports.palindrome = function (str) {
  const sanitizedStr = str.replace(/\s/g,'').replace(/[\W_]+/g, '').toLowerCase();
  const reversedStr = sanitizedStr.split('').reverse().join('');
  return sanitizedStr === reversedStr;
}
