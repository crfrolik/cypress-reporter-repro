'use strict';

const Mocha = require('mocha');
const {
  EVENT_TEST_FAIL,
  EVENT_TEST_PASS
} = Mocha.Runner.constants;

class Reporter {
  constructor(runner) {
    runner
      .on(EVENT_TEST_PASS, test => {
        console.log('test passed: ' + test.id);
      })
      .on(EVENT_TEST_FAIL, (test, err) => {
        console.log('test failed: ' + test.id);
      })
  }
}

module.exports = Reporter;
