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

/**
 * 用动态规划，首先保存所有单词的长度，然后遍历字符串，如果当前子串由合法子串和单词
 * 组成，则当前子串是合法子串
 */
var wordBreak = function(s, wordDict) {
    let lens = new Set();
    let words = new Set(wordDict);
    let n = s.length;
    let dp = new Array(n + 1).fill(false);
    dp[0] = true;
    for (let word of words) {
        lens.add(word.length);
    }
    for (let i = 1; i <= n; i++) {
        for (let len of lens) {
            let j = i - len;
            dp[i] = (j >= 0 && dp[j] && words.has(s.slice(j, i)));
            if (dp[i]) {
                break;
            }
        }
    }
    return dp[n];
};

var main = function() {
    let s = 'leetcode';
    let wordDict = ['leet','code'];
    console.log('s: ' + s);
    console.log('dict: ' + wordDict);
    console.log('breaked: ' + wordBreak(s, wordDict));
};

main();
