/**
 * 509. Fibonacci Number
 *
 * The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci
 * sequence, such that each number is the sum of the two preceding ones, starting
 * from 0 and 1. That is,
 * F(0) = 0, F(1) = 1
 * F(n) = F(n - 1) + F(n - 2), for n > 1.
 * Given n, calculate F(n).
 *
 * Example 1:
 * Input: n = 2
 * Output: 1
 * Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
 *
 * Constraints:
 * 0 <= n <= 30
 */

package dynamicProgramming;

public class Fib {

    public static void main(String[] args) {
        int n = 2;
        System.out.println("n: " + n);
        Fib f = new Fib();
        System.out.println("fib: " + f.fib(n));
    }

    /**
     * 使用两个变量pre和cur存储中间计算的数值，先将pre和cur存储为0和1，然后不断向前迭代计算
     */
    public int fib(int n) {
        int pre = 1;
        int cur = 0;
        for (; n >= 1; n--) {
            int sum = pre + cur;
            pre = cur;
            cur = sum;
        }
        return cur;
    }

}
