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

let dir = [0, 1, 0, -1, 0];

var exist = function(board, word) {
    let w = [...word];
    if (!count(board, w)) {
        return false;
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
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
var count = function(board, word) {
    let a = 'A'.charCodeAt(0);
    let freqs = new Array(58).fill(0);
    let freqs2 = new Array(58).fill(0);
    for (let row of board) {
        for (let item of row) {
            let i = item.charCodeAt(0) - a;
            freqs[i]++;
        }
    }
    for (let c of word) {
        let i = c.charCodeAt(0) - a;
        freqs2[i]++;
        if (freqs2[i] > freqs[i]) {
            return false;
        }
    }
    let start = word[0] - a;
    let end = word.at(-1) - a;
    if (freqs2[start] > freqs2[end]) {
        word.reverse();
    }
    return true;
}

/**
 * 从左往右遍历字符串，如果当前字符在矩阵中可以搜索到，则首先将当前字符标记为已
 * 访问过，然后分别从当前字符向上下左右搜索下一个字符，如果下一个字符在矩阵中搜索
 * 不到，则将当前字符重置为未访问过，如果字符串中所有字符都搜索到了，则返回 true
 */
var validate = function(board, row, col, word, start) {
    if (start == word.length) {
        return true;
    }
    if (row < 0 || row >= board.length || col < 0 || col >= board[0].length ||
            board[row][col] != word[start]) {
        return false;
    }
    let found = false;
    board[row][col] = '*';
    for (let i = 0; i < dir.length - 1; i++) {
        found ||= validate(board, row + dir[i], col + dir[i + 1], word, start + 1);
    }
    board[row][col] = word[start];
    return found;
}

var main = function() {
    let board = [["A","B","C","E"],
                 ["S","F","C","S"],
                 ["A","D","E","E"]];
    let word = 'ABCCED';
    console.log('board' + JSON.stringify(board));
    console.log('word: ' + word);
    console.log('existed: ' + exist(board, word));
}

main();
