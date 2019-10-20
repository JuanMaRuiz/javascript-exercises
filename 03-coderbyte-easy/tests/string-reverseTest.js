const { expect } = require('chai');

// Test modules
const StringsFn = require('../string-reverse');

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
