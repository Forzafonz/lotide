const assertEqual = require('./assertEqual')
const flame = String.fromCodePoint(0x1F4A5);
const good = String.fromCodePoint(0x1F929);

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

module.exports = head;