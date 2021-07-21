const test = require('./assertEqual.js');

// Find key by value
const findKeyByValue = function(object, value) {
  let keys = getKeys(object);
  for (let key of keys) {
    if (object[key] === value) {
      return key;
    }
  }
};

// Get the list of all keys for an object
const getKeys = function(object) {
  return Object.keys(object);
};


if (require.main === module) {
  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  
  test.assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  test.assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
}
  