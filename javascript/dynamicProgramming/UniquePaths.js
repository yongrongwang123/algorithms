/**
 * There is a robot on an m x n grid. The robot is initially located at the top-left
 * corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner
 * (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any
 * point in time. Given the two integers m and n, return the number of possible
 * unique paths that the robot can take to reach the bottom-right corner. The test
 * cases are generated so that the answer will be less than or equal to 2 * 10^9.
 * 
 * Example 1:
 * Input: m = 3, n = 7
 * Output: 28
 * 
 * Constraints:
 * 1 <= m, n <= 100
 */

/**
 * 用动态规划，每一格只能由左边或者上边格子到达，所以到达每一格的路径个数等于左边
 * 和上边路径个数之和，同时第一行和第一列都只有一条路径可以到达，为了减少空间，
 * 只用一行来保存路径个数
 */
var uniquePaths = function(m, n) {
    let dp = new Array(n).fill(1);
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[j] += dp[j - 1];
        }
    }
    return dp[n - 1];
}

var main = function() {
    let m = 3;
    let n = 7;
    console.log('m: ' + m + ', n: ' + n);
    console.log('paths: ' + uniquePaths(m, n));
}

main();
