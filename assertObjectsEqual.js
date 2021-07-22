const tool = require('./eqObjects.js');
const inspect = require('util').inspect;
const flame = String.fromCodePoint(0x1F4A5);
const good = String.fromCodePoint(0x1F929);

const assertObjectsEqual = function(actual, expected) {

  if (tool.eqObjects(actual, expected)) {

    console.log(good, good, good, `Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(flame, flame, flame, `Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

if (require.main = module) {
  assertObjectsEqual({ a: '1', b: '2' } , { b: 2, a: '1' });
}