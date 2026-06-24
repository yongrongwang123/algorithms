/**
 * 52. N-Queens II
 *
 * The n-queens puzzle is the problem of placing n queens on an n x n chessboard
 * such that no two queens attack each other. Given an integer n, return the number
 * of distinct solutions to the n-queens puzzle.
 *
 * Example 1:
 * Input: n = 4
 * Output: 2
 * Explanation: There are two distinct solutions to the 4-queens puzzle as shown.
 *
 * Constraints:
 * 1 <= n <= 9
 */
package backtrack;

public class TotalNQueens {

    public static void main(String[] args) {
        int n = 4;
        System.out.println("n: " + n);
        TotalNQueens t = new TotalNQueens();
        System.out.println("count: " + t.totalNQueens(n));
    }

    public int totalNQueens(int n) {
        boolean[] cols = new boolean[n];
        boolean[] diags1 = new boolean[2 * n];
        boolean[] diags2 = new boolean[2 * n];
        return total(0, cols, diags1, diags2, n, 0);
    }

    /**
     * 一行一行递归一列一列循环原矩阵，在每个点使用 3 个布尔数组分别判断纵向，正对角线，
     * 反对角线是否满足要求，当到达 n 行时，表明满足全部条件的矩阵个数又多了 1 个
     */
    private int total(int count, boolean[] cols, boolean[] diags1, boolean[] diags2,
            int n, int r) {
        if (r == n) {
            return ++count;
        }
        for (int c = 0; c < n; c++) {
            int d1 = r + c;
            int d2 = r - c + n;
            if (!cols[c] && !diags1[d1] && !diags2[d2]) {
                cols[c] = true;
                diags1[d1] = true;
                diags2[d2] = true;
                count = total(count, cols, diags1, diags2, n, r + 1);
                cols[c] = false;
                diags1[d1] = false;
                diags2[d2] = false;
            }
        }
        return count;
    }

}
