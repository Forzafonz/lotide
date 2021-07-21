
const flame = String.fromCodePoint(0x1F4A5);
const good = String.fromCodePoint(0x1F929);

function eqArrays(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
}

function assertArraysEqual(array1, array2) {
  if (eqArrays(array1,array2)) {
    console.log(good, good, good, `Assertion Passed`);
  } else {
    console.log(flame, flame, flame, `Assertion Failed`);
  }
}

module.exports = {
  assertArraysEqual
};

if (require.main === module) {
  assertArraysEqual([1,2], [2,3]);
}