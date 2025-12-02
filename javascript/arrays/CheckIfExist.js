/**
 * Given an array arr of integers, check if there exists two integers N and M such
 * that N is the double of M ( i.e. N = 2 * M). More formally check if there exists
 * two indices i and j such that :
 * i != j
 * 0 <= i, j < arr.length
 * arr[i] == 2 * arr[j]
 *
 * Example 1:
 * Input: arr = [10,2,5,3]
 * Output: true
 * Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.
 *
 * Constraints:
 * 2 <= arr.length <= 500
 * -10^3 <= arr[i] <= 10^3
 */

/**
 * 从左往右遍历数组，每个元素乘以2或者除以2后都不等于之前的元素，则将该元素放入HashSet，
 * 否则返回true
 */
var checkIfExist = function(arr) {
    let set = new Set();

    for (let num of arr) {
        if (set.has(num * 2) || set.has(num / 2))
            return true;
        set.add(num);
    }

    return false;
}

let arr = [10,2,5,3];
console.log('input arrray: ' + arr);
console.log('existed: ' + checkIfExist(arr));
