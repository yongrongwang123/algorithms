/**
 * Given a non-empty array of integers nums, every element appears twice except 
 * for one. Find that single one. You must implement a solution with a linear runtime 
 * complexity and use only constant extra space.
 * 
 * Example 1:
 * Input: nums = [2,2,1]
 * Output: 1
 * 
 * Constraints:
 * 1 <= nums.length <= 3 * 104
 * -3 * 104 <= nums[i] <= 3 * 104
 * Each element in the array appears twice except for one element which appears only once.
 */

/**
 * 利用异或的两个特性：1. 异或具有交换性；2. 一个数字和另一个数字异或两次不改变原数字
 */
var singleNumber = function(nums) {
    let result = 0;
    for (let num of nums) {
        result ^= num;
    }
    return result;
}

let nums = [2,2,1];
console.log('input array: ' + nums);
console.log('number: ' + singleNumber(nums));
