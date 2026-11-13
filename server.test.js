const test = require('node:test');
const assert = require('node:assert');

test('Basic arithmetic test to verify CI test runner', () => {
  assert.strictEqual(1 + 1, 2);
});