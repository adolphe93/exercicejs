'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

// Your code :

const string = 'Because';
console.log(string.substring(2));

//

const str = 'Because';
console.log(str.slice(0, 5));

//

const text = 'Because';
console.log(text.substr(2, 3));

//* Begin of tests
const assert = require('assert')

assert.fail('You must write your own tests')
// End of tests */
