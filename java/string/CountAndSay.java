/**
 * The count-and-say sequence is a sequence of digit strings defined by the recursive
 * formula:
 *  - countAndSay(1) = "1"
 *  - countAndSay(n) is the run-length encoding of countAndSay(n - 1).
 * Run-length encoding (RLE) is a string compression method that works by replacing
 * each maximal group of consecutive identical characters with the concatenation
 * of the length of the group followed by the character itself. For example, to
 * compress the string "3322251" we replace "33" with "23", replace "222" with "32",
 * replace "5" with "15", and replace "1" with "11". Thus the compressed string
 * becomes "23321511". Given a positive integer n, return the nth element of the
 * count-and-say sequence.
 * 
 * Example 1:
 * Input: n = 4
 * Output: "1211"
 * 
 * Explanation:
 * countAndSay(1) = "1"
 * countAndSay(2) = RLE of "1" = "11"
 * countAndSay(3) = RLE of "11" = "21"
 * countAndSay(4) = RLE of "21" = "1211"
 * 
 * Constraints:
 * 1 <= n <= 30
 */

package string;

public class CountAndSay {

    public static void main(String[] args) {
        int n = 4;
        System.out.println("n: " + n);
        CountAndSay c = new CountAndSay();
        System.out.println("s: " + c.countAndSay(n));
    }

    /**
     * 从前往后遍历字符串，每次遇到一个字符，就将该字符和上一个字符对比，如果不相等
     * 就拼接上一个字符和出现的次数，为了能对比最后一个字符，首先在上一个字符串最后
     * 拼接上非数字的字符
     */
    public String countAndSay(int n) {
        StringBuilder pre = new StringBuilder("1");
        for (; n > 1; n--) {
            StringBuilder cur = new StringBuilder();
            pre.append("$");
            int m = pre.length();
            for (int i = 1, j = 0; i < m; i++) {
                if (pre.charAt(i) != pre.charAt(i - 1)) {
                    cur.append(i - j);
                    cur.append(pre.charAt(i - 1));
                    j = i;
                }
            }
            pre = cur;
        }
        return pre.toString();
    }

}
