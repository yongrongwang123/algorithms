/**
 * Given a positive integer n, write a function that returns the number of set
 * bits in its binary representation (also known as the Hamming weight).
 *
 * Example 1:
 * Input: n = 11
 * Output: 3
 * Explanation:
 * The input binary string 1011 has a total of three set bits.
 * 
 * Constraints:
 * 1 <= n <= 2^31 - 1
 */

package math;

public class HammingWeight {

    public static void main(String[] args) {
        int n = 11;
        System.out.println("n: " + n);
        HammingWeight h = new HammingWeight();
        System.out.println("weight: " + h.hammingWeight(n));
    }

    /**
     * 首先从原数字中得到最右边一位放入储存结果的数字，然后将原数字右移一位，重复之前
     * 的操作直到原数字变成0
     */
    public int hammingWeight(int n) {
        int count = 0;
        for (; n != 0; n >>= 1) {
            count += n & 1;
        }
        return count;
    }

}
