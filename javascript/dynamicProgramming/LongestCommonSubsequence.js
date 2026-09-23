/**
 * 1143. Longest Common Subsequence
 *
 * Given two strings text1 and text2, return the length of their longest common
 * subsequence. If there is no common subsequence, return 0. A subsequence of a
 * string is a new string generated from the original string with some characters
 * (can be none) deleted without changing the relative order of the remaining characters.
 * - For example, "ace" is a subsequence of "abcde". A common subsequence of two strings
 * is a subsequence that is common to both strings.
 * 
 * Example 1:
 * Input: text1 = "abcde", text2 = "ace" 
 * Output: 3  
 * Explanation: The longest common subsequence is "ace" and its length is 3.
 * 
 * Constraints:
 * 1 <= text1.length, text2.length <= 1000
 * text1 and text2 consist of only lowercase English characters.
 */

/**
 * 用动态规划，如果字符相同，则将公共子序列长度加一，否则取跳过一个字符后的子序列长度
 * 中的最大值，为了减少空间，用一维数组重复利用元素
 */
var longestCommonSubsequence = function(text1, text2) {
    let m = text1.length;
    let n = text2.length;
    let dp = new Array(n + 1).fill(0);
    for (let i = 1; i <= m; i++) {
        let pre = 0;
        for (let j = 1; j <= n; j++) {
            let cur = dp[j];
            if (text1[i - 1] == text2[j - 1]) {
                dp[j] = pre + 1;
            } else {
                dp[j] = (dp[j - 1] > cur ? dp[j - 1] : cur);
            }
            pre = cur;
        }
    }
    return dp[n];
};

var main = function() {
    let text1 = 'abcde';
    let text2 = 'ace';
    console.log('text1: ' + text1 + ', text2: ' + text2);
    console.log('longest: ' + longestCommonSubsequence(text1, text2));
};

main();
