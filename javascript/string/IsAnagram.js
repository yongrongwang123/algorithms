/**
 * 242. Valid Anagram
 *
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 *
 * Example 1:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 *
 * Constraints:
 * 1 <= s.length, t.length <= 5 * 10^4
 * s and t consist of lowercase English letters.
 */

/**
 * 用一个长度为26的数组统计两个字符串中字符出现次数，如果出现次数相同则返回 true，
 * 否则返回 false
 */
var isAnagram = function(s, t) {
    if (s.length != t.length) {
        return false;
    }
    let a = 'a'.charCodeAt(0);
    let freq = new Array(26).fill(0);
    for (let c of s) {
        let i = c.charCodeAt(0) - a;
        freq[i]++;
    }
    for (let c of t) {
        let i = c.charCodeAt(0) - a;
        freq[i]--;
        if (freq[i] < 0) {
            return false;
        }
    }
    return true;
}

var main = function() {
    let s = 'anagram';
    let t = 'nagaram';
    console.log('s: ' + s + ', t: ' + t);
    console.log('anagram: ' + isAnagram(s, t));
}

main();
