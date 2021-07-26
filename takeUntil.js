const assertArraysEqual = require('./assertArraysEqual.js');


//This function returns a "slice of the array with elements taken from the beginning."
//The function will be going until the callback/predicate returns a truthy value
const takeUntil = function(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {

    let evaluatesToTrue = callback(array[i]);
    if (evaluatesToTrue) {
      break;
    } else {
      result.push(array[i]);
    }
  }
  return result;
};


//Test Cases
if (require.main === module) {

  const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  const results1 = takeUntil(data1, x => x < 0);
  assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
  
  console.log('---');
  
  const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
  const results2 = takeUntil(data2, x => x === ',');
  assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
}
  
// Export takeUntil function
module.exports = takeUntil;
