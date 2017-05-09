'use strict';
// Core dependencies
const assert = require('assert'),
      chai = require('chai'),
      expect = chai.expect;

// Test modules
const Alphabet = require('./../03-coderbyte-easy/alphabet-soup');
describe('Alphabet soup', function() {
  describe('Write a function which  take the str string parameter being passed and return the string with the letters in alphabetical order', function() {
    let strings = [
      {
        original: "coderbyte",
        expected: "bcdeeorty"
      },
      {
        original: "hooplah",
        expected: "ahhloop"
      }
    ]
    strings.forEach(function(str) {
      it('should return "' + str.expected + '" when test passed is "' + str.original + '"', function() {
        expect(Alphabet.orderString(str.original)).to.be.equal(str.expected);
      });
    });
  });
});