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

package arrays;

import arrays.ArrayUtils;

public class SetZeroes {

    public static void main(String[] args) {
        int[][] matrix = {{1,1,1},
                          {1,0,1},
                          {1,1,1}};
        ArrayUtils a = new ArrayUtils();
        a.print2dArray(matrix);
        SetZeroes s = new SetZeroes();
        s.setZeroes(matrix);
        a.print2dArray(matrix);
    }

    /**
     * 分为两步，第一步从左上角往右下角搜索0，第二步从右下角往左上角设置0，在第一步
     * 中，如果某一行包含0，则将该行的第一个元素设置为0，如果某一列包含0，则将该列的
     * 第一个元素设置为0，因为第0行和第0列要共用左上角元素，所以左上角元素给第0行用，
     * 创建一个变量给第0列用
     */
    public void setZeroes(int[][] matrix) {
        int m = matrix.length;
        int n = matrix[0].length;
        int c0 = 1;
        for (int i = 0; i < m; i++) {
            c0 = (matrix[i][0] != 0 ? c0 : 0);
            for (int j = 1; j < n; j++) {
                if (matrix[i][j] == 0) {
                    matrix[i][0] = 0;
                    matrix[0][j] = 0;
                }
            }
        }
        for (int i = m - 1; i >= 0; i--) {
            for (int j = n - 1; j >= 1; j--) {
                if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                    matrix[i][j] = 0;
                }
            }
            matrix[i][0] = (c0 != 0 ? matrix[i][0] : 0);
        }
    }

}
