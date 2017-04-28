'use strict';
// Core dependencies
const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;

const regExp = require('./../04-regExp/01-regExp');

describe('Validation with regular expression', function() {
    describe('Write a JavaScript program to test the first character of a string is uppercase or not', function() {

        it('should return the first character is in uppercase', function() {
            const strToTest = "Bazinga";
            expect(regExp.firstCharacterIsUppercase(strToTest)).to.equal("First character is in uppercase: true");
        });

        it('should return the first character is not in uppercase', function() {
            const strToTest = "bazinga";
            expect(regExp.firstCharacterIsUppercase(strToTest)).to.equal("First character is in uppercase: false");
        })
    });
    describe('Write a JavaScript program to check a credit card number ( format 9999-9999-9999-9999 )', function() {

        it('should return: "The credit card number is correct"', function() {
            const creditCard = '0001-1234-4675-0987';
            expect(regExp.checkCreditCardFormat(creditCard)).to.equal("The credit card number is correct");
        });

        it('should return: "The credit card number is NOT correct"', function() {
            const creditCard = '0001-1234-4675-098a'
            expect(regExp.checkCreditCardFormat(creditCard)).to.equal("The credit card number is NOT correct");
        })
    });
    describe('Write a pattern that matches e-mail addresses.', function() {

        it('should return: "The email card number is correct"', function() {
            const creditCard = 'ruizjuanma@gmail.com';
            expect(regExp.checkCreditCardFormat(creditCard)).to.equal("The email card number is correct");
        });

        it('should return: "The email card number is NOT correct"', function() {
            const creditCard = 'ruizj9'
            expect(regExp.checkCreditCardFormat(creditCard)).to.equal("The email card number is NOT correct");
        })
        it('should return: "The email card number is NOT correct"', function() {
            const creditCard = 'ruizj@gmiñ'
            expect(regExp.checkCreditCardFormat(creditCard)).to.equal("The email card number is NOT correct");
        })
    });
});
