/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  
  let lastIndex = s.length - 1;

  for (let i = 0; i < lastIndex; i++) {
    // Swap the first and last values.
    const temp = s[lastIndex];
    s[lastIndex] = s[i];
    s[i] = temp;

    // Move the right pointer toward the center.
    lastIndex--;
  }
    
};