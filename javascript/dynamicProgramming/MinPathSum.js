/**
 * 64. Minimum Path Sum
 *
 * Given a m x n grid filled with non-negative numbers, find a path from top left
 * to bottom right, which minimizes the sum of all numbers along its path. Note:
 * You can only move either down or right at any point in time.
 * 
 * Example 1:
 * Input: grid = [[1,3,1],
 *                [1,5,1],
 *                [4,2,1]]
 * Output: 7
 * Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
 * 
 * Constraints:
 * m == grid.length
 * n == grid[i].length
 * 1 <= m, n <= 200
 * 0 <= grid[i][j] <= 200
 */
import { print2dArray } from '../arrays/ArrayUtils.js';

/**
 * 用动态规划，每一格只能由左边或者上边格子到达，所以到达每一格的路径之和等于当前元素
 * 值加上左边和上边路径之和中的较小值，同时第一行和第一列都只有一条路径可以到达，为了
 * 减少空间，只用一行来保存路径之和
 */
var minPathSum = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let dp = new Array(n);
    dp[0] = grid[0][0];
    for (let j = 1; j < n; j++) {
        dp[j] = dp[j - 1] + grid[0][j];
    }
    for (let i = 1; i < m; i++) {
        dp[0] += grid[i][0];
        for (let j = 1; j < n; j++) {
            let min = (dp[j - 1] < dp[j] ? dp[j - 1] : dp[j]);
            dp[j] = grid[i][j] + min;
        }
    }
    return dp[n - 1];
};

var main = function() {
    let grid = [[1,3,1],
                [1,5,1],
                [4,2,1]];
    print2dArray(grid);
    console.log('sum: ' + minPathSum(grid));
};

main();
