/**
 * 131. Palindrome Partitioning
 *
 * Given a string s, partition s such that every substring of the partition is a
 * palindrome. Return all possible palindrome partitioning of s.
 *
 * Example 1:
 * Input: s = "aab"
 * Output: [["a","a","b"],["aa","b"]]
 * 
 * Constraints:
 * 1 <= s.length <= 16
 * s contains only lowercase English letters.
 */

package backtrack;

import java.util.ArrayList;
import java.util.List;

public class Partition {
    public static void main(String[] args) {
        String s = "aab";
        System.out.println("s: " + s);
        Partition p = new Partition();
        System.out.println("palindrome: " + p.partition(s));
    }

    /**
     * 用一个矩阵记录 s[i, j] 是否为回文字符串，回文字符串必须满足的条件是：
     * 1. 字符串长度为 0 或者
     * 2. s[i] == s[j]，并且字符串长度为 1 或者 s[i + 1, j - 1] 是回文字符串
     */
    public List<List<String>> partition(String s) {
        List<List<String>> lists = new ArrayList<>();
        int n = s.length();
        boolean[][] dp = new boolean[n][n];
        char[] ch = s.toCharArray();
        for (int i = 0; i < n; i++) {
            dp[i][i] = true;
            for (int j = i - 1; j >= 0; j--) {
                dp[j][i] = (ch[i] == ch[j] && ( i - j == 1 || dp[j + 1][i - 1]));
            }
        }
        part(lists, new ArrayList<>(), dp, s, 0);
        return lists;
    }

    /**
     * 对于字符串中的每个字符，如果添加当前字符后还是回文字符串，则添加当前字符，否则不
     * 添加当前字符，当所有字符都被添加了的时候，则获得了一组回文字符串
     */
    private void part(List<List<String>> lists, List<String> list, boolean[][] dp,
            String s, int start) {
        int n = s.length();
        if (start == n) {
            lists.add(new ArrayList<>(list));
            return;
        }
        for (int i = start; i < n; i++) {
            if (dp[start][i]) {
                list.add(s.substring(start, i + 1));
                part(lists, list, dp, s, i + 1);
                list.removeLast();
            }
        }
    }
}
