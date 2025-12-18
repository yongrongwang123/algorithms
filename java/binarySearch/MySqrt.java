/**
 * 69. Sqrt(x)
 *
 * Given a non-negative integer x, return the square root of x rounded down to the
 * nearest integer. The returned integer should be non-negative as well. You must
 * not use any built-in exponent function or operator.
 *  - For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 * 
 * Example 1:
 * Input: x = 4
 * Output: 2
 * 
 * Constraints:
 * 0 <= x <= 2^31 - 1
 */

package binarySearch;

public class MySqrt {

    public static void main(String[] args) {
        int x = 4;
        System.out.println("x: " + x);
        MySqrt m = new MySqrt();
        System.out.println("sqrt: " + m.mySqrt(x));
    }

    /**
     * 如果中间数字的平方小于等于目标值且中间数字加一后的平方大于目标值，则返回该数字，如果中间
     * 数字的平方大于目标值，则搜索左半部分，否则搜索右半部分
     */
    public int mySqrt(int x) {
        if (x == 0) {
            return 0;
        }
        int left = 1;
        int right = x;
        while (true) {
            int mid = left + (right - left) / 2;
            if (mid <= x / mid && (mid + 1) > x / (mid + 1)) {
                return mid;
            } else if (mid > x / mid) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }
}
