const { expect } = require('chai');

const { getFactorial } = require('../first-factorial');

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
        it('it should return: the factorial of the number passed as parameter', () => {
            numbers.map( num => {
                expect(getFactorial(num.original)).to.be.equal(num.expected);
            });
        });
    });
});
