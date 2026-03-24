/**
 * Given an integer array nums and an integer k, return true if there are two distinct 
 * indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
 * 
 * Example 1:
 * Input: nums = [1,2,3,1], k = 3
 * Output: true
 * 
 * Constraints:
 * 1 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 * 0 <= k <= 10^5
 */

/**
 * 在遍历数组过程中使用map来记录元素值和对应的索引，如果该元素值不是第一次出现，就计算当前
 * 索引和上一次出现时的索引差值，如果差值小于k则返回true
 */
var containsNearbyDuplicate = function(nums, k) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] != undefined && i - map[nums[i]] <= k) {
            return true;
        }
        map[nums[i]] = i;
    }
    return false;
}

let nums = [1,2,3,1];
let k = 3;
console.log('input array: ' + nums);
console.log('k: ' + k);
console.log('contains: ' + containsNearbyDuplicate(nums, k));
