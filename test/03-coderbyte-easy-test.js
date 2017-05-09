'use strict';
// Core dependencies
const assert = require('assert'),
      chai = require('chai'),
      expect = chai.expect;

// Test modules
const StringsFn = require('./../03-coderbyte-easy/string-reverse');
const getResult = require('./../03-coderbyte-easy/first-factorial');

describe('First reverse', function(){
    describe('Write a function firstReverse(str) take the str parameter being passed and return the string in reversed order', function() {
        let strings = [
            {
                original: 'Hello World and Coders',
                expected: 'sredoC dna dlroW olleH'
            },
            {
                original: 'I Love Code',
                expected: 'edoC evoL I'
            }
        ];

        strings.forEach(function(str) {
            it('should return "' + str.expected + '" when function reverse "' + str.original + '"', function() {
                expect(StringsFn.firstReverse(str.original)).to.be.equal(str.expected);
            });
        });
    });
});

describe('Frist Factorial', function(){
    describe('Write a  function FirstFactorial(num) take the num parameter being passed and return the factorial of it', function() {
        let numbers = [
            {
                original: 4,
                expected: 24
            },
            {
                original: 8,
                expected: 40320
            }
        ];
      numbers.forEach(function(num) {
        it('it should return: ' + num.expected + ' when the function receive: ' + num.original , function() {
          expect(getResult.getFactorial(num.original)).to.be.equal(num.expected);
        });
      });
    });
});
