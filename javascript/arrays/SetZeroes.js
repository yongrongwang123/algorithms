/**
 * Given an m x n integer matrix matrix, if an element is 0, set its entire row
 * and column to 0's. You must do it in place.
 * 
 * Example 1:
 * Input: matrix = [[1,1,1],
 *                  [1,0,1],
 *                  [1,1,1]]
 * Output: [[1,0,1],
 *          [0,0,0],
 *          [1,0,1]]
 * 
 * Constraints:
 * m == matrix.length
 * n == matrix[0].length
 * 1 <= m, n <= 200
 * -2^31 <= matrix[i][j] <= 2^31 - 1
 */
import { print2dArray } from '../arrays/ArrayUtils.js';

/**
 * 分为两步，第一步从左上角往右下角搜索0，第二步从右下角往左上角设置0，在第一步
 * 中，如果某一行包含0，则将该行的第一个元素设置为0，如果某一列包含0，则将该列的
 * 第一个元素设置为0，因为第0行和第0列要共用左上角元素，所以左上角元素给第0行用，
 * 创建一个变量给第0列用
 */
var setZeroes = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let c0 = 1;
    for (let i = 0; i < m; i++) {
        c0 = (matrix[i][0] ? c0 : 0);
        for (let j = 1; j < n; j++) {
            if (!matrix[i][j]) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 1; j--) {
            if (!matrix[i][0] || !matrix[0][j]) {
                matrix[i][j] = 0;
            }
        }
        matrix[i][0] = (c0 ? matrix[i][0] : 0);
    }
}

var main = function() {
    let matrix = [[1,1,1],
                  [1,0,1],
                  [1,1,1]];
    print2dArray(matrix);
    setZeroes(matrix);
    print2dArray(matrix);
}

main();
