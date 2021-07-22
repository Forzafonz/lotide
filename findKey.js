const test = require('./assertEqual.js');

const findKey = function(object, callback) {
  let keys = getKeys(object);
  for (let i = 0; i < keys.length; i++) {
    let element = keys[i];
    if (callback(object[element])) {
      return element;
    }
  }
};


//Get object keys
const getKeys = function(object) {
  return Object.keys(object);
};

if (require.main === module) {
  let result = findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2); // => "noma"
  test.assertEqual(result, "noma");
  let result1 = findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 4); // => "noma"
  test.assertEqual(result1, undefined);
  let result2 = findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 3); // => "noma"
  test.assertEqual(result2, "Akaleri");
}

module.exports = {
  findKey
};