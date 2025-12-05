/**
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 *
 * Example 1:
 * Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * Output: [1,2,3,6,9,8,7,4,5]
 *
 * Constraints:
 * m == matrix.length
 * n == matrix[i].length
 * 1 <= m, n <= 10
 * -100 <= matrix[i][j] <= 100
 */

/**
 * [0][0] [0][1] [0][2] [1][2] [2][2] [2][1] [2][0] [1][0] [1][1]
 * 先行不变从左往右滑动且结束后增大起始行，然后列不变从上往下滑动且结束后减小末尾列，再行不
 * 变从右往左滑动且结束后减小末尾行，最后列不变从下往上滑动且结束后增大起始列，需要注意为了
 * 防止重复，在向左滑动时候需要检测起始行小于等于末尾行，在向上滑动时候需要检测起始列小于等
 * 于末尾列
 */
var spiralOrder = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let nums = [];
    let rowBegin = 0;
    let rowEnd = m - 1;
    let colBegin = 0;
    let colEnd = n - 1;

    while (nums.length < m * n) {
        for (let j = colBegin; j <= colEnd; j++)
            nums.push(matrix[rowBegin][j]);
        rowBegin++;
        for (let i = rowBegin; i <= rowEnd; i++)
            nums.push(matrix[i][colEnd]);
        colEnd--;
        if (rowBegin <= rowEnd) {
            for (let j = colEnd; j >= colBegin; j--)
                nums.push(matrix[rowEnd][j]);
        }
        rowEnd--;
        if (colBegin <= colEnd) {
            for (let i = rowEnd; i >= rowBegin; i--)
                nums.push(matrix[i][colBegin]);
        }
        colBegin++;
    }

    return nums;
}

let matrix = [[1,2,3],[4,5,6],[7,8,9]];
console.log('input array: ' + matrix);
console.log('output array: ' + spiralOrder(matrix));
