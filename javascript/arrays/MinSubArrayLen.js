/**
 * Given an array of positive integers nums and a positive integer target, return
 * the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr]
 * of which the sum is greater than or equal to target. If there is no such subarray,
 * return 0 instead.
 *
 * Example 1:
 * Input: target = 7, nums = [2,3,1,2,4,3]
 * Output: 2
 * Explanation: The subarray [4,3] has the minimal length under the problem constraint.
 *
 * Constraints:
 * 1 <= target <= 10^9
 * 1 <= nums.length <= 10^5
 * 1 <= nums[i] <= 10^5
 */

/**
 * 使用两个指针表示一个窗口，移动右边指针来获得一个合法的窗口，找到合法的窗口以后，移动
 * 左边指针来获得一个更小的窗口
 */
var minSubArrayLen = function(target, nums) {
    let length = nums.length;
    let sum = 0;
    let i, j;

    for (i = 0, j = 0; j < nums.length; j++) {
        sum += nums[j];
        for (; sum >= target; i++) {
            sum -= nums[i];
            length = Math.min(length, j - i + 1);
        }
    }

    return i == 0 ? 0 : length;
}

let target = 7;
let nums = [2,3,1,2,4,3];
console.log('input array: ' + nums);
console.log('target: ' + target);
console.log('length: ' + minSubArrayLen(target, nums));
