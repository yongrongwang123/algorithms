/**
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing
 * x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1],
 * then return 0. Assume the environment does not allow you to store 64-bit integers
 * (signed or unsigned).
 *
 * Example 1:
 * Input: x = 123
 * Output: 321
 *
 * Constraints:
 * -2^31 <= x <= 2^31 - 1
 */

package string;

public class Reverse {
    
    public static void main(String[] args) {
        int x = 1534236469;
        System.out.println("x: " + x);
        Reverse r = new Reverse();
        System.out.println("reversed: " + r.reverse(x));
    }

    /**
     * 每次从原来数字取最后一位加到翻转的数字后面，然后从原来数字去掉最后一位，
     * 必须在加上最后一位之前判断是否会溢出，因为翻转的数字 reversed 是整数，所以
     * MIN_VALUE < reversed < MAX_VALUE 和 reversed = reversed*10+digit，可得
     * MIN_VALUE/10 < reversed < MAX_VALUE/10，因为原来数字和翻转的数字都必须满足
     * 整数范围的要求，所以在判断是否溢出的时候可以忽略最后一位数字
     */
    public int reverse(int x) {
        int reversed = 0;
        for (; x != 0; x /= 10) {
            if (reversed < Integer.MIN_VALUE / 10 || reversed > Integer.MAX_VALUE / 10) {
                return 0;
            }
            reversed = reversed * 10 + x % 10;
        }
        return reversed;
    }

}
