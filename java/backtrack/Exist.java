/**
 * 79. Word Search
 *
 * Given an m x n grid of characters board and a string word, return true if word
 * exists in the grid. The word can be constructed from letters of sequentially
 * adjacent cells, where adjacent cells are horizontally or vertically neighboring.
 * The same letter cell may not be used more than once.
 * 
 * Example 1:
 * Input: board = [["A","B","C","E"],
 *                 ["S","F","C","S"],
 *                 ["A","D","E","E"]], 
 *        word = "ABCCED"
 * Output: true
 * 
 * Constraints:
 * m == board.length
 * n = board[i].length
 * 1 <= m, n <= 6
 * 1 <= word.length <= 15
 * board and word consists of only lowercase and uppercase English letters.
 */
package backtrack;

import java.util.Arrays;

public class Exist {
    int[] dir = {0, 1, 0, -1, 0};

    public static void main(String[] args) {
        char[][] board = {{'A','B','C','E'},
                          {'S','F','C','S'},
                          {'A','D','E','E'}}; 
        String word = "ABCCED";
        System.out.println("board: " + Arrays.deepToString(board));
        System.out.println("word: " + word);
        Exist e = new Exist();
        System.out.println("existed: " + e.exist(board, word));
    }

    public boolean exist(char[][] board, String word) {
        char[] w = word.toCharArray();
        if (!count(board, w)) {
            return false;
        }
        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[0].length; j++) {
                if (board[i][j] == w[0] && validate(board, i, j, w, 0)) {
                    return true;
                }
            }
        }
        return false;
    }

    /**
     * 用两个数组分别统计字符串和矩阵中字符出现频率，如果某个字符在字符串中比在矩阵中出现
     * 频率更大，则该字符串一定不能成功检索到，如果字符串头部比尾部字符出现频率更大，则反
     * 转字符串
     */
    private boolean count(char[][] board, char[] word) {
        int[] freqs = new int[58];
        int[] freqs2 = new int[58];
        for (char[] row : board) {
            for (char item : row) {
                int i = item - 'A';
                freqs[i]++;
            }
        }
        for (char c : word) {
            int i = c - 'A';
            freqs2[i]++;
            if (freqs2[i] > freqs[i]) {
                return false;
            }
        }
        int start = word[0] - 'A';
        int end = word[word.length - 1] - 'A';
        if (freqs2[start] > freqs2[end]) {
            reverse(word);
        }
        return true;
    }

    /**
     * 从左往右遍历字符串，如果当前字符在矩阵中可以搜索到，则首先将当前字符标记为已
     * 访问过，然后分别从当前字符向上下左右搜索下一个字符，如果下一个字符在矩阵中搜索
     * 不到，则将当前字符重置为未访问过，如果字符串中所有字符都搜索到了，则返回 true
     */
    private boolean validate(char[][] board, int row, int col, char[] word, int start) {
        if (start == word.length) {
            return true;
        }
        if (row < 0 || row >= board.length || col < 0 || col >= board[0].length ||
                board[row][col] != word[start]) {
            return false;
        }
        boolean found = false;
        board[row][col] = '*';
        for (int i = 0; i < dir.length - 1; i++) {
            found |= validate(board, row + dir[i], col + dir[i + 1], word, start + 1);
        }
        board[row][col] = word[start];
        return found;
    }

    private void reverse(char[] word) {
        for (int i = 0, j = word.length - 1; i < j; i++, j--) {
            char temp = word[i];
            word[i] = word[j];
            word[j] = temp;
        }
    }

}
