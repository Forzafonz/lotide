const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const takeUntil = require('./takeUntil');
const map = require('./map.js');
const flatten = require('./flatten.js');
const countOnly = require('./countOnly.js');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');

module.exports = {
  head,
  tail,
  middle,
  takeUntil,
  map,
  flatten,
  countOnly,
  eqArrays,
  eqObjects
};