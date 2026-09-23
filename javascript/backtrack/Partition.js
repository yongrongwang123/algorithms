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

/**
 * 用一个矩阵记录 s[i, j] 是否为回文字符串，回文字符串必须满足的条件是：
 * 1. 字符串长度为 0 或者
 * 2. s[i] == s[j]，并且字符串长度为 1 或者 s[i + 1, j - 1] 是回文字符串
 */
var partition = function(s) {
    let lists = [];
    let n = s.length;
    let dp = new Array(n).fill().map(() => new Array(n).fill(false));
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
        for (let j = i - 1; j >= 0; j--) {
            dp[j][i] = (s[i] == s[j] && (i - j == 1 || dp[j + 1][i - 1]));
        }
    }
    part(lists, [], dp, s, 0);
    return lists;
};

/**
 * 对于字符串中的每个字符，如果添加当前字符后还是回文字符串，则添加当前字符，否则不
 * 添加当前字符，当所有字符都被添加了的时候，则获得了一组回文字符串
 */
var part = function(lists, list, dp, s, start) {
    let n = s.length;
    if (start == n) {
        lists.push([...list]);
        return;
    }
    for (let i = start; i < n; i++) {
        if (dp[start][i]) {
            list.push(s.slice(start, i + 1));
            part(lists, list, dp, s, i + 1);
            list.pop();
        }
    }
};

var main = function() {
    let s = 'aab';
    console.log('s: ' + s);
    console.log('palindrome: ' + JSON.stringify(partition(s)));
};

main();
