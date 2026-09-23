/**
 * 35. Search Insert Position
 *
 * Given a sorted array of distinct integers and a target value, return the index
 * if the target is found. If not, return the index where it would be if it were
 * inserted in order. You must write an algorithm with O(log n) runtime complexity.
 * 
 * Example 1:
 * Input: nums = [1,3,5,6], target = 5
 * Output: 2
 * 
 * Constraints:
 * 1 <= nums.length <= 10^4
 * -10^4 <= nums[i] <= 10^4
 * nums contains distinct values sorted in ascending order.
 * -10^4 <= target <= 10^4
 */

/**
 * 要搜索的是大于等于目标值的最小值，如果中间索引的值大于等于目标值，则搜索左半部分
 * 且包含中间索引，如果小于目标值，则搜索右半部分，如果左边界等于右边界则跳出循环
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length;
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] >= target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};

var main = function() {
    let nums = [1,3,5,6];
    let target = 5;
    console.log('nums: ' + nums);
    console.log('target: ' + target);
    console.log('index: ' + searchInsert(nums, target));
};

main();
