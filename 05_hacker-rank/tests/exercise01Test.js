'use strict';
// Core dependencies
const chai = require('chai');
const expect = chai.expect;

const maxNumberOfToys = require('./../exercise01');

describe('Mark and Toys', () => {
    describe("Write a JavaScript program to test how many toys can buy for a given amount", () => {
        it("should return 4 toys", () => {
            const prices = ["1", "12", "5", "111", "200", "1000", "10"];
            const numOfToys = 7;
            const amount = 50;
            expect(maxNumberOfToys.maxiumumToys(prices, amount)).to.be.equal(4);
        });
        it("should return 4 toys", () => {
            const prices = ["1000", "12", "5", "111", "200", "1", "10"];
            const numOfToys = 7;
            const amount = 50;
            expect(maxNumberOfToys.maxiumumToys(prices, amount)).to.be.equal(4);
        });

        it("should return 2 toys", () => {
            const prices = ["1000", "102", "35", "111", "200", "1", "1230"];
            const numOfToys = 7;
            const amount = 50;
            expect(maxNumberOfToys.maxiumumToys(prices, amount)).to.be.equal(2);
        });
    });
});
