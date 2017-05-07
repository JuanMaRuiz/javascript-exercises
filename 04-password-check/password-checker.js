// TODO use string.search();

'use strict';

module.exports.checkPassword = function(pass) {
  let result;
  // const lowerCase = /[a-z]+[A-Z]+[0-9]+[$#@]/;
  const lowerCase = /[a-z]+[0-9]$/;
  // const upperCase = /[A-Z]/;
  // const number = /[0-9]/;

  result = lowerCase.test(pass) && pass.length >= 6 && pass.length <= 16;

  // let newResult = result.filter(checkFalse);

  // function checkFalse(value) {
  //   console.log('value === false: ' + value === false + '\n');
  //   return value === false;
  // }
  // console.log("newResult: ", newResult.length);
  return result;
};

// 'use strict';

// module.exports.checkPassword = function(pass) {
//   const regExp = /[a-z]+[A-Z]+[0-9]+[$#@]/,
//         lowerCase = /[a-z]/,
//         camelcase = /[A-Z]/,
//         num = /[0-9]/,
//         character = /[$#@]/;
//   let result;

//   this.checkLowerCase = function(char) {
//    return lowerCase.test(char);
//   };
//   this.checkUpperCase = function(char) {
//     return camelCase.test(char)
//   };
//   this.isNumber = function(char) {
//     return num.test(char)
//   };

//   this.isCharacter = function(char) {
//     return character.test(char)
//   }
//   result = regExp.test(pass) && pass.length >= 6 && pass.length <= 16;

//   console.log('regExp.test(pass): ', regExp.test(pass));

//   console.log('result: ', result);
//   return result;
// };
