/**
 * 76. Minimum Window Substring
 * 
 * Given two strings s and t of lengths m and n respectively, return the minimum
 * window substring of s such that every character in t (including duplicates) is
 * included in the window. If there is no such substring, return the empty string
 * "". The testcases will be generated such that the answer is unique.
 * 
 * Example 1:
 * Input: s = "ADOBECODEBANC", t = "ABC"
 * Output: "BANC"
 * Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from
 * string t.
 * 
 * Constraints:
 * m == s.length
 * n == t.length
 * 1 <= m, n <= 10^5
 * s and t consist of uppercase and lowercase English letters.
 */

/**
 * 首先统计字符串t中每个字符出现的次数，然后用两个指针在字符串s中形成一个滑动窗口，
 * 合法的滑动窗口必须包含字符串t中每个出现过的字符，移动右指针来获得一个合法的滑动
 * 窗口，移动左指针来获得一个更小的滑动窗口，如果当前滑动窗口长度小于之前最小的，则
 * 记录左指针位置
 */
var minWindow = function(s, t) {
    let n1 = t.length;
    let n2 = s.length;
    if (n1 > n2) {
        return '';
    }
    let freqs = new Array(58).fill(0);
    let count = n1;
    let start = 0;
    let end = n2 + 1;
    let a = 'A'.charCodeAt(0);
    for (let c of t) {
        let i = c.charCodeAt(0) - a;
        freqs[i]++;
    }
    for (let i = 0, j = 0; i < n2; i++) {
        let k1 = s.charCodeAt(i) - a;
        freqs[k1]--;
        count -= (freqs[k1] >= 0 ? 1 : 0);
        for (; !count; j++) {
            if (end - start > i - j + 1) {
                end = i + 1;
                start = j;
            }
            let k2 = s.charCodeAt(j) - a;
            count += (freqs[k2] >= 0 ? 1 : 0);
            freqs[k2]++;
        }
    }
    return end == n2 + 1 ? '' : s.slice(start, end);
};

var main = function() {
    let s = 'ADOBECODEBANC';
    let t = 'ABC';
    console.log('s: ' + s + ', t: ' + t);
    console.log('window: ' + minWindow(s, t));
};

main();
