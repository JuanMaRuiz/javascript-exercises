'use strict';

const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const largestNumInArr = require('./../00_generic-exercises/03-largest-numbers-in-arrays');

describe('Return Largest Numbers in Arrays', function() {
    it('largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array', function() {
        const givenArr = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
        assert.typeOf(largestNumInArr.largestOfFour(givenArr), 'array')
    });
    it('largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27,5,39,1001]', function() {
        const givenArr = [[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]];
        expect(largestNumInArr.largestOfFour(givenArr)).to.deep.equal([27,5,39,1001]); // Change deep for to.equal for checking type of return
    });
    it('largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [27,5,39,1001]', function() {
        const givenArr = [[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]];
        expect(largestNumInArr.largestOfFour(givenArr)).to.deep.equal([9, 35, 97, 1000000]); // Change deep for to.equal for checking type of return
    });
});
