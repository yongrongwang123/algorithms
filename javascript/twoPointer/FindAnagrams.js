/**
 * 438. Find All Anagrams in a String
 *
 * Given two strings s and p, return an array of all the start indices of p's anagrams
 * in s. You may return the answer in any order.
 *
 * Example 1:
 * Input: s = "cbaebabacd", p = "abc"
 * Output: [0,6]
 * Explanation:
 * The substring with start index = 0 is "cba", which is an anagram of "abc".
 * The substring with start index = 6 is "bac", which is an anagram of "abc".
 * 
 * Constraints:
 * 1 <= s.length, p.length <= 3 * 10^4
 * s and p consist of lowercase English letters.
 */

/**
 * 首先统计字符串p中每个字符出现的次数，然后用两个指针在字符串s中形成一个滑动窗口，
 * 合法的滑动窗口必须包含字符串p中每个出现过的字符，移动右指针来获得一个合法的滑动
 * 窗口，移动左指针来获得一个更小的滑动窗口，如果滑动窗口长度和字符串p长度一样大，
 * 则记录左指针位置
 */
var findAnagrams = function(s, p) {
    let n1 = p.length;
    let n2 = s.length;
    let list = [];
    if (n1 > n2) {
        return list;
    }
    let freqs = new Array(26).fill(0);
    let count = n1;
    let a = 'a'.charCodeAt(0);
    for (let c of p) {
        let i = c.charCodeAt(0) - a;
        freqs[i]++;
    }
    for (let i = 0, j = 0; i < n2; i++) {
        let k1 = s.charCodeAt(i) - a;
        freqs[k1]--;
        count -= (freqs[k1] >= 0 ? 1 : 0);
        for (; !count; j++) {
            if (i - j + 1 == n1) {
                list.push(j);
            }
            let k2 = s.charCodeAt(j) - a;
            count += (freqs[k2] >= 0 ? 1 : 0);
            freqs[k2]++;
        }
    }
    return list;
};

var main = function() {
    let s = 'cbaebabacd';
    let p = 'abc';
    console.log('s: ' + s + ', p: ' + p);
    console.log('index: ' + findAnagrams(s, p));
};

main();
