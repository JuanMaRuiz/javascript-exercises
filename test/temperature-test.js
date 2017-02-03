// Core dependencies
const assert = require('assert'),
      chai = require('chai'),
      expect = chai.expect;

// Test dependencies
const Temperature = require('./../02-temperature/temperature');

// More examples http://www.rapidtables.com/convert/temperature/how-celsius-to-fahrenheit.htm

describe('Write a JavaScript program to convert temperatures to and from celsius, fahrenheit', function() {
    it('should return 60°C is 140 °F', function() {
        let temp = Temperature.celsiusToFahrenheit(60);
        expect(temp).to.be.equal('140 °F');
    });
    it('should return -50°C is -58 °F', function() {
        let temp = Temperature.celsiusToFahrenheit(-50);
        expect(temp).to.be.equal('-58 °F');
    });
    it('should return 60°C is 140 °F', function() {
        let temp = Temperature.celsiusToFahrenheit(60);
        expect(temp).to.be.equal('140 °F');
    });
})
