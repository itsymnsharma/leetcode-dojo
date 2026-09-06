/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    //return 0 if empty array
    if(nums.length === 0) return 0;

    //since it's a sorted array, first element is always unique
    //uniqueIndex points to the position where the next unique value goes.
    let uniqueIndex = 1;

    //starting from index 1 since 0 is already unique
    for(let i=1; i<nums.length; i++){
        // Since the array is sorted, duplicates are always next to each other.
        // If the current value differs from the previous value, it is unique.
        if(nums[i]!==nums[i-1]){
            //save the unique value in the uniqueIndex
            nums[uniqueIndex] = nums[i];

            // Move the pointer for the next unique value.
            uniqueIndex++;
        }
    }

    return uniqueIndex;
};