/**
 * 5. Longest Palindromic Substring
 *
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

package twoPointer;

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
        int n = s.length();
        char[] ch = s.toCharArray();
        for (int i, j, k = 0; k < n - (end - start) / 2;) {
            for (i = k - 1, j = k + 1; j < n && ch[j] == ch[j - 1]; j++) {}
            k = j;
            for (; i >= 0 && j < n && ch[i] == ch[j]; i--, j++) {}
            i += 1;
            if (j - i > end - start) {
                start = i;
                end = j;
            }
        }
        return s.substring(start, end);
    }

}
