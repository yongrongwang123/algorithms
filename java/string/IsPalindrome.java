/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase
 * letters and removing all non-alphanumeric characters, it reads the same forward
 * and backward. Alphanumeric characters include letters and numbers. Given a string
 * s, return true if it is a palindrome, or false otherwise.
 *
 * Example 1:
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true
 * Explanation: "amanaplanacanalpanama" is a palindrome.
 *
 * Constraints:
 * 1 <= s.length <= 2 * 10^5
 * s consists only of printable ASCII characters.
 */

package string;

public class IsPalindrome {

    public static void main(String[] args) {
        String s = ",.";
        System.out.println("s: " + s);
        IsPalindrome i = new IsPalindrome();
        System.out.println("palindrome: " + i.isPalindrome(s));
    }

    /**
     * 使用两个指针遍历数组，一个从左往右，一个从右往左，当两个指针指向的字符是字母或
     * 者数字的时候，如果转换成小写字符后不相同则返回 false，否则移动指针到下一个位置
     */
    public boolean isPalindrome(String s) {
        for (int i = 0, j = s.length() - 1; i < j; i++, j--) {
            for (; i < j && !Character.isLetterOrDigit(s.charAt(i)); i++) {}
            for (; i < j && !Character.isLetterOrDigit(s.charAt(j)); j--) {}
            if (Character.toLowerCase(s.charAt(i)) != Character.toLowerCase(s.charAt(j))) {
                return false;
            }
        }
        return true;
    }

}
