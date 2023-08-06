const { expect } = require('chai')

const titleCaseChecker = require('../02-title-case-sentence')

describe('Title Case a Sentence', function () {
    describe('Return the provided string with the first letter of each word capitalized', function () {
        it('titleCase("I\'m a little tea pot") should return a string', function () {
            const phrase = "I'm a little tea pot"
            expect(typeof titleCaseChecker.convertToTitleCase(phrase)).to.be.a(
                'string'
            )
        })
        it('titleCase("I\'m a little tea pot") should return I\'m A Little Tea Pot', function () {
            const phrase = "I'm a little tea pot"
            expect(titleCaseChecker.convertToTitleCase(phrase)).to.be.equals(
                "I'm A Little Tea Pot"
            )
        })
        it('titleCase("sHoRt AnD sToUt") should return Short And Stout', function () {
            const phrase = 'sHoRt AnD sToUt'
            expect(titleCaseChecker.convertToTitleCase(phrase)).to.be.equals(
                'Short And Stout'
            )
        })
        it('titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return Here Is My Handle Here Is My Spout', function () {
            const phrase = 'HERE IS MY HANDLE HERE IS MY SPOUT'
            expect(titleCaseChecker.convertToTitleCase(phrase)).to.be.equals(
                'Here Is My Handle Here Is My Spout'
            )
        })
    })
})
