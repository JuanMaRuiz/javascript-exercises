'use strict';
// Core dependencies
const assert = require('assert'),
      chai = require('chai'),
      expect = chai.expect;

// Test modules
const PassValidator = require('./../04-password-check/password-checker');

describe('Password Checker', function(){
  describe('Write a program to check the validity of a password', function(){
    it('should contains at least 1 letter between [a-z]', function(){
      let pass = 'Bz8E#d';
      expect(PassValidator.checkLowerCase(pass)).to.be.true;
    });
    it('should contains at least 1 number between [0-9]', function(){
      let pass = 'Bz8E#d';
      expect(PassValidator.checkNumber(pass)).to.be.true;
    });
    it('should be at least a length of 6 chareacter as minumum and 16 as maximun', function() {
        let pass = 'Bz8E#d';
        expect(PassValidator.checkLength(pass)).to.be.true;
    })
    // it('should contains at least 1 character from [$#@]', function(){
    //   let pass = 'Bz8E$#@d';
    //   expect(PassValidator.checkPassword(pass)).to.be.true;
    // });
  });
});
