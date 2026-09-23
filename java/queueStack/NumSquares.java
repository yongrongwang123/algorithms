/**
 * 279. Perfect Squares
 *
 * Given an integer n, return the least number of perfect square numbers that sum
 * to n.A perfect square is an integer that is the square of an integer; in other
 * words, it is the product of some integer with itself. For example, 1, 4, 9, and
 * 16 are perfect squares while 3 and 11 are not.
 *
 * Example 1:
 * Input: n = 12
 * Output: 3
 * Explanation: 12 = 4 + 4 + 4.
 *
 * Constraints:
 * 1 <= n <= 10^4
 */

package queueStack;

import java.util.HashSet;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Set;

public class NumSquares {

    public static void main(String[] args) {
        int n = 12;
        System.out.println("n: " + n);
        NumSquares ns = new NumSquares();
        System.out.println("depth: " + ns.numSquares(n));
    }

    /**
     * 先将数字0压入队列，之后每弹出一个数字就将该数字和一个完全平方数相加，如果两数之和不大于
     * 目标值且没有访问过就将该数字压入队列，直到最后等于目标值则返回查找的深度
     */
    public int numSquares(int n) {
        Queue<Integer> queue = new LinkedList<>();
        boolean[] visited = new boolean[n + 1];
        queue.offer(0);
        visited[0] = true;
        int depth = 1;
        while (!queue.isEmpty()) {
            for (int i = queue.size(); i > 0; i--) {
                int pre = queue.poll();
                for (int j = 1, cur = pre + 1; cur <= n; j++, cur = pre + j * j) {
                    if (cur == n) {
                        return depth;
                    }
                    if (!visited[cur]) {
                        queue.offer(cur);
                        visited[cur] = true;
                    }
                }
            }
            depth++;
        }
        return depth;
    }

}
