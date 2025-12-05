/**
 * You are given an n x n 2D matrix representing an image, rotate the image by 90
 * degrees (clockwise). You have to rotate the image in-place, which means you have
 * to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and
 * do the rotation.
 *
 * Example 1:
 * Input: matrix = [[1,2,3],
 *                  [4,5,6],
 *                  [7,8,9]]
 * Output: [[7,4,1],
 *          [8,5,2],
 *          [9,6,3]]
 *
 * Constraints:
 * n == matrix.length == matrix[i].length
 * 1 <= n <= 20
 * -1000 <= matrix[i][j] <= 1000
 */

package arrays;

public class Rotate2 {

    public static void main(String[] args) {
        int[][] matrix = {{1,2,3},
                          {4,5,6},
                          {7,8,9}};
        ArrayUtils a = new ArrayUtils();
        a.print2dArray(matrix);
        Rotate2 r = new Rotate2();
        r.rotate(matrix);
        a.print2dArray(matrix);
    }

    /**
     * 顺时针旋转90度分为两步，第一步以水平线翻转上下，第二步以对角线翻转右上和左下
     * 1 2 3      7 8 9      7 4 1
     * 4 5 6  =>  4 5 6  =>  8 5 2
     * 7 8 9      1 2 3      9 6 3
     */
    public void rotate(int[][] matrix) {
        int n = matrix.length;
        for (int i = 0, j = n - 1; i < j; i++, j--) {
            int[] temp = matrix[i];
            matrix[i] = matrix[j];
            matrix[j] = temp;
        }
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                int temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }
    }

}
