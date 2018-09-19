const assert = require('assert');
const lib = require('../js1/07_abstracted/lib');

describe('js1_07 - Index into string', () => {
  const source = 'glad this bus has wifi';

  context('doesTheStringInclude', () => {
    it('should return true if the target in the middle of a string', (done) => {
      assert.equal(lib.doesTheStringInclude(source, 'bus'), true);
      done();
    });

    it('should return true if the target in the beginning of a string', (done) => {
      assert.equal(lib.doesTheStringInclude(source, 'glad'), true);
      done();
    });

    it('should return false if the target does not exist in a string', (done) => {
      assert.equal(lib.doesTheStringInclude(source, 'dog'), false);
      done();
    });
  });

  context('findingStr', () => {
    it('should return true if the target in the middle of a string', (done) => {
      assert.equal(lib.findingStr(source, 'bus'), true);
      done();
    });

    it('should return true if the target in the beginning of a string', (done) => {
      assert.equal(lib.findingStr(source, 'glad'), true);
      done();
    });

    it('should return false if the target does not exist in a string', (done) => {
      assert.equal(lib.findingStr(source, 'dog'), false);
      done();
    });
  });
});
