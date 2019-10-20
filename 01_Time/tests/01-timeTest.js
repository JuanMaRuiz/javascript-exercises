// Core dependencies
const assert = require('assert');
const { expect } = require('chai');

// Test dependencies
const timeOne = require('../time');

describe('01 Time', function() {
  describe('Write a JavaScript program to display the current time in the following format', function() {
    it('should return the current time with this format: 4 PM : 50 : 22', function() {
    var time = timeOne.getTime();
    expect(timeOne.checkFormattedTime(time)).to.equal(true);
    });
  });
});
