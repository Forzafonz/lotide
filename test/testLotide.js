const assert = require('chai').assert;
const head   = require('../head');
const tail   = require('../tail');
const findMiddle = require('../middle');


describe("#head", () => {

  it("should returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("should returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
});

describe("#tail", () => {

  it("should return [2,3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1,2,3]), [2,3]);
  });

  it("should return [] for [1]", () => {
    assert.deepEqual(tail([1]), []);
  });
});

  describe("#middle", () => {

    it("should return [2,3] for [1, 2, 3]", () => {
      assert.deepEqual(findMiddle([1, 2, 3, 4, 5, 6]), [3, 4]);
    });

    it("should return [] for [1]", () => {
      assert.deepEqual(findMiddle([1]), []);
    });

  });
