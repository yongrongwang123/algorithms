/**
 * Given two integers a and b, return the sum of the two integers without using
 * the operators + and -.
 *
 * Example 1:
 * Input: a = 1, b = 2
 * Output: 3
 * 
 * Constraints:
 * -1000 <= a, b <= 1000
 */

package math;

public class GetSum {

    public static void main(String[] args) {
        int a = 1;
        int b = 2;
        System.out.println("a: " + a + ", b: " + b);
        GetSum g = new GetSum();
        System.out.println("sum: " + g.getSum(a, b));
    }

    /**
     * 用异或取得相加的结果，用与取得进位，如果进位不为0，则左移一位之后加到相加的
     * 结果，否则返回相加的结果
     */
    public int getSum(int a, int b) {
        int c = 0;
        while (b != 0) {
            c = (a & b) << 1;
            a ^= b;
            b = c;
        }
        return a;
    }

}
