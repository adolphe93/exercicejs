'use strict'

/*
 * Create a `getFirst` function that takes an array or a string
 * and return the first element
 *
 * @notions Data-Structures, Get
 */

// Your code :

const arrayElements = [5, 10, 0, 20, 45];
const firstElement = arrayElements.find(element => element != undefined);
console.log(firstElement);

//* Begin of tests
const assert = require('assert');
const { Console } = require('console');

assert.strictEqual(getFirst([ 2, 42 ]), 2)
assert.strictEqual(getFirst([ 'pouet', 4, true ]), 'pouet')
assert.strictEqual(getFirst([ getFirst ]), getFirst)
assert.strictEqual(getFirst('salut'), 's')
assert.strictEqual(getFirst([]), undefined)
// End of tests */
