const { expect } = require('chai');

const wrapping = require('../wrapping.js');

describe('Challenge #1: Automating Christmas gift wrapping!', () => {
    it('wrapping(gifts)', () => {
        const gifts = ['cat', 'game', 'socks'];
        expect(wrapping(gifts)).to.be.eql([
            '*****\n*cat*\n*****',
            '******\n*game*\n******',
            '*******\n*socks*\n*******',
        ]);
    });
    it('wrapping(["midu"])', () => {
        expect(wrapping(['midu'])).to.be.eql(['******\n*midu*\n******']);
    });
    it('wrapping(["a"])', () => {
        expect(wrapping(['a'])).to.be.eql(['***\n*a*\n***']);
    });
    it('wrapping an empty array should return an empty array', () => {
        expect(wrapping([])).to.be.empty;
    });
});
