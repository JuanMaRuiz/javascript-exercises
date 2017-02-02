'use strict';

module.exports.getDate = function () {
  const weekDays = ['Monday', 'Tuesday', 'Wenesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        today = new Date();
  var day = today.getUTCDay();
  console.log(weekDays[day]);
  return 'Today is : ' + weekDays[day];
}

module.exports.checkFormattedTime = function (pattern) {
  console.log('pattern: ', pattern);
  return '4 PM : 50 : 22'.match(pattern);
}