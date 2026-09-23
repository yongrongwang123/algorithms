/**
 * 74. Search a 2D Matrix
 *
 * You are given an m x n integer matrix matrix with the following two properties:
 * - Each row is sorted in non-decreasing order.
 * - The first integer of each row is greater than the last integer of the previous row.
 * Given an integer target, return true if target is in matrix or false otherwise.
 * You must write a solution in O(log(m * n)) time complexity.
 * 
 * Example 1:
 * Input: matrix = [[ 1, 3, 5, 7],
 *                  [10,11,16,20],
 *                  [23,30,34,60]],
 * target = 3
 * Output: true
 * 
 * Constraints:
 * m == matrix.length
 * n == matrix[i].length
 * 1 <= m, n <= 100
 * -10^4 <= matrix[i][j], target <= 10^4
 */
import { print2dArray } from '../arrays/ArrayUtils.js';

/**
 * 用二分搜索，将二维数组展开后就得到一维数组，将一维数组中的索引转换为二维数组中
 * 的索引，将中间索引的值和目标值对比，如果小于目标值则搜索右半部分，大于目标值则
 * 搜索左半部分
 */
var searchMatrix = function(matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;
    let left = 0;
    let right = m * n - 1;
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        let val = matrix[Math.floor(mid / n)][mid % n];
        if (val == target) {
            return true;
        } else if (val < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
};

var main = function() {
    let matrix = [[ 1, 3, 5, 7],
                  [10,11,16,20],
                  [23,30,34,60]];
    let target = 5;
    print2dArray(matrix);
    console.log('target: ' + target);
    console.log('searched: ' + searchMatrix(matrix, target));
};

main();
