/**
 * 45. Jump Game II
 *
 * You are given a 0-indexed array of integers nums of length n. You are initially
 * positioned at index 0. Each element nums[i] represents the maximum length of a
 * forward jump from index i. In other words, if you are at index i, you can jump
 * to any index (i + j) where:
 * - 0 <= j <= nums[i] and
 * - i + j < n
 * Return the minimum number of jumps to reach index n - 1. The test cases are generated
 * such that you can reach index n - 1.
 * 
 * Example 1:
 * Input: nums = [2,3,1,1,4]
 * Output: 2
 * Explanation: The minimum number of jumps to reach the last index is 2. Jump 1
 * step from index 0 to 1, then 3 steps to the last index.
 * 
 * Constraints:
 * 1 <= nums.length <= 10^4
 * 0 <= nums[i] <= 1000
 * It's guaranteed that you can reach nums[n - 1].
 */

/**
 * 贪心算法结合广度优先遍历，从前往后遍历数组，每次到达一个位置，就使用贪心算法计算
 * 从当前位置能到达的最远位置，当前层能到达的最远位置就是下一层的最后一个位置，如果
 * 下一层包含最后一个位置，则返回当前层数
 */
var jump = function(nums) {
    let max = 0;
    let count = 0;
    for (let j = 0, i = 0; j < nums.length - 1; j = max) {
        for (; i <= j; i++) {
            let temp = i + nums[i];
            max = (max >= temp ? max : temp);
        }
        count++;
    }
    return count;
};

var main = function() {
    let nums = [2,3,1,1,4];
    console.log('nums: ' + nums);
    console.log('jump: ' + jump(nums));
};

main();
