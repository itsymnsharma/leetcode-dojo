/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxCount=0;
    let currentCount=0;

    //traverse through the array
    for(let i=0; i<nums.length; i++){
        //check if num is 1, if yes, inc currentCount by 1
        if(nums[i]==1){
            currentCount++
        } else {
            //compare both counts and reset currentCount to 0
            maxCount = Math.max(currentCount, maxCount);
            currentCount=0;
        }

    }

    //if consecutive 1's are at the end of array followed by nothing, so we need to check currentCOunt and maxCount incase if currentCount is more.
    return Math.max(currentCount, maxCount);
};