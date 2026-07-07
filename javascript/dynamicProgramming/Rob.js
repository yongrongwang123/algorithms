/**
 * You are a professional robber planning to rob houses along a street. Each house
 * has a certain amount of money stashed, the only constraint stopping you from
 * robbing each of them is that adjacent houses have security systems connected
 * and it will automatically contact the police if two adjacent houses were broken
 * into on the same night. Given an integer array nums representing the amount of
 * money of each house, return the maximum amount of money you can rob tonight without
 * alerting the police.
 *
 * Example 1:
 * Input: nums = [1,2,3,1]
 * Output: 4
 * Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3). Total
 * amount you can rob = 1 + 3 = 4.
 *
 * Constraints:
 * 1 <= nums.length <= 100
 * 0 <= nums[i] <= 400
 */

/**
 * 类似斐波那契数列问题，有大量的重复子问题，使用动态规划，为了优化时间，使用
 * 迭代法，为了优化空间，使用变量代替数组
 */
var rob = function(nums) {
    let pre = 0;
    let cur = 0;
    for (let n of nums) {
        let temp = pre + n;
        temp = (temp >= cur ? temp : cur);
        pre = cur;
        cur = temp;
    }
    return cur;
}

var main = function() {
    let nums = [1,2,3,1];
    console.log('nums: ' + nums);
    console.log('money: ' + rob(nums));
}

main();
