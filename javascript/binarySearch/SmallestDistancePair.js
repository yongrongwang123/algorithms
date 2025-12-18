/**
 * The distance of a pair of integers a and b is defined as the absolute difference 
 * between a and b. Given an integer array nums and an integer k, return the kth 
 * smallest distance among all the pairs nums[i] and nums[j] where 0 <= i < j < nums.length.
 * 
 * Example 1:
 * Input: nums = [1,3,1], k = 1
 * Output: 0
 * Explanation: Here are all the pairs:
 * (1,3) -> 2
 * (1,1) -> 0
 * (3,1) -> 2
 * Then the 1st smallest distance pair is (1,1), and its distance is 0.
 * 
 * Constraints:
 * n == nums.length
 * 2 <= n <= 10^4
 * 0 <= nums[i] <= 10^6
 * 1 <= k <= n * (n - 1) / 2
 */

/**
 * 首先对原数组进行排序，然后在0到所有元素最大距离之间进行二分搜索，每次针对一个给定的距离，
 * 统计所有小于等于当前距离的数字对的个数，如果当前个数小于目标值，则搜索右半部分且不包含中间
 * 元素，否则搜索左半部分且包含中间元素
 */
var smallestDistancePair = function(nums, k) {
    nums.sort((a, b) => a - b);
    let left = 0;
    let right = nums[nums.length - 1] - nums[0];

    while (left < right) {
        let mid = Math.floor((right - left) / 2) + left;
        let count = countPairs(nums, mid);
        if (count < k) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
}

/**
 * 统计所有距离小于等于目标值的数字对的个数
 */
var countPairs = function(nums, target) {
    let count = 0;

    for (let i = 0, j = 0; i < nums.length; i++) {
        for (; j < nums.length; j++) {
            if (nums[j] - nums[i] > target) {
                break;
            }
        }
        count += j - 1 - i;
    }

    return count;
}

let nums = [1,3,1];
let k = 1;
console.log('input array: ' + nums);
console.log('k: ' + k);
console.log('distance: ' + smallestDistancePair(nums, k));
