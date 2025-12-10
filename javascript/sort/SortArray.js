/**
 * Given an array of integers nums, sort the array in ascending order.
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
    let merge = false;
    let quick = true;
    if (merge) {
        console.log('merge sort');
        mergeSort(nums, 0, nums.length - 1);
    }
    if (quick) {
        console.log('quick sort');
        quickSort(nums, 0, nums.length - 1);
    }

    return nums;
}

/**
 * 归并排序：分为三步，分解，递归排序，合并
 */
var mergeSort = function(nums, left, right) {
    if (left >= right) {
        return;
    }
    let mid = parseInt((left + right) / 2);
    mergeSort(nums, left, mid);
    mergeSort(nums, mid + 1, right);
    merge(nums, left, mid, right);
}

/**
 * 归并排序的合并部分：首先创建两个临时数组保存[left,mid]和[mid+1,right]的元素，然后从
 * 左向右迭代两个数组，每次对比两个数组当前元素，取其中较小的元素放入原数组
 */
var merge = function(nums, left, mid, right) {
    let nums1 = nums.slice(left, mid + 1);
    let nums2 = nums.slice(mid + 1, right + 1);

    for (let i = 0, j = 0, k = left; k <= right; k++) {
        if (j >= nums2.length || i < nums1.length && nums1[i] < nums2[j]) {
            nums[k] = nums1[i];
            i++;
        } else {
            nums[k] = nums2[j];
            j++;
        }
    }
}

/**
 * 快速排序：分为两步，分解，递归排序，排序发生在分解
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

let nums = [110,100,0];
console.log('input array: ' + nums);
console.log('output array: ' + sortArray(nums));
