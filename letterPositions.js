// Import testing module
const test = require('./assertArraysEqual.js');

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    element = sentence[i];
    if (element === " ") {
      continue;
    }
    if (results[element] === undefined) {
      results[element] = [i];
    } else {
      results[element].push(i);
    }
  }
  return results;
};

if (require.main = module) {

  console.log(letterPositions("lighthouse in the house"));
  test.assertArraysEqual(letterPositions("hello").e, [1]);
  test.assertArraysEqual(letterPositions("hello").h, [0]);
  test.assertArraysEqual(letterPositions("hello").l, [2,3]);
  test.assertArraysEqual(letterPositions("hello").o, [4]);
}