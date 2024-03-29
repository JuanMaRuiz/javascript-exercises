

module.exports.checkFormattedTime = function (time) {
    const pattern = /[0-9]\s[a-zA-Z]{2}\s:\s[0-5][0-9]\s:\s[0-5][0-9]/

    return pattern.test(time)
}

/*
 * Get the current time
 * @return {String} - Formatted string 4 PM : 50 : 22
 */
module.exports.getTime = function () {
    let time = []
    const now = new Date(),
        minutes = now.getUTCMinutes(),
        seconds = now.getUTCSeconds()
    let hours = now.getUTCHours()

    hours = hours > 12 ? hours - 12 + ' PM' : hours + ' AM'

    time.push(hours)
    time.push(parseTime(minutes))
    time.push(parseTime(seconds))

    return formatTime.apply(this, time)
}

function parseTime(data) {
    return data < 10 ? '0'.concat(data) : data
}

/*
 * @hours {String} - Formatted hour following this patter 01 AM || 04 PM
 * @minutes {String} - Formatted minutes prefixed with 0 (zero) if less than 9
 * @seconds {String} - Formatted seconds prefixed with 0 (zero) if less than 9
 */
function formatTime(hours, minutes, seconds) {
    let formattedTime = hours + ' : ' + minutes + ' : ' + seconds
    return formattedTime
}
