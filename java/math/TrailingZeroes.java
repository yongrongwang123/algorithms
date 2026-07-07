/**
 * Given an integer n, return the number of trailing zeroes in n!.
 * Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.
 * 
 * Example 1:
 * Input: n = 3
 * Output: 0
 * Explanation: 3! = 6, no trailing zero.
 * 
 * Constraints:
 * 0 <= n <= 10^4
 */

package math;

public class TrailingZeroes {

    public static void main(String[] args) {
        int n = 3;
        System.out.println("n: " + n);
        TrailingZeroes t = new TrailingZeroes();
        System.out.println("zeroes: " + t.trailingZeroes(n));
    }

    /**
     * 阶乘结果尾部的0来自10，10来自质数2和5相乘，因为2的个数多于5的个数，所以只需要
     * 考虑阶乘中有多少个5，5的指数倍中5的个数不止一个，所以还需要统计阶乘中有多少个
     * 5的指数倍
     */
    public int trailingZeroes(int n) {
        int count = 0;
        while (n != 0) {
            n /= 5;
            count += n;
        }
        return count;
    }

}
