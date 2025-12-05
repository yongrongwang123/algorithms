/**
 * 28. Find the Index of the First Occurrence in a String
 *
 * Given two strings needle and haystack, return the index of the first occurrence
 * of needle in haystack, or -1 if needle is not part of haystack.
 *
 * Example 1:
 * Input: haystack = "hello", needle = "ll"
 * Output: 2
 *
 * Constraints:
 * 0 <= haystack.length, needle.length <= 5 * 10^4
 * haystack and needle consist of only lower-case English characters.
 */
package string;

public class StrStr {

    public static void main(String[] args) {
        String haystack = "hello";
        String needle = "ll";
        System.out.println("haystack: " + haystack);
        System.out.println("needle: " + needle);
        StrStr s = new StrStr();
        System.out.println("index: " + s.strStr(haystack, needle));
    }

    /**
     * 采用暴力搜索，两个指针分别对两个字符串从左往右扫描，如果出现不同的字符则重新开始匹配，如果
     * 匹配到子字符串则返回父字符串起始匹配索引
     */
    public int strStr(String haystack, String needle) {
        int m = haystack.length();
        int n = needle.length();
        char[] cm = haystack.toCharArray();
        char[] cn = needle.toCharArray();
        if (n == 0) {
            return 0;
        }
        for (int i = 0; i + n <= m; i++) {
            for (int j = 0; j < n && cn[j] == cm[i + j]; j++) {
                if (j == n - 1) {
                    return i;
                }
            }
        }
        return -1;
    }

}
