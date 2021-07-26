const test = require('./assertArraysEqual');

//Implementation of map function
const map = function(array, callback) {
  let result = [];
  for (let element of array) {
    result.push(callback(element));
  }
  return result;
};


//Some Test cases
if (require.main === module) {
  const words = ["ground", "control", "to", "major", "tom"];
  test.assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
  const words2 = [];
  test.assertArraysEqual(map(words2, word => word[0]), []);
}

module.exports = map;