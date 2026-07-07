/**
 * Given an integer n, return true if it is a power of three. Otherwise, return
 * false. An integer n is a power of three, if there exists an integer x such
 * that n == 3^x.
 * 
 * Example 1:
 * Input: n = 27
 * Output: true
 * Explanation: 27 = 3^3
 * 
 * Constraints:
 * -2^31 <= n <= 2^31 - 1
 */

package math;

public class IsPowerOfThree {
    
    public static void main(String[] args) {
        int n = 2147483647;
        System.out.println("n: " + n);
        IsPowerOfThree i = new IsPowerOfThree();
        System.out.println("power of three: " + i.isPowerOfThree(n));
    }

    /**
     * 由整数范围 n < MAX_VAUE，得到3的最大幂是 3^(log3(MAX_VALUE) =
     * 3^(loge(MAX_VALUE)/loge(3)) = 3^19，因为3是质数，所以 3^19/n = 3^19/3^x =
     * 3^(19-x)，如果n是3的幂，则n能被 3^19 整除
     */
    public boolean isPowerOfThree(int n) {
        int maxPow = (int)Math.pow(3, (int)(Math.log(Integer.MAX_VALUE) / Math.log(3)));
        return n > 0 && maxPow % n == 0;
    }

}
