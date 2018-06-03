'use strict';
const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const wordMatcher = require('../06-string-finder/finder.js');


describe('Find longest word in dictionary that is a subsequence of a given string', () => {
    it('wordMatcher should return a string', () => {
        assert.typeOf(wordMatcher(), 'String', 'we have a string');
    });
    it('receives an string and array of words and it return a string', () => {
        const str = "abppplee";
        const words = ["able", "ale", "apple", "bale", "kangaroo"];
        assert.typeOf(wordMatcher(str, words), 'string', 'we have a string');
    });

    it('receives an string and array of words and it return a word from the array of words', () => {
        const str = "abppplee";
        const words = ["able", "ale", "apple", "bale", "kangaroo"];
        expect(wordMatcher(str, words)).to.equal('apple');
    });
});
