const { expect } = require('chai');
const smallerMissingPositive = require('../smaller-missing-positive.js');

describe(`Smaller missing positive`, () => {
    it('should return an error if no array is passed', () => {
        expect(() => smallerMissingPositive()).to.throw();
    });
    it.skip('should return a positive integer', () => {
        expect(smallerMissingPositive([0])).to.be.greaterThan(0);
    });
    it('should return 1 if the array is empty', () => {
        expect(smallerMissingPositive([])).to.be.equal(1);
    });
    it('should return 2', () => {
        const result = smallerMissingPositive([8, -9, 1000, 3, 10]);
        expect(result).to.be.eql(7);
    });
});
