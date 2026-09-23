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
import { print2dArray } from '../arrays/ArrayUtils.js';

var solveNQueens = function(n) {
    let lists = [];
    let cols = new Array(n);
    let diags1 = new Array(2 * n);
    let diags2 = new Array(2 * n);
    let board = new Array(n).fill().map(() => new Array(n).fill('.'));
    solve(lists, board, cols, diags1, diags2, 0);
    return lists;
};

/**
 * 一行一行递归一列一列循环原矩阵，在每个点使用 3 个布尔数组分别判断纵向，正对角线，
 * 反对角线是否满足要求，当到达 n 行时，表明此时矩阵满足全部条件
 */
var solve = function(lists, board, cols, diags1, diags2, r) {
    let n = board.length;
    if (r == n) {
        lists.push(board.map(row => row.join('')));
        return;
    }
    for (let c = 0; c < n; c++) {
        let d1 = r + c;
        let d2 = r - c + n;
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
};

var main = function() {
    let n = 4;
    console.log('n: ' + n + '\n');
    for (let list of solveNQueens(n)) {
        print2dArray(list.map(s => s.split('')));
    }
};

main();
