/**
 * You are given an integer array nums and two integers indexDiff and valueDiff.
 * Find a pair of indices (i, j) such that:
 * i != j,
 * abs(i - j) <= indexDiff.
 * abs(nums[i] - nums[j]) <= valueDiff, and
 * Return true if such pair exists or false otherwise.
 *
 * Example 1:
 * Input: nums = [1,2,3,1], indexDiff = 3, valueDiff = 0
 * Output: true
 *
 * Constraints:
 * 2 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 * 1 <= indexDiff <= nums.length
 * 0 <= valueDiff <= 10^9
 */

/**
 * 使用 valueDiff+1 作为哈希桶大小，差值小于等于 valueDiff 的元素必定落在相同的哈希桶或者
 * 相邻的哈希桶
 */
var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i] + 1000000000;
        let hash = parseInt(num / (valueDiff + 1));
        if ((map[hash] != undefined && i - map[hash].i <= indexDiff) ||
            (map[hash - 1] != undefined && num - map[hash - 1].num <= valueDiff &&
             i - map[hash - 1].i <= indexDiff) ||
            (map[hash + 1] != undefined && map[hash + 1].num - num <= valueDiff &&
             i - map[hash + 1].i <= indexDiff)) {
            return true;
        }
        map[hash] = {num, i};
    }
    return false;
}

var main = function() {
    let nums = [1,2,3,1];
    let indexDiff = 3;
    let valueDiff = 0;
    console.log('nums: ' + nums);
    console.log('indexDiff: ' + indexDiff + ', valueDiff: ' + valueDiff);
    console.log('duplicate: ' + containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff));
}

main();
