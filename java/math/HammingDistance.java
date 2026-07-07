/**
 * The Hamming distance between two integers is the number of positions at which
 * the corresponding bits are different. Given two integers x and y, return the
 * Hamming distance between them.
 * 
 * Example 1:
 * Input: x = 1, y = 4
 * Output: 2
 * Explanation:
 * 1   (0 0 0 1)
 * 4   (0 1 0 0)
 *        ↑   ↑
 * The above arrows point to positions where the corresponding bits are different.
 * 
 * Constraints:
 * 0 <= x, y <= 2^31 - 1
 */

package math;

public class HammingDistance {

    public static void main(String[] args) {
        int x = 1;
        int y = 4;
        System.out.println("x: " + x + ", y: " + y);
        HammingDistance h = new HammingDistance();
        System.out.println("distance: " + h.hammingDistance(x, y));
    }

    /**
     * 用异或得到x和y二进制相应的位不相同的位置，然后再统计异或得到的数字中的1的个数
     */
    public int hammingDistance(int x, int y) {
        return x == y ? 0 : hammingWeight(x ^ y);
    }

    private int hammingWeight(int n) {
        int count = 0;
        for (; n != 0; n >>= 1) {
            count += n & 1;
        }
        return count;
    }

}
