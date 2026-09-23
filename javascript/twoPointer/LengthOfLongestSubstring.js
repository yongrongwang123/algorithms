/**
 * 3. Longest Substring Without Repeating Characters
 *
 * Given a string s, find the length of the longest substring without duplicate 
 * characters.
 * 
 * Example 1:
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 * 
 * Constraints:
 * 0 <= s.length <= 10^5
 * s consists of English letters, digits, symbols and spaces.
 */

/**
 * 在字符串 s 上使用两个指针从左往右滑动，当快指针不是第一次遇到该字符的时候，
 * 则慢指针向右滑动，否则慢指针保持不动，同时计算出两个指针的距离
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let length = 0;
    let index = new Array(128).fill(-1);
    for (let i = 0, j = 0; i < s.length; i++) {
        let c = s.charCodeAt(i);
        j = (j >= index[c] + 1 ? j : index[c] + 1);
        index[c] = i;
        length = i - j + 1;
        max = (max >= length ? max : length);
    }
    return max;
};

var main = function() {
    let s = 'abcabcbb';
    console.log('s: ' + s);
    console.log('length: ' + lengthOfLongestSubstring(s));
};

main();
