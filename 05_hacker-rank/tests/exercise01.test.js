const { expect } = require('chai')

const maxNumberOfToys = require('../exercise01')

describe('Mark and Toys', () => {
    describe('Write a JavaScript program to test how many toys can buy for a given amount', () => {
        it('should return 4 toys', () => {
            const prices1 = ['1', '12', '5', '111', '200', '1000', '10']
            const prices2 = ['1000', '12', '5', '111', '200', '1', '10']
            const amount = 50
            expect(maxNumberOfToys.maximumToys(prices1, amount)).to.be.equal(4)
            expect(maxNumberOfToys.maximumToys(prices2, amount)).to.be.equal(4)
        })

        it('should return 2 toys', () => {
            const prices = ['1000', '102', '35', '111', '200', '1', '1230']
            const amount = 50
            expect(maxNumberOfToys.maximumToys(prices, amount)).to.be.equal(2)
        })
    })
})
