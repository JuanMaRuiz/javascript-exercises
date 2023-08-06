const { expect } = require('chai')

const { firstReverse } = require('../string-reverse')

describe('First reverse', function () {
    describe('Write a function firstReverse(str) take the str parameter being passed and return the string in reversed order', function () {
        let strings = [
            {
                original: 'Hello World and Coders',
                expected: 'sredoC dna dlroW olleH',
            },
            {
                original: 'I Love Code',
                expected: 'edoC evoL I',
            },
        ]

        it('should return the string reversed', () => {
            strings.map((str) => {
                expect(firstReverse(str.original)).to.be.equal(str.expected)
            })
        })
    })
})
