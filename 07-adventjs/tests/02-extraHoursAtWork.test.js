const { expect } = require('chai');
const countHours = require('./../02-extraHoursAtWork.js');

describe('Challenge #2: Nobody wants to do extra hours at work', () => {
    it("countHours(1985, ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25'])", () => {
        expect(
            countHours(1985, [
                '01/01',
                '01/06',
                '02/02',
                '02/17',
                '02/28',
                '06/03',
                '12/06',
                '12/25',
            ]),
        ).to.be.eql(10);
    });
    it('countHours(2000, [01/01"])', () => {
        expect(countHours(2000, ['01/01'])).to.be.eql(0);
    });
    it("countHours(2023, ['01/06', '04/01', '12/25'])", () => {
        expect(countHours(2023, ['01/06', '04/01', '12/25'])).to.be.eql(4);
    });
});
