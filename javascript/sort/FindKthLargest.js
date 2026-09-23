/**
 * 215. Kth Largest Element in an Array
 *
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
 * 快速选择：为了处理重复数据，使用快速排序的三路分区结合二分搜索来找第 k 大元素。随机
 * 选择一个元素作为比较值，指针 i 在左指针 l 和右指针 r 之间移动，如果指针 i 所在元素
 * 小于比较值，将它和左指针 j 所在元素进行交换，如果指针 i 所在元素大于比较值，将它和
 * 右指针 r 所在元素进行交换，找到的元素范围在 l 和 r 之间，如果小于左指针 l 则在左边
 * 找，如果大于右指针 r 则在右边找
 */
var findKthLargest = function(nums, k) {
    let target = nums.length - k;
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let m = left + Math.floor(Math.random() * (right - left + 1));
        let pivot = nums[m];
        let l = left;
        let r = right;
        for (let i = l; i <= r; i++) {
            if (nums[i] < pivot) {
                [nums[i], nums[l]] = [nums[l], nums[i]];
                l++;
            } else if (nums[i] > pivot) {
                [nums[i], nums[r]] = [nums[r], nums[i]];
                r--;
                i--;
            }
        }
        if (target < l) {
            right = l - 1;
        } else if (target > r) {
            left = r + 1;
        } else {
            return pivot;
        }
    }
    return -1;
}


var main = function() {
    let nums = [3,2,1,5,6,4];
    let k = 2;
    console.log('nums: ' + nums);
    console.log('k: ' + k);
    console.log('kth largest: ' + findKthLargest(nums, k));
}

main();
