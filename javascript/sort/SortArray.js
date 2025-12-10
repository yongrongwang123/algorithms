/**
 * 912. Sort an Array
 *
 * Given an array of integers nums, sort the array in ascending order and return
 * it. You must solve the problem without using any built-in functions in O(nlog(n))
 * time complexity and with the smallest space complexity possible.
 * 
 * Example 1:
 * Input: nums = [5,2,3,1]
 * Output: [1,2,3,5]
 * Explanation: After sorting the array, the positions of some numbers are not
 * changed (for example, 2 and 3), while the positions of other numbers are changed
 * (for example, 1 and 5).
 *
 * Constraints:
 * 1 <= nums.length <= 5 * 10^4
 * -5 * 10^4 <= nums[i] <= 5 * 10^4
 */

var sortArray = function(nums) {
    let merge = true;
    if (merge) {
        console.log('merge sort');
        mergeSort(nums, 0, nums.length - 1);
    } else {
        console.log('quick sort');
        quickSort(nums, 0, nums.length - 1);
    }
    return nums;
}

/**
 * 归并排序分为三步，分解，递归和合并，排序发生在合并
 */
var mergeSort = function(nums, left, right) {
    if (left >= right) {
        return;
    }
    let mid = left + Math.floor((right - left) / 2);
    mergeSort(nums, left, mid);
    mergeSort(nums, mid + 1, right);
    merge(nums, left, mid, right);
}

/**
 * 首先创建两个临时数组，保存 [left,mid] 和 [mid+1,right] 的元素，然后从左向右迭
 * 代两个数组，取其中较小的元素放入原数组
 */
var merge = function(nums, left, mid, right) {
    let nums1 = nums.slice(left, mid + 1);
    let nums2 = nums.slice(mid + 1, right + 1);
    for (let i = 0, j = 0, k = left; k <= right; k++) {
        let num1 = (i < nums1.length ? nums1[i] : 1000001);
        let num2 = (j < nums2.length ? nums2[j] : 1000001);
        if (num1 < num2) {
            nums[k] = num1;
            i++;
        } else {
            nums[k] = num2;
            j++;
        }
    }
}

/**
 * 快速排序分为两步，分解和递归，排序发生在分解
 */
var quickSort = function(nums, left, right) {
    if (left >= right) {
        return;
    }
    let mid = partition(nums, left, right);
    quickSort(nums, left, mid);
    quickSort(nums, mid + 1, right);
}

/**
 * 随机选择一个元素作为比较值，指针 i 在左指针 j 和右边界之间移动，如果指针 i 所在元素小
 * 于比较值，将它和指针 j 所在元素进行交换
 */
var partition = function(nums, left, right) {
    let r = Math.floor(Math.random() * (right - left + 1) + left);
    let pivot = nums[r];
    [nums[r], nums[right]] = [nums[right], nums[r]];
    let j = left;
    for (let i = left; i < right; i++) {
        if (nums[i] < pivot){
            [nums[i], nums[j]] = [nums[j], nums[i]];
            j++;
        }
    }
    [nums[j], nums[right]] = [nums[right], nums[j]];
    return left;
}

var main = function() {
    let nums = [5,2,3,1];
    console.log('nums: ' + nums);
    console.log('nums: ' + sortArray(nums));
}

main();
