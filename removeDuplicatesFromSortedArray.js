// Remove duplicates in-place from sorted array 

/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
    var index = 0 
    
    while(index < nums.length) {
        if(nums[index] == nums[index + 1]) {
            nums.splice(index, 1)
        } else {
            index += 1
        }
    }
    
    return nums.length
};