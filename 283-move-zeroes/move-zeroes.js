/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let p1=0;

    //We move non zeros number to start of array and fill the remaining with zeros
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==0){
            nums[p1]=nums[i];
            p1++
        }
    }

    //use Array.fill("numberTofill", startIndex, uptoIndex)
    if(p1<nums.length){
        nums.fill(0,p1,nums.length)
    }
};