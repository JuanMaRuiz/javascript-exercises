const { expect, assert } = require('chai');

const checkWords = require('../01-findLongestWord');

describe('Find the longest word', function() {
    describe('Return the length of the longest word in the provided sentence.', function() {
        it('"The quick brown fox jumped over the lazy dog" should return a number', function() {
            const str = "The quick brown fox jumped over the lazy dog";
            assert.typeOf(checkWords.findLongestWord(str), 'number');
        });
        it('"The quick brown fox jumped over the lazy dog" should return 6.', function() {
            const str = "The quick brown fox jumped over the lazy dog";
            expect(checkWords.findLongestWord(str)).to.equal(6);
        });
        it('"May the force be with you" should return 5', function() {
            const str = "May the force be with you";
            expect(checkWords.findLongestWord(str)).to.equal(5);
        });
        it('"Google do a barrel roll" should return 6', function() {
            const str = "Google do a barrel roll";
            expect(checkWords.findLongestWord(str)).to.equal(6);
        });
        it('"What is the average airspeed velocity of an unladen swallow" should return 8.', function() {
            const str = "What is the average airspeed velocity of an unladen swallow";
            expect(checkWords.findLongestWord(str)).to.equal(8);
        });
        it('"What if we try a super-long word such as otorhinolaryngology" should return 19.', function() {
            const str = "What if we try a super-long word such as otorhinolaryngology";
            expect(checkWords.findLongestWord(str)).to.equal(19);
        });
    });
});
