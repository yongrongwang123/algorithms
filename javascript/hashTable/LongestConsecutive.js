/**
 * 128. Longest Consecutive Sequence
 *
 * Given an unsorted array of integers nums, return the length of the longest
 * consecutive elements sequence. You must write an algorithm that runs in O(n) time.
 * 
 * Example 1:
 * Input: nums = [100,4,200,1,3,2]
 * Output: 4
 * Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore
 * its length is 4.
 * 
 * Constraints:
 * 0 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 */

/**
 * 将所有数字存储到 set 中，遍历 set 中每个数字，首先找到连续序列的起点，然后找到
 * 连续序列的终点，最后更新连续序列的最大长度
 */
var longestConsecutive = function(nums) {
    let set = new Set(nums);
    let longest = 0;
    for (let num1 of set) {
        if (set.has(num1 - 1)) {
            continue;
        }
        let num2 = num1 + 1;
        for (; set.has(num2); num2++) {}
        let diff = num2 - num1;
        longest = (longest >= diff ? longest : diff);
    }
    return longest;
};

var main = function() {
    let nums = [100,4,200,1,3,2];
    console.log('nums: ' + nums);
    console.log('longest: ' + longestConsecutive(nums));
};

main();
