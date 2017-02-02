const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;

describe('Array', function() {
  describe('#indexOf()', function() {
   it('should be -1 when value is not present', function() {
    assert.equal(-1, [1,2,3].indexOf(4));
   });
  });
});
