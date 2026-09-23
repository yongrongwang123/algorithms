/**
 * 70. Climbing Stairs
 *
 * You are climbing a staircase. It takes n steps to reach the top. Each time you
 * can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 *
 * Example 1:
 * Input: n = 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 *
 * Constraints:
 * 1 <= n <= 45
 */

package dynamicProgramming;

public class ClimbStairs {

    public static void main(String[] args) {
        int n = 2;
        System.out.println("n: " + n);
        ClimbStairs c = new ClimbStairs();
        System.out.println("ways: " + c.climbStairs(n));
    }

    /**
     * 这是一个斐波那契数列问题，起始值为1和2，理由是：为了爬上n级台阶，可以由两种方法达到，一
     * 种是从n-1级台阶向上爬一级，一种是从n-2级台阶向上爬两级，且这两种方法是爬上n级台阶的必要
     * 且充分条件，因为这两种方法既包含了达到n级台阶的所有情况，而且它们之间没有重叠
     */
    public int climbStairs(int n) {
        int pre = 1;
        int cur = 1;
        for (; n >= 2; n--) {
            int sum = pre + cur;
            pre = cur;
            cur = sum;
        }
        return cur;
    }

}
