'use strict';
const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const repeatStrings = require('./../00_generic-exercises/05-repeat-a-string');

describe('Repeat a string', function(){
    it('repeatStringNumTimes("*", 3) should return "***"', function(){
        const str = '*';
        const numberOfTimes = 3;
        expect(repeatStrings.repeatStringNumTimes(str, numberOfTimes)).to.equal("***");
    });
    it('repeatStringNumTimes("abc", 3) should return "abcabcabc"', function(){
        const str = 'abc';
        const numberOfTimes = 3;
        expect(repeatStrings.repeatStringNumTimes(str, numberOfTimes)).to.equal("abcabcabc");
    });
    it('repeatStringNumTimes("abc", 4) should return "abcabcabcabc"', function(){
        const str = 'abc';
        const numberOfTimes = 4;
        expect(repeatStrings.repeatStringNumTimes(str, numberOfTimes)).to.equal("abcabcabcabc");
    });
    it('repeatStringNumTimes("abc", 1) should return "abc"', function(){
        const str = 'abc';
        const numberOfTimes = 1;
        expect(repeatStrings.repeatStringNumTimes(str, numberOfTimes)).to.equal("abc");
    });
    it('repeatStringNumTimes("*", 8) should return "********"', function(){
        const str = '*';
        const numberOfTimes = 8;
        expect(repeatStrings.repeatStringNumTimes(str, numberOfTimes)).to.equal("********");
    });
    it('repeatStringNumTimes("abc", -2) should return ""', function(){
        const str = 'abc';
        const numberOfTimes = -2;
        expect(repeatStrings.repeatStringNumTimes(str, numberOfTimes)).to.equal("");
    });
});
