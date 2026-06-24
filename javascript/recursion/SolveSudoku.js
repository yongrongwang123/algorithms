/**
 * Write a program to solve a Sudoku puzzle by filling the empty cells.
 * A sudoku solution must satisfy all of the following rules:
 * 1. Each of the digits 1-9 must occur exactly once in each row.
 * 2. Each of the digits 1-9 must occur exactly once in each column.
 * 3. Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
 * The '.' character indicates empty cells.
 * 
 * Example 1:
 * Input: board = [["5","3",".",".","7",".",".",".","."],
 *                 ["6",".",".","1","9","5",".",".","."],
 *                 [".","9","8",".",".",".",".","6","."],
 *                 ["8",".",".",".","6",".",".",".","3"],
 *                 ["4",".",".","8",".","3",".",".","1"],
 *                 ["7",".",".",".","2",".",".",".","6"],
 *                 [".","6",".",".",".",".","2","8","."],
 *                 [".",".",".","4","1","9",".",".","5"],
 *                 [".",".",".",".","8",".",".","7","9"]]
 * Output: [["5","3","4","6","7","8","9","1","2"],
 *          ["6","7","2","1","9","5","3","4","8"],
 *          ["1","9","8","3","4","2","5","6","7"],
 *          ["8","5","9","7","6","1","4","2","3"],
 *          ["4","2","6","8","5","3","7","9","1"],
 *          ["7","1","3","9","2","4","8","5","6"],
 *          ["9","6","1","5","3","7","2","8","4"],
 *          ["2","8","7","4","1","9","6","3","5"],
 *          ["3","4","5","2","8","6","1","7","9"]]
 * Explanation: The input board is shown above and the only valid solution is shown below:
 * 
 * Constraints:
 * board.length == 9
 * board[i].length == 9
 * board[i][j] is a digit or '.'.
 * It is guaranteed that the input board has only one solution.
 */
import { print2dArray } from '../arrays/ArrayUtils.js';

var solveSudoku = function(board) {
    solve(board, 0, 0);
}

/**
 * 先列后行地递归遍历矩阵，在每个点放入1到9之间的数字，需要满足一行，一列，
 * 一个子矩阵范围内没有出现重复数字，找到1个答案就立即回溯
 */
var solve = function(board, row, col) {
    if (row == 9) {
        return true;
    }
    if (col == 9) {
        return solve(board, row + 1, 0);
    }
    if (board[row][col] != '.') {
        return solve(board, row, col + 1);
    }
    for (let i = 1; i <= 9; i++) {
        let c = '' + i;
        if (isValid(board, row, col, c)) {
            board[row][col] = c;
            if (solve(board, row, col + 1)) {
                return true;
            }
            board[row][col] = '.';
        }
    }
    return false;
}

var isValid = function(board, row, col, c) {
    let r1 = parseInt(row / 3) * 3;
    let c1 = parseInt(col / 3) * 3;
    for (let i = 0; i < 9; i++) {
        if (board[row][i] == c || board[i][col] == c || board[r1 + parseInt(i / 3)][c1 + i % 3] == c) {
            return false;
        }
    }
    return true;
}

var main = function() {
    let board = [["5","3",".",".","7",".",".",".","."],
                 ["6",".",".","1","9","5",".",".","."],
                 [".","9","8",".",".",".",".","6","."],
                 ["8",".",".",".","6",".",".",".","3"],
                 ["4",".",".","8",".","3",".",".","1"],
                 ["7",".",".",".","2",".",".",".","6"],
                 [".","6",".",".",".",".","2","8","."],
                 [".",".",".","4","1","9",".",".","5"],
                 [".",".",".",".","8",".",".","7","9"]];
    print2dArray(board);
    solveSudoku(board);
    print2dArray(board);
}

main();
