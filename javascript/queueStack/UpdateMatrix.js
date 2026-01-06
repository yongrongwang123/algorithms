/**
 * Given an m x n binary matrix mat, return the distance of the nearest 0 for each 
 * cell. The distance between two adjacent cells is 1.
 * 
 * Example 1:
 * Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
 * Output: [[0,0,0],[0,1,0],[0,0,0]]
 * 
 * Constraints:
 * m == mat.length
 * n == mat[i].length
 * 1 <= m, n <= 10^4
 * 1 <= m * n <= 10^4
 * mat[i][j] is either 0 or 1.
 * There is at least one 0 in mat.
 */

/**
 * BFS：使用队列来保证处理的顺序是从0出发由近及远进行处理。先将所有为0的元素的索引压入队列，
 * 并且把所有的非0元素设置为-1来打上标记，之后每次弹出一个元素的索引就按照上下左右四个方向
 * 分别进行处理，如果该方向的索引合法且元素未被访问过，则将当前元素值设置为弹出来的索引所在的
 * 元素值加一，然后将当前索引压入队列
 */
var updateMatrix = function(mat) {
    let dir = [0, 1, 0, -1, 0];
    let m = mat.length;
    let n = mat[0].length;
    let queue = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] == 0) {
                queue.push([i, j]);
            } else {
                mat[i][j] = -1;
            }
        }
    }
    while (queue.length != 0) {
        let top = queue.shift();
        let r0 = top[0];
        let c0 = top[1];
        for (let i = 0; i < dir.length - 1; i++) {
            let r1 = r0 + dir[i];
            let c1 = c0 + dir[i + 1];
            if (r1 >= 0 && r1 < m && c1 >= 0 && c1 < n && mat[r1][c1] == -1) {
                mat[r1][c1] = mat[r0][c0] + 1;
                queue.push([r1, c1]);
            }
        }
    }

    return mat;
}

var prettyMatrix = function(matrix) {
    return matrix.map(row => row.join(',')).join('\n');
}

let mat = [[0,0,0],[0,1,0],[0,0,0]];
console.log('input matrix:\n' + prettyMatrix(mat));
console.log('updated matrix:\n' + prettyMatrix(updateMatrix(mat)));
