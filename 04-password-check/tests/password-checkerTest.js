'use strict';
// Core dependencies
const assert = require('assert'),
      chai = require('chai'),
      expect = chai.expect;

// Test modules
const PassValidator = require('../password-checker');

describe('Password Checker', function(){
  describe('Write a program to check the validity of a password', function(){
    it('should contains at least 1 letter between [a-z] and 1 letter between [A-Z]', function(){
      let pass = 'zB8E#d';
      expect(PassValidator.checkCase(pass)).to.be.true;
    });
    it('should contains at least 1 number between [0-9]', function(){
      let pass = 'Bz8E#d';
      expect(PassValidator.checkNumber(pass)).to.be.true;
    });
    it('should be at least a length of 6 chareacter as minumum and 16 as maximun', function() {
        let pass = 'Bz8E#d';
        expect(PassValidator.checkLength(pass)).to.be.true;
    });
    it('should contains a $ sign', function(){
      let pass = 'Bz8E$#@d';
      expect(PassValidator.checkCharacter(pass)).to.be.true;
    });
    it('should contains a # sign', function(){
      let pass = 'Bz8E$#@d';
      expect(PassValidator.checkCharacter(pass)).to.be.true;
    });
    it('should contains a @ sign', function(){
      let pass = 'Bz8E$#@d';
      expect(PassValidator.checkCharacter(pass)).to.be.true;
    });
    it('should contains at least 1 number, 1 letter in lowercase, 1 letter in uppercase', function(){
      let pass = '8zBz8E$#@d';
      expect(PassValidator.checkPass(pass)).to.be.true;
    });
    it('should contains at least 1 number, 1 letter in lowercase, 1 letter in uppercase, any of this characters: $, @, # and length should be between 6 and 16', function(){
      let pass = '$zBz8E#8@d';
      expect(PassValidator.checkFullPass(pass)).to.be.true;
    });
  });
});
