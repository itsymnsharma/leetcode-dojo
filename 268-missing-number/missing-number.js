/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const numsLength=nums.length
    const sumOfNumbers = numsLength*(numsLength+1)/2;
    let countLeft=sumOfNumbers;
    
    //we subtract the numbers from the sum of counts until we are left with the missing number
    for(let i=0; i<nums.length; i++){
      countLeft=countLeft-nums[i]
    }

    return countLeft;
};