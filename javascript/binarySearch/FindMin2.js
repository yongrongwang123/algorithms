/**
 * Suppose an array of length n sorted in ascending order is rotated between 1 and
 * n times. For example, the array nums = [0,1,4,4,5,6,7] might become:
 * - [4,5,6,7,0,1,4] if it was rotated 4 times.
 * - [0,1,4,4,5,6,7] if it was rotated 7 times.
 * Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in
 * the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]]. Given the sorted rotated array
 * nums that may contain duplicates, return the minimum element of this array. You
 * must decrease the overall operation steps as much as possible.
 *
 * Example 1:
 * Input: nums = [1,3,5]
 * Output: 1
 *
 * Constraints:
 * n == nums.length
 * 1 <= n <= 5000
 * -5000 <= nums[i] <= 5000
 * nums is sorted and rotated between 1 and n times.
 */

/**
 * 如果中间索引的元素大于右边界的元素，则最小值在右半部分且不包含中间元素，如果中间索引的元
 * 素小于右边界的元素,则最小值在左半部分且包含中间元素，否则将右边界减一来去除重复元素
 */
var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((right - left) / 2) + left;
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else if (nums[mid] < nums[right]) {
            right = mid;
        } else {
            right--;
        }
    }

    return nums[left];
}

let nums = [1,3,5];
console.log('input array: ' + nums);
console.log('min: ' + findMin(nums));
