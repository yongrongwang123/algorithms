/**
 * Given an integer array nums, find the subarray with the largest sum, and return
 * its sum.
 *
 * Example 1:
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: The subarray [4,-1,2,1] has the largest sum 6.
 *
 * Constraints:
 * 1 <= nums.length <= 10^5
 * -10^4 <= nums[i] <= 10^4
 */

/**
 * 要得到最大子数组之和，使用动态规划，局部最优解中选择最大的得到全局最优解，如果
 * 之前子数组之和为负数就重新开始子数组，否则就保持起点不变
 */
var maxSubArray = function(nums) {
    let cur = nums[0];
    let pre = cur;
    for (let i = 1; i < nums.length; i++) {
        cur = (cur > 0 ? cur + nums[i] : nums[i]);
        pre = (pre >= cur ? pre : cur);
    }
    return pre;
}

var main = function() {
    let nums = [-2,1,-3,4,-1,2,1,-5,4];
    console.log('nums: ' + nums);
    console.log('sub array: ' + maxSubArray(nums));
}

main();
