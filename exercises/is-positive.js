'use strict'

/*
 * Create a `isPositive` function that takes a number as
 * parameter and return true if the given number is
 * stricly positive, or false otherwise
 *
 */

// Your code:

function test37(x) 
{
    if (x % 3 == 0 || x % 7 == 0) 
    {
        return true;
    } else {
        return false;
    }
}
console.log(test37(12));

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof isPositive, 'function')
assert.strictEqual(isPositive.length, 1)
assert.strictEqual(isPositive(3), true)
assert.strictEqual(isPositive(1998790), true)
assert.strictEqual(isPositive(-1), false)
assert.strictEqual(isPositive(-0.7), false)
assert.strictEqual(isPositive(-787823), false)
assert.strictEqual(isPositive(0), false)
// End of tests */
