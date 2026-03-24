/**
 * Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be 
 * validated according to the following rules:
 * - Each row must contain the digits 1-9 without repetition.
 * - Each column must contain the digits 1-9 without repetition.
 * - Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 * Note:
 * - A Sudoku board (partially filled) could be valid but is not necessarily solvable.
 * - Only the filled cells need to be validated according to the mentioned rules.
 * 
 * Example 1:
 * Input: board = 
 * [["5","3",".",".","7",".",".",".","."]
 * ,["6",".",".","1","9","5",".",".","."]
 * ,[".","9","8",".",".",".",".","6","."]
 * ,["8",".",".",".","6",".",".",".","3"]
 * ,["4",".",".","8",".","3",".",".","1"]
 * ,["7",".",".",".","2",".",".",".","6"]
 * ,[".","6",".",".",".",".","2","8","."]
 * ,[".",".",".","4","1","9",".",".","5"]
 * ,[".",".",".",".","8",".",".","7","9"]]
 * Output: true
 * 
 * Constraints:
 * board.length == 9
 * board[i].length == 9
 * board[i][j] is a digit 1-9 or '.'.
 */

/**
 * 使用三个二维数组分别统计行，列和块对应的子数组中的数字出现次数，如果统计三个数组时，任意
 * 一个数组的某个数字出现次数超过一次，则返回false
 */
var isValidSudoku = function(board) {
    let rowFreq = new Array(9).fill().map(() => new Array(9).fill(0));
    let colFreq = new Array(9).fill().map(() => new Array(9).fill(0));
    let blkFreq = new Array(9).fill().map(() => new Array(9).fill(0));
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] != '.') {
                let num = board[i][j] - '0' - 1;
                let rfreq = ++rowFreq[i][num];
                let cfreq = ++colFreq[j][num];
                let bfreq = ++blkFreq[Math.floor(i / 3) * 3 + Math.floor(j / 3)][num];
                if (rfreq > 1 || cfreq > 1 || bfreq > 1) {
                    return false;
                }
            }
        }
    }

    return true;
}

var prettyMatrix = function(matrix) {
    return matrix.map(row => row.join(',')).join('\n');
}

let board = [["5","3",".",".","7",".",".",".","."],
             ["6",".",".","1","9","5",".",".","."],
             [".","9","8",".",".",".",".","6","."],
             ["8",".",".",".","6",".",".",".","3"],
             ["4",".",".","8",".","3",".",".","1"],
             ["7",".",".",".","2",".",".",".","6"],
             [".","6",".",".",".",".","2","8","."],
             [".",".",".","4","1","9",".",".","5"],
             [".",".",".",".","8",".",".","7","9"]];
console.log('input matrix:\n' + prettyMatrix(board));
console.log('\nvalid sudoku: ' + isValidSudoku(board));
