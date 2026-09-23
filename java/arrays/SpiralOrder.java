/**
 * 54. Spiral Matrix
 *
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 *
 * Example 1:
 * Input: matrix = [[1,2,3],
 *                  [4,5,6],
 *                  [7,8,9]]
 * Output: [1,2,3,6,9,8,7,4,5]
 *
 * Constraints:
 * m == matrix.length
 * n == matrix[i].length
 * 1 <= m, n <= 10
 * -100 <= matrix[i][j] <= 100
 */
package arrays;

import java.util.ArrayList;
import java.util.List;

public class SpiralOrder {

    public static void main(String[] args) {
        int[][] matrix = {{1,2,3},
                          {4,5,6},
                          {7,8,9}};
        ArrayUtils a = new ArrayUtils();
        a.print2dArray(matrix);
        SpiralOrder s = new SpiralOrder();
        System.out.println("arr: " + s.spiralOrder(matrix));
    }

    /**
     * [0][0] [0][1] [0][2] [1][2] [2][2] [2][1] [2][0] [1][0] [1][1]
     * 先行不变从左往右滑动且结束后增大起始行，然后列不变从上往下滑动且结束后减小末尾列，再行不
     * 变从右往左滑动且结束后减小末尾行，最后列不变从下往上滑动且结束后增大起始列，需要注意为了
     * 防止重复，在向左滑动时候需要检测起始行小于等于末尾行，在向上滑动时候需要检测起始列小于等
     * 于末尾列
     */
    public List<Integer> spiralOrder(int[][] matrix) {
        int m = matrix.length;
        int n = matrix[0].length;
        List<Integer> list = new ArrayList<>();
        int top = 0;
        int bottom = m - 1;
        int left = 0;
        int right = n - 1;
        int dir = 0;
        while (left <= right && top <= bottom) {
            switch (dir) {
                case 0:
                    for (int j = left; j <= right; j++) {
                        list.add(matrix[top][j]);
                    }
                    top++;
                    break;
                case 1:
                    for (int i = top; i <= bottom; i++) {
                        list.add(matrix[i][right]);
                    }
                    right--;
                    break;
                case 2:
                    for (int j = right; j >= left; j--) {
                        list.add(matrix[bottom][j]);
                    }
                    bottom--;
                    break;
                case 3:
                    for (int i = bottom; i >= top; i--) {
                        list.add(matrix[i][left]);
                    }
                    left++;
                    break;
            }
            dir = (dir + 1) % 4;
        }
        return list;
    }

}
