/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if(nums.length === 0) return 0;
    if(!Number.isFinite(val) || !Number.isInteger(val)) return 0;

    //pointer to write at
    let writeIndex = 0;

    //traverse through the array
     for(let i=0;i<nums.length;i++){
        //update the write pointer until we see value and save in write index
	    if(nums[i]!==val){
	      nums[writeIndex] = nums[i];
	      writeIndex++;
	    }
     }

     return writeIndex;
};