/**
 * Given integer array nums, return the third maximum number in this array. If the
 * third maximum does not exist, return the maximum number.
 *
 * Example 1:
 * Input: nums = [3,2,1]
 * Output: 1
 * Explanation: The third maximum is 1.
 *
 * Constraints:
 * 1 <= nums.length <= 10^4
 * -2^31 <= nums[i] <= 2^31 - 1
 */

/**
 * 从左往右扫描，找到该次扫描的最大值，保存第一次扫描的最大值作为备用，再做一次从左往右
 * 扫描，每当遇到该次扫描的最大值就和最后一个元素互换，然后数组长度减一，像这样找最大值找三次
 */
var thirdMax = function(nums) {
    let max = nums[0];
    let max1 = max;
    let count = 0;
    let length = nums.length;

    while (length > 0 && count < 3) {
        max = nums[0];
        for (let i = 0; i < length; i++) {
            if (nums[i] > max)
                max = nums[i];
        }
        if (count == 0)
            max1 = max;
        for (let i = 0; i < length; i++) {
            if (nums[i] == max) {
                for (; length - 1 >= i; length--) {
                    if (nums[length - 1] != max) {
                        nums[i] = nums[length - 1];
                        break;
                    }
                }
            }
        }
        count++;
    }

    return count < 3 ? max1 : max;
}

let nums = [3,2,1];
console.log('input array: ' + nums);
console.log('max: ' + thirdMax(nums));
