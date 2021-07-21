const flame = String.fromCodePoint(0x1F4A5);
const good = String.fromCodePoint(0x1F929);

function eqArrays(array1, array2) {
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
}

function assertArraysEqual(array1, array2) {
  if (eqArrays(array1,array2)) {
    console.log(good, good, good, `Assertion Passed`);
  } else {
    console.log(flame, flame, flame, `Assertion Failed`);
  }
}

function flatten(array){
  console.log("Hello!")
  // Recoursion exit condition - if an element is not array, then element is returned
  if (Array.isArray(array) === false){
    return array;
  } else {
    for (let j = array.length - 1; j >= 0; j--){
      if (Array.isArray(array[j])){
        //Recursive call
        let fArray = flatten(array[j]);
        array.splice(j,1, ...fArray);
      }
    }
  }
  return array;
}

console.log(flatten([1, 2, [3, 4], 5, [6], [7, [8,9]]]))