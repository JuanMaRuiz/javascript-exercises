

/*
 * @desc - Formula f = (c*(9/5)) + 32 where c = temperature in Celsius and f = temperature in Fahrenheit
 * @return {String} - convert temperature
 */

module.exports.celsiusToFahrenheit = function (celsius) {
    let temperature = celsius * (9 / 5) + 32

    return temperature + ' °F'
}
