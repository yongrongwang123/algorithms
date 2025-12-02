/**
 * Given an array of integers arr, return true if and only if it is a valid mountain
 * array. Recall that arr is a mountain array if and only if:
 * arr.length >= 3
 * There exists some i with 0 < i < arr.length - 1 such that:
 * arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
 * arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
 *
 * Example 1:
 * Input: arr = [2,1]
 * Output: false
 *
 * Constraints:
 * 1 <= arr.length <= 10^4
 * 0 <= arr[i] <= 10^4
 */

/**
 * 两指针从两边往中间扫描，左边的指针在遇到相邻两个元素中左边大于等于右边时就停止，右边的
 * 指针在遇到相邻两个元素中左边小于等于右边时就停止，最终判断两个指针停止位置是否相等且两
 * 指针都移动过至少一个位置
 */
var validMountainArray = function(arr) {
    let n = arr.length - 1;
    let i = 0;
    let j = n;

    while (i < n && arr[i] < arr[i + 1])
        i++;
    while (j > 0 && arr[j - 1] > arr[j])
        j--;

    return i > 0 && j < n && i == j;
}

let arr = [2,1];
console.log('input array: ' + arr);
console.log('valid: ' + validMountainArray(arr));
