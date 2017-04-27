'use strict';
// Core dependencies
const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;

const regExp = require('./../04-regExp/01-regExp');

describe('Validation with regular expression', function() {
    describe('Write a JavaScript program to test the first character of a string is uppercase or not', function() {
        it('should return if the first character of a given string is in uppercase or not', function() {
            const strToTest = "Bazinga";
            expect(regExp.firstCharacterIsUppercase(strToTest)).to.equal(true)
        })
    });
});
