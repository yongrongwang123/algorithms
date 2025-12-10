/**
 * Given an integer array nums and an integer k, return the kth largest element
 * in the array. Note that it is the kth largest element in the sorted order, not
 * the kth distinct element. Can you solve it without sorting?
 *
 * Example 1:
 * Input: nums = [3,2,1,5,6,4], k = 2
 * Output: 5
 *
 * Constraints:
 * 1 <= k <= nums.length <= 10^5
 * -10^4 <= nums[i] <= 10^4
 */

/**
 * 快速选择：类似于二分搜索，使用快速排序的分区策略来搜索第 k 大元素
 */
var findKthLargest = function(nums, k) {
    k = nums.length - k;
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = partition(nums, left, right);
        if (mid == k) {
            break;
        } else if (mid < k) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return nums[k];
}

/**
 * 快速排序的分解部分：首先将最左边元素作为比较值，然后用两个指针 left 和 right
 * 分别从最左边和最右边向中间移动，移动 right 指针直到指针所在元素小于比较值，
 * 移动 left 指针直到指针所在元素大于比较值
 */
var partition = function(nums, left, right) {
    let index = parseInt(Math.random() * (right - left + 1) + left);
    [nums[left], nums[index]] = [nums[index], nums[left]];
    let pivot = nums[left];

    while (left < right) {
        while (left < right && nums[right] >= pivot) {
            right--;
        }
        nums[left] = nums[right];
        while (left < right && nums[left] <= pivot) {
            left++;
        }
        nums[right] = nums[left];
    }
    nums[left] = pivot;

    return left;
}

let nums = [3,2,1,5,6,4];
let k = 2;
console.log('input array: ' + nums);
console.log('k: ' + k);
console.log('kth largest: ' + findKthLargest(nums, k));
