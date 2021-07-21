// import assertArraysEqual  method from assertArraysEqual.js
const tools = require("./assertArraysEqual.js");

// Look for a middle element of array
const findMiddle = function(array) {
  if (!Array.isArray(array) || array.length < 3) {
    return [];
  } else if (!isEven(array.length)) {
    return [array[Math.floor(array.length / 2)]];
  } else {
    return array.slice(array.length / 2 - 1, array.length / 2 + 1);
  }
};

//Check if even
const isEven = function(number) {
  return number % 2 === 0;
};

//Test cases
if (require.main === module) {
  tools.assertArraysEqual(findMiddle([1]), []); // => []
  tools.assertArraysEqual(findMiddle([1, 2]), []); // => []
  tools.assertArraysEqual(findMiddle([1, 2, 3]), [2]); // => [2]
  tools.assertArraysEqual(findMiddle([1, 2, 3, 4, 5]),[3]); // => [3]
  tools.assertArraysEqual(findMiddle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
  tools.assertArraysEqual(findMiddle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
}
//Export

module.exports = {
  findMiddle
};