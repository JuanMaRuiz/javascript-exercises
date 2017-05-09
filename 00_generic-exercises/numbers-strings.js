'use strict';

module.exports.palindrome = function (str) {
  const sanitizedStr = str.replace(/\s/g,'').replace(/[\W_]+/g, '').toLowerCase();
  const reversedStr = sanitizedStr.split('').reverse().join('');
  console.log('sanitizedStr: ', sanitizedStr);
  console.log('reversedStr: ', reversedStr);
  return sanitizedStr === reversedStr;
}
