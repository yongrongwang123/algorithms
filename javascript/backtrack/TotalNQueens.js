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

var totalNQueens = function(n) {
    let cols = new Array(n).fill(false);
    let diags1 = new Array(2 * n).fill(false);
    let diags2 = new Array(2 * n).fill(false);
    return total(0, cols, diags1, diags2, n, 0);
}

/**
 * 一行一行递归一列一列循环原矩阵，在每个点使用 3 个布尔数组分别判断纵向，正对角线，
 * 反对角线是否满足要求，当到达 n 行时，表明满足全部条件的矩阵个数又多了 1 个
 */
var total = function(count, cols, diags1, diags2, n, r) {
    if (r == n) {
        return ++count;
    }
    for (let c = 0; c < n; c++) {
        let d1 = r + c;
        let d2 = r - c + n;
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

var main = function() {
    let n = 4;
    console.log('n: ' + n);
    console.log('count: ' + totalNQueens(n));
}

main();
