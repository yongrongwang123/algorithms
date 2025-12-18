/**
 * Given an array of integers nums sorted in non-decreasing order, find the starting
 * and ending position of a given target value. If target is not found in the array,
 * return [-1, -1]. You must write an algorithm with O(log n) runtime complexity.
 *
 * Example 1:
 * Input: nums = [5,7,7,8,8,10], target = 8
 * Output: [3,4]
 *
 * Constraints:
 * 0 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 * nums is a non-decreasing array.
 * -10^9 <= target <= 10^9
 */

/**
 * 分别找到第一次和最后一次出现目标值的索引
 */
var searchRange = function(nums, target) {
    if (nums.length == 0) {
        return [-1, -1];
    }
    return [findFirst(nums, target), findLast(nums, target)];
}

/**
 * 要找到第一次出现目标值的索引，如果中间索引的元素大于等于目标值，则目标值在左半部分且包含
 * 中间元素，如果中间索引的元素小于目标值，则目标值在右半部分且不包含中间元素，最后左右边界
 * 重合的位置即为第一次出现目标值的索引
 */
var findFirst = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((right - left) / 2) + left;
        if (nums[mid] >= target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return nums[left] == target ? left : -1;
}

/**
 * 要找到最后一次出现目标值的索引，如果中间索引的元素小于等于目标值，则目标值在右半部分且包含
 * 中间元素，如果中间索引的元素大于目标值，则目标值在左半部分且不包含中间元素，最后左右边界
 * 重合的位置即为最后一次出现目标值的索引
 */
var findLast = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((right - left + 1) / 2) + left;
        if (nums[mid] <= target) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }

    return nums[left] == target ? left : -1;
}

let nums = [5,7,7,8,8,10];
let target = 8;
console.log('input array: ' + nums);
console.log('target: ' + target);
console.log('output array: ' + searchRange(nums, target));
