'use strict';

/*
 * @return {String} - Formatted string with current day
 */
module.exports.getDate = function () {
  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wenesday', 'Thursday', 'Friday', 'Saturday'],
        today = new Date();
  var day = today.getDay();
  console.log('day: ', day);
  return 'Today is : ' + weekDays[day];
};

module.exports.checkFormattedTime = function (time) {
  const pattern = /[0-9]\s[a-zA-Z]{2}\s:\s[0-5][0-9]\s:\s[0-5][0-9]/;

  return pattern.test(time);
};

/*
 * Get the current time
 * @return {String} - Formatted string 4 PM : 50 : 22
 */
module.exports.getTime = function() {
    let time = [];
    const now = new Date(),
          hours = now.getUTCHours(),
          minutes = now.getUTCMinutes(),
          seconds = now.getUTCSeconds();

    if(hours > 12) {
        time.push(hours - 12 + ' PM');
    } else {
        time.push(hours + ' AM');
    }

    time.push(parseTime(minutes));
    time.push(parseTime(seconds));

    return formatTime.apply(this, time);
}

function parseTime(data) {
    if(data < 10) {
        return '0'.concat(data);
    }
    return data;
}

/*
 * @hours {String} - Formatted hour following this patter 01 AM || 04 PM
 * @minutes {String} - Formatted minutes prefixed with 0 (zero) if less than 9
 * @seconds {String} - Formatted seconds prefixed with 0 (zero) if less than 9
 */
function formatTime(hours, minutes, seconds) {
   let formattedTime = hours + ' : ' + minutes + ' : ' + seconds;
   return formattedTime;
}
