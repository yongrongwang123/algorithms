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

/**
 * 用动态规划，如果字符相同，则匹配下一个字符，否则取替换，删除和插入中操作次数最少
 * 者，为了减少空间，用一维数组重复利用元素
 */
var minDistance = function(word1, word2) {
    let m = word1.length;
    let n = word2.length;
    let dp = new Array(n + 1);
    for (let j = 0; j <= n; j++) {
        dp[j] = j;
    }
    for (let i = 1; i <= m; i++) {
        let pre = i - 1;
        dp[0] = i;
        for (let j = 1; j <= n; j++) {
            let cur = dp[j];
            if (word1[i - 1] == word2[j - 1]) {
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
};

var main = function() {
    let word1 = 'horse';
    let word2 = 'ros';
    console.log('word1: ' + word1 + ', word2: ' + word2);
    console.log('distance: ' + minDistance(word1, word2));
};

main();
