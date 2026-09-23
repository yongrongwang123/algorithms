/**
 * 72. Edit Distance
 *
 * Given two strings word1 and word2, return the minimum number of operations
 * required to convert word1 to word2. You have the following three operations
 * permitted on a word:
 * - Insert a character
 * - Delete a character
 * - Replace a character
 * 
 * Example 1:
 * Input: word1 = "horse", word2 = "ros"
 * Output: 3
 * Explanation: 
 * horse -> rorse (replace 'h' with 'r')
 * rorse -> rose (remove 'r')
 * rose -> ros (remove 'e')
 * 
 * Constraints:
 * 0 <= word1.length, word2.length <= 500
 * word1 and word2 consist of lowercase English letters.
 */

package dynamicProgramming;

public class MinDistance {
    public static void main(String[] args) {
        String word1 = "horse";
        String word2 = "ros";
        System.out.println("word1: " + word1 + ", word2: " + word2);
        MinDistance m = new MinDistance();
        System.out.println("distance: " + m.minDistance(word1, word2));
    }

    /**
     * 用动态规划，如果字符相同，则匹配下一个字符，否则取替换，删除和插入中操作次数最少
     * 者，为了减少空间，用一维数组重复利用元素
     */
    public int minDistance(String word1, String word2) {
        int m = word1.length();
        int n = word2.length();
        int[] dp = new int[n + 1];
        char[] ch1 = word1.toCharArray();
        char[] ch2 = word2.toCharArray();
        for (int j = 0; j <= n; j++) {
            dp[j] = j;
        }
        for (int i = 1; i <= m; i++) {
            int pre = i - 1;
            dp[0] = i;
            for (int j = 1; j <= n; j++) {
                int cur = dp[j];
                if (ch1[i - 1] == ch2[j - 1]) {
                    dp[j] = pre;
                } else {
                    pre = (pre <= cur ? pre : cur);
                    pre = (pre <= dp[j - 1] ? pre : dp[j - 1]);
                    dp[j] = pre + 1;
                }
                pre = cur;
            }
        }
        return dp[n];
    }
}
