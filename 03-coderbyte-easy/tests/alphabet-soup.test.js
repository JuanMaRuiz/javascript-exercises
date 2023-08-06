const { expect } = require('chai')

// Test modules
const { orderString } = require('../alphabet-soup')
describe('Alphabet soup', function () {
    describe('Write a function which takes the str string parameter being passed and return the string with the letters in alphabetical order', () => {
        let strings = [
            {
                original: 'coderbyte',
                expected: 'bcdeeorty',
            },
            {
                original: 'hooplah',
                expected: 'ahhloop',
            },
        ]
        it('should return the string with the letters in alphabetical order', () => {
            strings.map((str) => {
                expect(orderString(str.original)).to.be.equal(str.expected)
            })
        })
    })
})
