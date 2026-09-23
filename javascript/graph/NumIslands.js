/**
 * 200. Number of Islands
 *
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's 
 * (water), return the number of islands. An island is surrounded by water and is 
 * formed by connecting adjacent lands horizontally or vertically. You may assume 
 * all four edges of the grid are all surrounded by water.
 * 
 * Example 1:
 * Input: grid = [
 *   ["1","1","1","1","0"],
 *   ["1","1","0","1","0"],
 *   ["1","1","0","0","0"],
 *   ["0","0","0","0","0"]
 * ]
 * Output: 1
 * 
 * Constraints:
 * m == grid.length
 * n == grid[i].length
 * 1 <= m, n <= 300
 * grid[i][j] is '0' or '1'.
 */
import { print2dArray } from '../arrays/ArrayUtils.js';

let dir = [0, 1, 0, -1, 0];

/**
 * 从左往右从上往下遍历数组，当遇到一个为'1'的元素的时候就采用深度优先的搜索方式标记遍历过的元素
 */
var numIslands = function(grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == '1') {
                mark(grid, i, j);
                count++;
            }
        }
    }
    return count;
}

/**
 * 采用深度优先的搜索方式遍历数组，每次遇到一个为'1'的元素就将该元素改为'0'来标记已经遍历过的
 * 元素，然后再依次递归遍历该元素的上下左右四个方向紧挨着的元素
 */
var mark = function(grid, row, col) {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length ||
            grid[row][col] != '1') {
        return;
    }
    grid[row][col] = '0';
    for (let i = 0; i < dir.length - 1; i++) {
        mark(grid, row + dir[i], col + dir[i + 1]);
    }
}

var main = function() {
    let grid = [["1","1","1","1","0"],
                ["1","1","0","1","0"],
                ["1","1","0","0","0"],
                ["0","0","0","0","0"]];
    print2dArray(grid);
    console.log('islands: ' + numIslands(grid));
}

main();
