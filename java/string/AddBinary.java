/**
 * 67. Add Binary
 *
 * Given two binary strings a and b, return their sum as a binary string.
 *
 * Example 1:
 * Input: a = "11", b = "1"
 * Output: "100"
 *
 * Constraints:
 * 1 <= a.length, b.length <= 10^4
 * a and b consist only of '0' or '1' characters.
 * Each string does not contain leading zeros except for the zero itself.
 */
package string;

public class AddBinary {

    public static void main(String[] args) {
        String a = "11";
        String b = "1";
        System.out.println("a: " + a);
        System.out.println("b: " + b);
        AddBinary ab = new AddBinary();
        System.out.println("c: " + ab.addBinary(a, b));
    }

    /**
     * 两个字符串同时从右往左扫描，如果当前索引大于等于0，则分别取出当前元素转换为十进制数字后
     * 加上低位进位得到该位的和sum，然后用sum取余2得到该位实际二进制数字，再用sum除以2得到进位，
     * 循环结束后如果进位不为0，则加上最左边的1
     */
    public String addBinary(String a, String b) {
        StringBuilder builder = new StringBuilder();
        int sum = 0;
        int carry = 0;
        char[] ca = a.toCharArray();
        char[] cb = b.toCharArray();
        for (int i = a.length() - 1, j = b.length() - 1; i >= 0 || j >= 0;) {
            sum = carry;
            if (i >= 0) {
                sum += ca[i] - '0';
                i--;
            }
            if (j >= 0) {
                sum += cb[i] - '0';
                j--;
            }
            builder.append(sum % 2);
            carry = sum / 2;
        }
        if (carry != 0) {
            builder.append(1);
        }
        return builder.reverse().toString();
    }

}
