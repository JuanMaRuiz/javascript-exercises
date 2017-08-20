'use strict';
// Core dependencies
const chai = require('chai');
const expect = chai.expect;

const Triplets = require('../05_hacker-rank/02-compare-the-triplets');

describe('Compare the Triplets', () => {
    describe('For Alice rating: 5, 6, 7 and Bob rating: 3, 6, 10', () => {
        it('should return 1 1', () => {
            const aliceRating = [5, 6, 7];
            const bobRating = [3, 6, 10];
            expect(Triplets.checkTriplets(aliceRating, bobRating)).to.be.true;
        });
    });
});
