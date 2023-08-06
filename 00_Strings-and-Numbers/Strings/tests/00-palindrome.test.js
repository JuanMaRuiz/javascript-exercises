const { expect, assert } = require('chai')

const stringsExercises = require('../00-palindrome')

describe('Check for Palindromes', function () {
    describe('Return true if the given string is a palindrome. Otherwise, return false.', function () {
        it('palindrome("eye") should return a boolean', function () {
            const str = 'eye'
            assert.typeOf(stringsExercises.palindrome(str), 'boolean')
        })
        it('palindrome("eye") should return true', function () {
            const str = 'eye'
            expect(stringsExercises.palindrome(str)).to.be.true
        })
        it('palindrome("_eye") should return true', function () {
            const str = '_eye'
            expect(stringsExercises.palindrome(str)).to.be.true
        })
        it('palindrome("race car") should return true.', function () {
            const str = 'race car'
            expect(stringsExercises.palindrome(str)).to.be.true
        })
        it('palindrome("not a palindrome") should return false.', function () {
            const str = 'not a palindrome'
            expect(stringsExercises.palindrome(str)).to.be.false
        })
        it('palindrome("A man, a plan, a canal. Panama") should return true.', function () {
            const str = 'A man, a plan, a canal. Panama'
            expect(stringsExercises.palindrome(str)).to.be.true
        })
        it('palindrome("never odd or even") should return true.', function () {
            const str = 'never odd or even'
            expect(stringsExercises.palindrome(str)).to.be.true
        })
        it('palindrome("nope") should return false.', function () {
            const str = 'nope'
            expect(stringsExercises.palindrome(str)).to.be.false
        })
        it('palindrome("almostomla") should return false.', function () {
            const str = 'almostomla'
            expect(stringsExercises.palindrome(str)).to.be.false
        })
        it('palindrome("My age is 0, 0 si ega ym.") should return true.', function () {
            const str = 'My age is 0, 0 si ega ym.'
            expect(stringsExercises.palindrome(str)).to.be.true
        })
        it('palindrome("1 eye for of 1 eye.") should return false.', function () {
            const str = '1 eye for of 1 eye.'
            expect(stringsExercises.palindrome(str)).to.be.false
        })
        it('palindrome("0_0 (: /- :) 0-0") should return true.', function () {
            const str = '0_0 (: /- :) 0-0'
            expect(stringsExercises.palindrome(str)).to.be.true
        })
        it('palindrome("five|_/|four") should return false.', function () {
            const str = 'five|_/|four'
            expect(stringsExercises.palindrome(str)).to.be.false
        })
    })
})
