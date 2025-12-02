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

package arrays;

public class SearchMatrix {

    public static void main(String[] args) {
        SearchMatrix s = new SearchMatrix();
        int[][] matrix1 = {{-5}};
        int target = -5;
        boolean b = s.searchMatrix(matrix1, target);
        System.out.println(target + ": " + b);
        int[][] matrix = {{ 1, 4, 7,11,15},
                          { 2, 5, 8,12,19},
                          { 3, 6, 9,16,22},
                          {10,13,14,17,24},
                          {18,21,23,26,30}};
        ArrayUtils a = new ArrayUtils();
        a.print2dArray(matrix);
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[0].length; j++) {
                target = matrix[i][j];
                b = s.searchMatrix(matrix, target);
                System.out.printf("%2d: " + b + " ",  target);
            }
            System.out.println();
        }
        target = -5;
        b = s.searchMatrix(matrix, target);
        System.out.println(target + ": " + b);
    }

    /**
     * 类比成二叉搜索树，从二维数组的右上角开始搜索，如果目标值小于当前值，则往左搜索，如果目标
     * 值大于当前值，则往下搜索，如果找到了目标值返回true
     */
    public boolean searchMatrix(int[][] matrix, int target) {
        for (int r = 0, c = matrix[0].length - 1; r <= matrix.length - 1 && c >= 0;) {
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

}
