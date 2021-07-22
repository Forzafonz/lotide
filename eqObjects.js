const test = require('./assertEqual.js');
const testArr = require('./eqArrays.js');

// Returns true if both objects have identical keys with identical values.
// Return fall otherwise

const eqObjects = function(object1, object2) {
  let object1Keys = getKeys(object1);
  let object2Keys = getKeys(object2);
  if (object1Keys.length !== object2Keys.length) {
    return false;
  }
  for (let i = 0; i < object1Keys.length; i++) {
    checkKey = object1Keys[i];
    if (object2[checkKey] === undefined) {
      return false;
    } else if (typeof object1[checkKey] !== typeof object2[checkKey]) {
      return false;
    } else if (Array.isArray(object1[checkKey])) {
      if (!eqArrays(object1[checkKey], object2[checkKey])) {
        return false;
      }
    } else if (typeof object1[checkKey] === 'object') {
      if (!eqObjects(object1[checkKey], object2[checkKey])) {
        return false;
      }
    } else {
      if (!eqPrimitives(object1[checkKey], object2[checkKey])) {
        return false;
      }
    }
  }
  return true;
};

//Function to compare two primitives

const eqPrimitives = function(prim1, prim2) {
  if (prim1 !== prim2) {
    return false;
  }
  return true;
};

//Function to compare two arrays
const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

//Function to get a list of object keys
const getKeys = function(object) {
  return Object.keys(object);
};

// Tests

if (require.main == module) {

  const ab = { a: [1,5], b: "2" };
  const ba = { b: "2", a: [1,2] };
  console.log(eqObjects(ab, ba)); // => false
  
  const abc = { a: [1,2], b: "2", c: "3" };
  console.log(eqObjects(ab, abc)); // => false
  
  const a1 = {b:2, a:1, d: [1,"2"], c:3};
  const a2 = {a:1, b:2, c:3, d: [1,2]};
  console.log(eqObjects(a1, a2)); // => false
  
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  console.log(eqObjects(cd, dc)); // => true
  
  const cd2 = { c: "1", d: ["2", 3, 4] };
  console.log(eqObjects(cd, cd2)); // => false

  const obj1 = {a: {a:1, b:2, c: {a:1, b:2}}};
  const obj2 = {a: {b:2, a:1, c: {b:2, a:1}}};
  console.log(eqObjects(obj1, obj2)); // => true

  const obj3 = {a: {a:1, b:2, c: {a:1, b:2}}};
  const obj4 = {a: {b:2, a:1, c: {b:2, a:"1"}}};
  console.log(eqObjects(obj3, obj4)); // => false
}
  

module.exports = {
  eqObjects
};