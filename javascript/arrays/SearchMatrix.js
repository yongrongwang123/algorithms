/**
 * Write an efficient algorithm that searches for a value target in an m x n integer
 * matrix matrix. This matrix has the following properties:
 * Integers in each row are sorted in ascending from left to right.
 * Integers in each column are sorted in ascending from top to bottom.
 *
 * Example 1:
 * Input: matrix = [[ 1, 4, 7,11,15],
 *                  [ 2, 5, 8,12,19],
 *                  [ 3, 6, 9,16,22],
 *                  [10,13,14,17,24],
 *                  [18,21,23,26,30]],
 * target = 5
 * Output: true
 *
 * Constraints:
 * m == matrix.length
 * n == matrix[i].length
 * 1 <= n, m <= 300
 * -10^9 <= matrix[i][j] <= 10^9
 * All the integers in each row are sorted in ascending order.
 * All the integers in each column are sorted in ascending order.
 * -10^9 <= target <= 10^9
 */
import { print2dArray } from './ArrayUtils.js';

/**
 * 类比成二叉搜索树，从二维数组的右上角开始搜索，如果目标值小于当前值，则往左搜索，如果目标
 * 值大于当前值，则往下搜索，如果找到了目标值返回true
 */
var searchMatrix = function(matrix, target) {
    for (let r = 0, c = matrix[0].length - 1; r <= matrix.length - 1 && c >= 0;) {
        if (target < matrix[r][c]) {
            c--;
        } else if (target > matrix[r][c]) {
            r++;
        } else {
            return true;
        }
    }
    return false;
}

var main = function() {
    let target = -1;
    let matrix = [[ 1, 4, 7,11,15],
                  [ 2, 5, 8,12,19],
                  [ 3, 6, 9,16,22],
                  [10,13,14,17,24],
                  [18,21,23,26,30]];
    print2dArray(matrix);
    let str = '';
    str += target + ':' + searchMatrix(matrix, target) + '\n';
    for (let row of matrix) {
        for (let item of row) {
            str += item + ':' + searchMatrix(matrix, item) + ' ';
        }
        str += '\n';
    }
    console.log(str);
}

main();
