// Implementation of assert function.
const flame = String.fromCodePoint(0x1F4A5);
const good = String.fromCodePoint(0x1F929);

function eqArrays(array1, array2) {
  if (array1.length === 0 && array2.length === 0) {
    return true;
  }
  if (array1.length === array2.length) {
      if (Array.isArray(array1[0]) && Array.isArray(array2[0])){
        if(!eqArrays(array1[0], array2[0]) || !eqArrays(array1.splice(1), array2.splice(1))){
          return false;
        };
      } else if (array1[0] === array2[0]){
        if(!eqArrays(array1.splice(1), array2.splice(1))) {
         return false;
        }
      } else {
        return false;
        }
  }
  return true;
}

// Export

module.exports = eqArrays;

//tests 

if (require.main = module){
  console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])); // => true
  console.log(eqArrays([[2, 3], [4]], [[2, 4], [4, 5]])); // => false
  console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // => false
  console.log(eqArrays([1, 2, 3], [1, 2, 3]));// => true
  console.log(eqArrays([1, 2, 3], [3, 2, 1]));// => false
  console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
  console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
}
