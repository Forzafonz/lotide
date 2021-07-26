const eqArrays = require('eqArrays');
const flame = String.fromCodePoint(0x1F4A5);
const good = String.fromCodePoint(0x1F929);

function assertArraysEqual(array1, array2) {
  if (eqArrays(array1,array2)) {
    console.log(good, good, good, `Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(flame, flame, flame, `Assertion Failed [${array1}] !== [${array2}]`);
  }
}

module.exports = assertArraysEqual;


if (require.main === module) {
  assertArraysEqual([1,2], [2,3]);
}