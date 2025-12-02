/**
 * Given an integer array nums, move all 0's to the end of it while maintaining
 * the relative order of the non-zero elements. Note that you must do this in-place
 * without making a copy of the array.
 *
 * Example 1:
 * Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 *
 * Constraints:
 * 1 <= nums.length <= 10^4
 * -2^31 <= nums[i] <= 2^31 - 1
 */

/**
 * 从左往右扫描数组，每当遇到一个非0值就将其写入最左侧未被写过的位置，最后将余下的位置填充为0
 */
var moveZeroes = function(nums) {
    let j = 0;

    for (let num of nums) {
        if (num != 0) {
            nums[j] = num;
            j++;
        }
    }
    for (; j < nums.length; j++)
        nums[j] = 0;
}

let nums = [0,1,0,3,12];
console.log('input array: ' + nums);
moveZeroes(nums);
console.log('output array: ' + nums);
