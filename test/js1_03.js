const assert = require('assert');
const lib = require('../js1/03_abstracted/lib');

// Describe a "suite" with the given `title` and callback `fn` containing nested suites and/or tests.
describe('js1_3 - Perform math operations on numbers', () => {
  // An alias for describe; functionally equivalent.
  context('adding', () => {
    // Describe a specification or test-case with the given `title` and callback `fn` acting as a thunk.
    // Thunk: a subroutine used to inject an additional calculation into another subroutine
    it('should add two numbers', (done) => {
      assert.equal(lib.adding(1,2), 3);
      done();
    });
  });
});
