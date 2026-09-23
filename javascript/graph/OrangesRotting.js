/**
 * 994. Rotting Oranges
 *
 * You are given an m x n grid where each cell can have one of three values:
 * - 0 representing an empty cell,
 * - 1 representing a fresh orange, or
 * - 2 representing a rotten orange.
 * Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange
 * becomes rotten. Return the minimum number of minutes that must elapse until no
 * cell has a fresh orange. If this is impossible, return -1.
 * 
 * Example 1:
 * Input: grid = [[2,1,1],
 *                [1,1,0],
 *                [0,1,1]]
 * Output: 4
 * 
 * Constraints:
 * m == grid.length
 * n == grid[i].length
 * 1 <= m, n <= 10
 * grid[i][j] is 0, 1, or 2.
 */
import { print2dArray } from '../arrays/ArrayUtils.js';

let m = 0;
let n = 0;
let count = 0;

/**
 * 使用队列来保证处理的顺序是从2出发由近及远进行处理，先将所有为2的元素的索引压入队
 * 列，并且统计所有为1的元素个数，之后一次处理队列一层元素索引，处理完一层就将层数加
 * 一，每次弹出一个索引，就按照上下左右四个方向分别进行处理，如果该方向的索引合法且
 * 元素为1，则将当前元素修改为2，然后将元素为1的个数减一，再将当前索引压入队列，最后
 * 如果所有为1的元素都修改为2，则返回队列中索引的层数
 */
var orangesRotting = function(grid) {
    let depth = -1;
    m = grid.length;
    n = grid[0].length;
    let dir = [0, 1, 0, -1, 0];
    let queue = prepare(grid);
    if (!count) {
        return 0;
    }
    while (queue.length) {
        for (let i = queue.length; i > 0; i--) {
            let top = queue.shift();
            let r0 = top[0];
            let c0 = top[1];
            for (let j = 0; j < dir.length - 1; j++) {
                let r1 = r0 + dir[j];
                let c1 = c0 + dir[j + 1];
                if (r1 >= 0 && r1 < m && c1 >= 0 && c1 < n && grid[r1][c1] == 1) {
                    grid[r1][c1] = 2;
                    count--;
                    queue.push([r1, c1]);
                }
            }
        }
        depth++;
    }
    return !count ? depth : -1;
};

var prepare = function(grid) {
    let queue = [];
    count = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 2) {
                queue.push([i, j]);
            } else if (grid[i][j] == 1) {
                count++;
            }
        }
    }
    return queue;
};

var main = function() {
    let grid = [[2,1,1],
                [1,1,0],
                [0,1,1]];
    print2dArray(grid);
    console.log('time: ' + orangesRotting(grid));
};

main();
