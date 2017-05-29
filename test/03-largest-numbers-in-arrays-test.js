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
});
