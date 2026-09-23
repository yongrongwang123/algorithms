/**
 * 139. Word Break
 *
 * Given a string s and a dictionary of strings wordDict, return true if s can be
 * segmented into a space-separated sequence of one or more dictionary words. Note
 * that the same word in the dictionary may be reused multiple times in the segmentation.
 * 
 * Example 1:
 * Input: s = "leetcode", wordDict = ["leet","code"]
 * Output: true
 * Explanation: Return true because "leetcode" can be segmented as "leet code".
 * 
 * Constraints:
 * 1 <= s.length <= 300
 * 1 <= wordDict.length <= 1000
 * 1 <= wordDict[i].length <= 20
 * s and wordDict[i] consist of only lowercase English letters.
 * All the strings of wordDict are unique.
 */

package dynamicProgramming;

import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;
import java.util.HashSet;
import java.util.Set;

public class WordBreak {
    public static void main(String[] args) {
        String s = "leetcode";
        List<String> wordDict = List.of("leet","code");
        System.out.println("s: " + s);
        System.out.println("dict: " + wordDict);
        WordBreak w = new WordBreak();
        System.out.println("breaked: " + w.wordBreak(s, wordDict));
    }

    /**
     * 用动态规划，首先保存所有单词的长度，然后遍历字符串，如果当前子串由合法子串和单词
     * 组成，则当前子串是合法子串
     */
    public boolean wordBreak(String s, List<String> wordDict) {
        Set<Integer> lens = new HashSet<>();
        Set<String> words = new HashSet<>(wordDict);
        int n = s.length();
        boolean[] dp = new boolean[n + 1];
        dp[0] = true;
        for (String word : words) {
            lens.add(word.length());
        }
        for (int i = 1; i <= n; i++) {
            for (int len : lens) {
                int j = i - len;
                dp[i] = (j >= 0 && dp[j] && words.contains(s.substring(j, i)));
                if (dp[i]) {
                    break;
                }
            }
        }
        return dp[n];
    }
}
