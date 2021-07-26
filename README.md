# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install agolubin/lotide`

**Require it:**

`const _ = require('agolubin/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

---

## Documentation

The following functions are currently implemented:

* [`head(array)`](https://github.com/Forzafonz/lotide/blob/master/head.js): retruns the first element of array passed to the function;

* [`tail(array)`](https://github.com/Forzafonz/lotide/blob/master/tail.js): returns all elements of array except the first one. If there are less than 2 elements in the array, it returns [];

* [`middlearray`](https://github.com/Forzafonz/lotide/blob/master/middle.js): return middle elements of array. If an array has an even number of elements the function return two middle elements of the array;

* [`without(source, itemsToRemove`](https://github.com/Forzafonz/lotide/blob/master/without.js): returns a new array with only those elements from ***source*** that are not present in the ***itemsToRemove*** array;

* [`takeUntil(array,  callBack function`](https://github.com/Forzafonz/lotide/blob/master/takeUntil.js): returns a slice of the array with elements taken from the beginning. The function will be going until the callback/predicate returns a truthy value;

* [`map(array,  callBack function`](https://github.com/Forzafonz/lotide/blob/master/map.js): returns an array with callBack ***function*** applied to each element of the array;

* [`flatten(array)`](https://github.com/Forzafonz/lotide/blob/master/countOnly.js): returns an array without nested arrays.

* [`countOnly(inputObject, countCondition)`](https://github.com/Forzafonz/lotide/blob/master/countOnly.js): returns an object which contains a count of items in ***inputObject*** which meets condition passed in ***countCondition***.