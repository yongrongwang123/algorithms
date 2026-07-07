/**
 * Given an integer array nums, return true if there exists a triple of indices
 * (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices
 * exists, return false.
 *
 * Example 1:
 * Input: nums = [1,2,3,4,5]
 * Output: true
 * Explanation: Any triplet where i < j < k is valid.
 * 
 * Constraints:
 * 1 <= nums.length <= 5 * 10^5
 * -2^31 <= nums[i] <= 2^31 - 1
 */

/**
 * 使用贪心算法，要找到满足 min1 < min2 < min3 的三个数字，当 min2 存在的时候 min1
 * 必定存在，当 min3 存在的时候 min1 和 min2 必定存在，更新 min1 和 min2 是为了将
 * 来更快获得 min3
 */
var increasingTriplet = function(nums) {
    if (nums.length < 3) {
        return false;
    }
    let min1 = 2147483647;
    let min2 = min1;
    for (let n of nums) {
        if (n <= min1) {
            min1 = n;
        } else if (n <= min2) {
            min2 = n;
        } else {
            return true;
        }
    }
    return false;
}

var main = function() {
    let nums = [1,2,3,4,5];
    console.log('nums: ' + nums);
    console.log('triple exists: ' + increasingTriplet(nums));
}

main();
