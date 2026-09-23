/**
 * 51. N-Queens
 *
 * The n-queens puzzle is the problem of placing n queens on an n x n chessboard
 * such that no two queens attack each other. Given an integer n, return all distinct
 * solutions to the n-queens puzzle. You may return the answer in any order. Each
 * solution contains a distinct board configuration of the n-queens' placement, where
 * 'Q' and '.' both indicate a queen and an empty space, respectively.
 * 
 * Example 1:
 * Input: n = 4
 * Output: [[".Q..",
 *           "...Q",
 *           "Q...",
 *           "..Q."],
 *          ["..Q.",
 *           "Q...",
 *           "...Q",
 *           ".Q.."]]
 * Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above
 * 
 * Constraints:
 * 1 <= n <= 9
 */
package backtrack;

import java.util.ArrayList;
import java.util.List;
import java.util.Arrays;
import arrays.ArrayUtils;

public class SolveNQueens {
    public static void main(String[] args) {
        int n = 4;
        System.out.println("n: " + n + "\n");
        ArrayUtils a = new ArrayUtils();
        SolveNQueens s = new SolveNQueens();
        for (List<String> list : s.solveNQueens(n)) {
            a.print2dArray2(s.toArray(list));
        }
    }

    private char[][] toArray(List<String> list) {
        char[][] board = new char[list.size()][];
        for (int i = 0; i < list.size(); i++) {
            board[i] = list.get(i).toCharArray();
        }
        return board;
    }

    public List<List<String>> solveNQueens(int n) {
        List<List<String>> lists = new ArrayList<>();
        boolean[] cols = new boolean[n];
        boolean[] diags1 = new boolean[2 * n];
        boolean[] diags2 = new boolean[2 * n];
        char[][] board = new char[n][n];
        for (int i = 0; i < n; i++) {
            Arrays.fill(board[i], '.');
        }
        solve(lists, board, cols, diags1, diags2, 0);
        return lists;
    }

    /**
     * 一行一行递归一列一列循环原矩阵，在每个点使用 3 个布尔数组分别判断纵向，正对角线，
     * 反对角线是否满足要求，当到达 n 行时，表明此时矩阵满足全部条件
     */
    private void solve(List<List<String>> lists, char[][] board, boolean[] cols,
            boolean[] diags1, boolean[] diags2, int r) {
        int n = board.length;
        if (r == n) {
            lists.add(toList(board));
            return;
        }
        for (int c = 0; c < n; c++) {
            int d1 = r + c;
            int d2 = r - c + n;
            if (!cols[c] && !diags1[d1] && !diags2[d2]) {
                board[r][c] = 'Q';
                cols[c] = true;
                diags1[d1] = true;
                diags2[d2] = true;
                solve(lists, board, cols, diags1, diags2, r + 1);
                board[r][c] = '.';
                cols[c] = false;
                diags1[d1] = false;
                diags2[d2] = false;
            }
        }
    }

    private List<String> toList(char[][] board) {
        List<String> list = new ArrayList<>();
        for (char[] row : board) {
            list.add(new String(row));
        }
        return list;
    }
}
