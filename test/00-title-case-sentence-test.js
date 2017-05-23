'use strict';

const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const titleCaseChecker = require('./../00_generic-exercises/02-title-case-sentence');

describe("Title Case a Sentence", function() {
    describe("Return the provided string with the first letter of each word capitalized", function() {
        it("titleCase(\"I'm a little tea pot\") should return a string", function() {
            const phrase = "I'm a little tea pot";
            expect(typeof titleCaseChecker.convertToTitleCase(phrase)).to.be.a('string');
        });
        it("titleCase(\"I'm a little tea pot\") should return I'm A Little Tea Pot", function() {
            const phrase = "I'm a little tea pot";
            expect(titleCaseChecker.convertToTitleCase(phrase)).to.be.equals("I'm A Little Tea Pot");
        })
    })
});
