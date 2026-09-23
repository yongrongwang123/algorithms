/**
 * 34. Find First and Last Position of Element in Sorted Array
 *
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
    if (!nums.length) {
        return [-1, -1];
    }
    let first = findFirst(nums, 0, nums.length - 1, target);
    if (nums[first] != target) {
        return [-1, -1];
    }
    return [first, findLast(nums, first, nums.length - 1, target)];
}

/**
 * 要找到第一次出现目标值的索引，如果中间索引的元素大于等于目标值，则目标值在左半部分且包含
 * 中间元素，如果中间索引的元素小于目标值，则目标值在右半部分且不包含中间元素，最后左右边界
 * 重合的位置即为第一次出现目标值的索引
 */
var findFirst = function(nums, left, right, target) {
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] >= target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}

/**
 * 要找到最后一次出现目标值的索引，如果中间索引的元素小于等于目标值，则目标值在右半部分且包含
 * 中间元素，如果中间索引的元素大于目标值，则目标值在左半部分且不包含中间元素，最后左右边界
 * 重合的位置即为最后一次出现目标值的索引
 */
var findLast = function(nums, left, right, target) {
    while (left < right) {
        let mid = left + Math.floor((right - left + 1) / 2);
        if (nums[mid] <= target) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }
    return left;
}

var main = function() {
    let nums = [5,7,7,8,8,10];
    let target = 8;
    console.log('nums: ' + nums);
    console.log('target: ' + target);
    console.log('index: ' + searchRange(nums, target));
}

main();
