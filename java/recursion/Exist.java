/**
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

public class Exist {

    public static void main(String[] args) {
        char[][] board = {{'A','B','C','E'},
                          {'S','F','C','S'},
                          {'A','D','E','E'}}; 
        String word = "ABCCED";
        Exist e = new Exist();
        System.out.println("existed: " + e.exist(board, word));
    }

    public boolean exist(char[][] board, String word) {
        if (!checkFreq(board, word)) {
            return false;
        }
        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[0].length; j++) {
                if (helper(board, i, j, word, 0)) {
                    return true;
                }
            }
        }
        return false;
    }

    /**
     * 用一个数组统计字符串和矩阵中字符出现频率，如果某个字符在字符串中比在矩阵中出现
     * 频率更大，则该字符串一定不能成功检索到
     */
    private boolean checkFreq(char[][] board, String word) {
        int[] freq = new int[58];
        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[0].length; j++) {
                freq[board[i][j] - 'A']++;
            }
        }
        for (char c : word.toCharArray()) {
            freq[c - 'A']--;
            if (freq[c - 'A'] < 0) {
                return false;
            }
        }
        return true;
    }

    /**
     * 从左往右遍历字符串，如果当前字符在矩阵中可以搜索到，则首先将当前字符标记为已
     * 访问过，然后分别从当前字符向上下左右搜索下一个字符，如果下一个字符在矩阵中搜索
     * 不到，则将当前字符重置为未访问过，如果字符串中所有字符都搜索到了，则返回 true
     */
    private boolean helper(char[][] board, int row, int col, String word, int start) {
        if (start == word.length()) {
            return true;
        }
        char c = word.charAt(start);
        if (row < 0 || col < 0 || row >= board.length || col >= board[0].length ||
                board[row][col] != c) {
            return false;
        }
        board[row][col] = '*';
        int[] dir = {0, 1, 0, -1, 0};
        for (int i = 0; i < dir.length - 1; i++) {
            if (helper(board, row + dir[i], col + dir[i + 1], word, start + 1)) {
                return true;
            }
        }
        board[row][col] = c;
        return false;
    }

}
