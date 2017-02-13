// Core dependencies
const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;

// Test dependencies
const timeOne = require('./../01-time/time');

describe('Basic JS tests', function() {
  describe('Write a JavaScript program to display the current time in the following format', function() {
    it('should return the current time with this format: 4 PM : 50 : 22', function() {
    var time = timeOne.getTime();
    expect(timeOne.checkFormattedTime(time)).to.equal(true);
    });
  });
});
