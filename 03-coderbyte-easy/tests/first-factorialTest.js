const { expect } = require('chai');

const getResult = require('../first-factorial');

describe('Frist Factorial', function () {
    describe('Write a  function FirstFactorial(num) take the num parameter being passed and return the factorial of it', function () {
        let numbers = [
            {
                original: 4,
                expected: 24
            },
            {
                original: 8,
                expected: 40320
            }
        ];
        numbers.forEach(function (num) {
            it('it should return: ' + num.expected + ' when the function receive: ' + num.original, function () {
                expect(getResult.getFactorial(num.original)).to.be.equal(num.expected);
            });
        });
    });
});
