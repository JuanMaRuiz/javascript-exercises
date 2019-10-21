'use strict';
// Core dependencies
const { expect } = require('chai');

const Temperature = require('../temperature');

// More examples http://www.rapidtables.com/convert/temperature/how-celsius-to-fahrenheit.htm

describe('Write a JavaScript program to convert temperatures to and from celsius, fahrenheit', function() {
    var temperatures = [
        {
            celsius: 60,
            expected: 140
        },
        {
            celsius: -50,
            expected: -58
        },
        {
            celsius: 400,
            expected: 752
        }
      ];

    temperatures.forEach(function(temperature) {
        it('should return ' + temperature.celsius + '°C is ' + temperature.expected + ' °F', function() {
            let temp = Temperature.celsiusToFahrenheit(temperature.celsius);
            expect(temp).to.be.equal(temperature.expected + ' °F');
        });
    });
})
