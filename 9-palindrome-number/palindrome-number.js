/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // Invalid or negative numbers cannot be palindromes
    if(!Number.isFinite(x) || !Number.isInteger(x)|| x < 0) return false;
    
    // Keeps the number within the 32-bit signed integer range
    const limit = Math.pow(2, 31);
    if (x < -limit || x > limit - 1) return false;

    let reversed = 0;
    const original = x;

    // Reverse the number digit by digit
    while(x > 0){
        const remainder = x % 10; // gets the last digit
        reversed = reversed * 10 + remainder;
        x = Math.floor(x / 10); // Removes the last digit
    }

    return original === reversed;

};