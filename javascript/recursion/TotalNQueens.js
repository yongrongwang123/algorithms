/**
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

var totalNQueens = function(n) {
    let cols = new Array(n).fill(false);
    let diags1 = new Array(2 * n).fill(false);
    let diags2 = new Array(2 * n).fill(false);
    return helper(0, cols, diags1, diags2, n, 0);
}

/**
 * 一行一行递归一列一列循环原矩阵，在每个点使用 3 个布尔数组分别判断横纵向，正对角线，
 * 反对角线是否满足要求，当到达 n 行时，表明满足全部条件的矩阵个数又多了 1 个
 */
var helper = function(row, cols, diags1, diags2, n, count) {
    if (row == n) {
        return ++count;
    }
    for (let col = 0; col < n; col++) {
        let diag1 = col - row + n;
        let diag2 = col + row;
        if (cols[col] || diags1[diag1] || diags2[diag2]) {
            continue;
        }
        cols[col] = true;
        diags1[diag1] = true;
        diags2[diag2] = true;
        count = helper(row + 1, cols, diags1, diags2, n, count);
        cols[col] = false;
        diags1[diag1] = false;
        diags2[diag2] = false;
    }
    return count;
}

var main = function() {
    let n = 4;
    let count = totalNQueens(n);
    console.log('n: ' + n + ', count: ' + count);
}

main();
