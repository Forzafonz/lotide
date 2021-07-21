const test = require('./assertEqual.js');

const countLetters = function(inputs) {
  let input = inputs.split(' ').join('');
  let result = {};
  for (let i = 0; i < input.length; i++) {
    element = input[i];
    if (result[element] === undefined) {
      result[element] = 1;
    } else {
      result[element] += 1;
    }
  }
  return result;
};

if (require.main === module) {
  console.log(countLetters("lighthouse in the house"));
}
