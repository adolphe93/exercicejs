'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */
// Your code :

const str = "1234567890"
console.log(str.slice(0, 2));


const com = "1234567890"
console.log(com.substr(8));


const yve = "1234567890"
console.log(yve.substring(2, 3));



//* Begin of tests
const assert = require('assert');
const { compileFunction } = require('vm');

assert.fail('You must write your own tests')
// End of tests */
