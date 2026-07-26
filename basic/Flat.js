/**
 * Given a multi-dimensional array arr and a depth n, return a flattened version
 * of that array. A multi-dimensional array is a recursive data structure that contains
 * integers or other multi-dimensional arrays. A flattened array is a version of
 * that array with some or all of the sub-arrays removed and replaced with the actual
 * elements in that sub-array. This flattening operation should only be done if the
 * current depth of nesting is less than n. The depth of the elements in the first
 * array are considered to be 0. Please solve it without the built-in Array.flat method.
 * 
 * Example 1:
 * Input
 * arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
 * n = 0
 * Output
 * [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
 * Explanation
 * Passing a depth of n=0 will always result in the original array. This is because
 * the smallest possible depth of a subarray (0) is not less than n=0. Thus, no subarray
 * should be flattened.
 * 
 * Constraints:
 * 0 <= count of numbers in arr <= 10^5
 * 0 <= count of subarrays in arr <= 10^5
 * maxDepth <= 1000
 * -1000 <= each number <= 1000
 * 0 <= n <= 1000
 */

var flat = function (arr, n) {
    let arr2 = [];
    let stack = [[arr, n + 1]];
    while (stack.length) {
        let [item, depth] = stack.pop();
        if (typeof item == 'number' || !depth) {
            arr2.push(item);
        } else {
            for (let i = item.length - 1; i >= 0; i--) {
                stack.push([item[i], depth - 1]);
            }
        }
    }
    return arr2;
};

var main = function() {
    let arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
    let n = 1;
    console.log(JSON.stringify(arr));
    console.log(JSON.stringify(flat(arr, n)));
};

main();
