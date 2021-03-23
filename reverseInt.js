// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321

// Example 2:

// Input: x = -123
// Output: -321

// Example 3:

// Input: x = 120
// Output: 21

// Example 4:

// Input: x = 0
// Output: 0

 

// Constraints:

//     -231 <= x <= 231 - 1

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var reversed = 0 
    var positiveX = Math.abs(x) 
    
    while(x != 0) {
        if(reversed * 10 + x % 10 > (2**31 - 1) || reversed * 10 + x % 10 < -(2**31)) return 0
        reversed = reversed * 10 + x % 10 
        x = Math.trunc(x/10)
    }
    
    return reversed 
    
};