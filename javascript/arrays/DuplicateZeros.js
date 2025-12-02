/**
 * Given a fixed length array arr of integers, duplicate each occurrence of zero,
 * shifting the remaining elements to the right. Note that elements beyond the length
 * of the original array are not written. Do the above modifications to the input
 * array in place, do not return anything from your function.
 *
 * Example 1:
 * Input: [1,0,2,3,0,4,5,0]
 * Output: null
 * Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
 *
 * Note:
 * 1 <= arr.length <= 10000
 * 0 <= arr[i] <= 9
 */

/**
 * 先统计因为0而需要右移的位置，然后从将会存入目标数组的最后一个元素开始从右往左扫描，遇到0
 * 就重复存一次，需要注意i + shift 有可能大于等于数组长度
 */
var duplicateZeros = function(arr) {
    let shift = 0;
    let i;
    
    for (i = 0; i + shift < arr.length; i++) {
        if (arr[i] == 0)
            shift++;
    }
    for (i = i - 1; i >= 0; i--) {
        if (i + shift < arr.length)
            arr[i + shift] = arr[i];
        if (arr[i] == 0) {
            shift--;
            arr[i + shift] = arr[i];
        }
    }
};

let arr = [1,0,2,3,0,4,5,0];
console.log('input array: ' + arr);
duplicateZeros(arr);
console.log('output array: ' + arr);
