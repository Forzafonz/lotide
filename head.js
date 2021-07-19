const flame = String.fromCodePoint(0x1F4A5);
const good = String.fromCodePoint(0x1F929);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(good, good, good, `Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(flame, flame, flame, `Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(input) {
  if (Array.isArray(input) === false) {
    console.log("The input is not array");
  } else {
    if (input.length === 0) {
      return;
    } else {
      return input[0];
    }
  }
};
