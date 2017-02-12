// Core dependencies
const assert = require('assert'),
      chai = require('chai'),
      expect = chai.expect;

// Test modules
const StringsFn = require('./../03-coderbyte-easy/string-reverse');
const Firstfactorial = require('./../03-coderbyte-easy/first-factorial');

describe('First reverse', function(){
    describe('Write a function firstReverse(str) take the str parameter being passed and return the string in reversed order', function() {
        it('should return "sredoC dna dlroW olleH" when function revice "Hello World and Coders"', function() {
            const str = 'Hello World and Coders';
            StringsFn.firstReverse(str);
            expect(StringsFn.firstReverse(str)).to.be.equal("sredoC dna dlroW olleH");
        });
        it('should return "edoC evoL I" when function revice "I Love Code"', function() {
            const str = 'I Love Code';
            StringsFn.firstReverse(str);
            expect(StringsFn.firstReverse(str)).to.be.equal("edoC evoL I");
        });
    });
});

describe('Frist Factorial', function(){
    describe('Write a  function FirstFactorial(num) take the num parameter being passed and return the factorial of it', function() {
        it("should return 24 (4 * 3 * 2 * 1) if num = 4", function() {
            let num = 4;
            expect(Firstfactorial.getFactorial(num)).to.be.equal(24);
        });
    });
});
