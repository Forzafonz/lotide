const assertEqual = require("assertEqual.js");
const flame = String.fromCodePoint(0x1F4A5);
const good = String.fromCodePoint(0x1F929);

const tail = function(input) {
  if (Array.isArray(input) === false) {
    console.log("The input is not array");
  } else {
    if (input.length < 2) {
      return [];
    } else {
      return input.slice(1,input.length);
    }
  }
};

module.exports = tail;