const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;

const timeOne = require('./../tests-modules/time-exercise-1');

describe('Basic JS tests', function() {
  describe('#Write a JavaScript program to display the current day and time in the following format.', function() {
   it('should return => Today is : Friday,', function() {
    expect(timeOne.getDate()).to.be.equal('Today is : Friday');
   });

   it('should return the current time with this format: 4 PM : 50 : 22', function() {
    const pattern = '4 PM : 50 : 22'; // convert to regExp
    expect(timeOne.checkFormattedTime(pattern)).to.equal(true);
   })
  });
});
