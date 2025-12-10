/**
 * Given an array of distinct integers arr, find all pairs of elements with the
 * minimum absolute difference of any two elements. Return a list of pairs in ascending
 * order(with respect to pairs), each pair [a, b] follows
 * a, b are from arr
 * a < b
 * b - a equals to the minimum absolute difference of any two elements in arr
 *
 * Example 1:
 * Input: arr = [4,2,1,3]
 * Output: [[1,2],[2,3],[3,4]]
 * Explanation: The minimum absolute difference is 1. List all pairs with difference
 * equal to 1 in ascending order.
 *
 * Constraints:
 * 2 <= arr.length <= 10^5
 * -10^6 <= arr[i] <= 10^6
 */

/**
 * 首先对数组进行排序，然后从左往右遍历数组，记录两个连续元素差值的最小值，再次
 * 从左往右遍历数组，保存每组差值等于最小值的两个元素
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a, b) => a - b);
    let min = arr[1] - arr[0];
    let pairs = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] < min) {
            min = arr[i] - arr[i - 1];
        }
    }
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] == min) {
            pairs.push([arr[i - 1], arr[i]]);
        }
    }

    return pairs;
}

let arr = [4,2,1,3];
console.log('input arrary: ' + arr);
console.log('output array: ' + minimumAbsDifference(arr));
