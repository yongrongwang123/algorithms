/**
 * Given a string s, find the first non-repeating character in it and return its 
 * index. If it does not exist, return -1.
 * 
 * Example 1:
 * Input: s = "leetcode"
 * Output: 0
 * 
 * Constraints:
 * 1 <= s.length <= 10^5
 * s consists of only lowercase English letters.
 */

/**
 * 使用将字符作为索引的数组来保存s中的字符对应的出现次数，如果当前字符出现次数为1则返回
 * 对应的索引
 */
var firstUniqChar = function(s) {
    let freq = new Array(26).fill(0);
    let a = 'a'.charCodeAt(0);
    for (let i = 0; i < s.length; i++) {
        freq[s.charCodeAt(i) - a]++;
    }
    for (let i = 0; i < s.length; i++) {
        if (freq[s.charCodeAt(i) - a] == 1) {
            return i;
        }
    }
    return -1;
}

let s = "leetcode";
console.log('s: ' + s);
console.log('index: ' + firstUniqChar(s));
