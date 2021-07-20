// Implementation of assert function.
const flame = String.fromCodePoint(0x1F4A5);
const good = String.fromCodePoint(0x1F929);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(good, good, good, `Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(flame, flame, flame, `Assertion Failed: ${actual} !== ${expected}`);
  }
};

function eqArrays(array1, array2){
  if (array1.length === array2.length){
    for (var i =0; i < array1.length; i++){
      if (array1[i] !== array2[i]){
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
}
