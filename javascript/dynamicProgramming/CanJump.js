/**
 * You are given an integer array nums. You are initially positioned at the array's
 * first index, and each element in the array represents your maximum jump length
 * at that position. Return true if you can reach the last index, or false otherwise.
 * 
 * Example 1:
 * Input: nums = [2,3,1,1,4]
 * Output: true
 * Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
 * 
 * Constraints:
 * 1 <= nums.length <= 10^4
 * 0 <= nums[i] <= 10^5
 */

/**
 * 从前往后遍历数组，每次到达一个位置，就使用贪心算法计算从当前位置能到达的最远位置
 * ，如果最远位置越过了最后一个位置，则能到达最后一个位置，如果不能到达当前位置，则
 * 不能到达最后一个位置
 */
var canJump = function(nums) {
    for (let i = 0, pre = 0; i <= pre; i++) {
        let cur = i + nums[i];
        pre = (pre >= cur ? pre : cur);
        if (pre >= nums.length - 1) {
            return true;
        }
    }
    return false;
}

var main = function() {
    let nums = [2,3,1,1,4];
    console.log('nums: ' + nums);
    console.log('can jump: ' + canJump(nums));
}

main();
