/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    //a xor 0 is a and a xor a is 0;
    //like a xor b xor a xor b xor c which will results in 0 xor c aka c , we found our single number
    let xor=0;

    //we traverse through the array and do xor operations on the values
    for(let i=0; i<nums.length; i++){
        //in javascript we write xor as ^
        xor = xor ^ nums[i]
    }

    return xor;
};