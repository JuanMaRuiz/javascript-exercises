'use strict';

const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const confirmEnding = require('./../00_generic-exercises/04-confirm-the-ending');

describe('Confirm the Ending', function() {
    it('confirmEnding("Bastian", "n") should return true', function() {
        const str = 'Bastian',
              target = 'n';
        expect(confirmEnding.checkEndOfTheWord(str, target)).to.be.true;
    });
    it('confirmEnding("Connor", "n") should return false', function() {
        const str = 'Connor',
              target = 'n';
        expect(confirmEnding.checkEndOfTheWord(str, target)).to.be.false;
    });
    it('confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false', function() {
        const str = 'Walking on water and developing software from a specification are easy if both are frozen',
              target = 'specification';
        expect(confirmEnding.checkEndOfTheWord(str, target)).to.be.false;
    });
    it('confirmEnding("He has to give me a new name", "name") should return true', function() {
        const str = 'He has to give me a new name',
              target = 'name';
        expect(confirmEnding.checkEndOfTheWord(str, target)).to.be.true;
    });
    it('confirmEnding("Open sesame", "same") should return true', function() {
        const str = 'Open sesame',
              target = 'same';
        expect(confirmEnding.checkEndOfTheWord(str, target)).to.be.true;
    });
    it('confirmEnding("Open sesame", "pen") should return false', function() {
        const str = 'Open sesame',
              target = 'pen';
        expect(confirmEnding.checkEndOfTheWord(str, target)).to.be.false;
    });
    it('confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false', function() {
        const str = 'If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing',
              target = 'mountain';
        expect(confirmEnding.checkEndOfTheWord(str, target)).to.be.false;
    });
});
