// Import assertEqual
const test = require('./assertEqual.js');

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  result = clearUp(itemsToCount);
  result.array.forEach(element => {
    
  });
  for (let i = 0; i < allItems.length; i++) {
    if (typeof result[allItems[i]] === "number") {
      result[allItems[i]] += 1;
    }
  }
  return cleanUp(result);
};

//clearUp an input object
const clearUp = function(objects) {
  for (let object in objects) {
    if (objects[object] === false) {
      delete objects[object];
    } else {
      objects[object] = 0;
    }
  }
  return objects;
};

//cleanUp an output object
const cleanUp = function(objects) {
  for (let object in objects) {
    if (objects[object] === 0) {
      objects[object] = undefined;
    }
  }
  return objects;
};

if (require.main === module) {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  
  test.assertEqual(result1["Jason"], 1);
  test.assertEqual(result1["Karima"], undefined);
  test.assertEqual(result1["Fang"], 2);
  test.assertEqual(result1["Agouhanna"], undefined);
}
  