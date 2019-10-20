'use strict';
// Core dependencies
const chai = require('chai');
const expect = chai.expect;

const Triplets = require('../compare-the-triplets');

describe('Compare the Triplets', () => {
    describe('For Alice rating: 5, 6, 7 and Bob rating: 3, 6, 10', () => {
        it('should return 1 1', () => {
            const aliceRating = [5, 6, 7];
            const bobRating = [3, 6, 10];
            expect(Triplets.checkTriplets(aliceRating, bobRating)).to.equal('1 1');
        });
        it('should return 2 1', () => {
            const aliceRating = [5, 6, 7];
            const bobRating = [3, 1, 10];
            expect(Triplets.checkTriplets(aliceRating, bobRating)).to.equal('2 1');
        });
        it('should return 0 3', () => {
            const aliceRating = [1, 0, 5];
            const bobRating = [3, 1, 10];
            expect(Triplets.checkTriplets(aliceRating, bobRating)).to.equal('0 3');
        });
        it('should return 3 0', () => {
            const aliceRating = [3, 1, 10];
            const bobRating = [1, 0, 5];
            expect(Triplets.checkTriplets(aliceRating, bobRating)).to.equal('3 0');
        });
    });
});
