'use strict';
// Core dependencies
const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;

const maxNumberOfToys = require('./../05_hacker-rank/01_exercise');

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
    });
});
