/**
 * Given a string s, return the longest palindromic substring in s.
 * 
 * Example 1:
 * Input: s = "babad"
 * Output: "bab"
 * Explanation: "aba" is also a valid answer.
 * 
 * Constraints:
 * 1 <= s.length <= 1000
 * s consist of only digits and English letters.
 */

package string;

public class LongestPalindrome {

    public static void main(String[] args) {
        String s = "babad";
        System.out.println("s: " + s);
        LongestPalindrome l = new LongestPalindrome();
        System.out.println("longest: " + l.longestPalindrome(s));
    }

    /**
     * 从左往右扫描字符串，对于每个字符首先向右跳过重复的字符，然后用两个指针分别向两
     * 边扫描，一直到两个指针指向的字符不相等为止，记录最大长度字符串开始和结束的位置
     */
    public String longestPalindrome(String s) {
        int start = 0;
        int end = 1;

        for (int i, j, k = 0; k < s.length(); k++) {
            for (j = k + 1; j < s.length() && s.charAt(j) == s.charAt(j - 1); j++) {}
            for (i = k - 1; i >= 0 && j < s.length() && s.charAt(i) == s.charAt(j); i--, j++) {}
            if (j - (i + 1) > end - start) {
                start = i + 1;
                end = j;
            }
        }

        return s.substring(start, end);
    }

}
