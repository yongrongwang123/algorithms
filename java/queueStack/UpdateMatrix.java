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

package queueStack;

import java.util.LinkedList;
import java.util.Queue;

import arrays.ArrayUtils;

public class UpdateMatrix {

    public static void main(String[] args) {
        int[][] mat = {{0,0,0},{0,1,0},{1,1,1}};
        UpdateMatrix um = new UpdateMatrix();
        ArrayUtils u = new ArrayUtils();
        u.printMat(mat);
        u.printMat(um.updateMatrix(mat));
    }
    
    /**
     * BFS：使用队列来保证处理的顺序是从0出发由近及远进行处理。先将所有为0的元素的索引压入队列，
     * 并且把所有的非0元素设置为-1来打上标记，之后每次弹出一个元素的索引就按照上下左右四个方向
     * 分别进行处理，如果该方向的索引合法且元素未被访问过，则将当前元素值设置为弹出来的索引所在的
     * 元素值加一，然后将当前索引压入队列
     */
    public int[][] updateMatrix(int[][] mat) {
        int[] dir = {0, 1, 0, -1, 0};
        int m = mat.length;
        int n = mat[0].length;
        Queue<int[]> queue = new LinkedList<int[]>();
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (mat[i][j] == 0) {
                    queue.offer(new int[]{i, j});
                } else {
                    mat[i][j] = -1; 
                }
            }
        }
        while (!queue.isEmpty()) {
            int[] top = queue.poll();
            int r0 = top[0];
            int c0 = top[1];
            for (int i = 0; i < dir.length - 1; i++) {
                int r1 = r0 + dir[i];
                int c1 = c0 + dir[i + 1];
                if (r1 >= 0 && r1 < m && c1 >= 0 && c1 < n && mat[r1][c1] == -1) {
                    mat[r1][c1] = mat[r0][c0] + 1;
                    queue.offer(new int[]{r1, c1});
                }
            }
        }
        return mat;
    }
    
}
