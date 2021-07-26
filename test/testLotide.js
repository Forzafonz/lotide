const assert = require('chai').assert;
const head   = require('../head');
const tail   = require('../tail');

describe("#head", () => {
  
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
});

describe("#tail", () => {

  it("return [2,3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1,2,3]), [2,3]);
  });

  it("return [] for [1]", () => {
    assert.deepEqual(tail([1]), []);
  });

});
