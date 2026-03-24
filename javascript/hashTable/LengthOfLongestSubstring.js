/**
 * Given a string s, find the length of the longest substring without repeating 
 * characters.
 * 
 * Example 1:
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 * 
 * Constraints:
 * 0 <= s.length <= 5 * 10^4
 * s consists of English letters, digits, symbols and spaces.
 */

/**
 * 在字符串 s 上使用两个指针从左往右滑动，当快指针不是第一次遇到该字符的时候，
 * 则慢指针向右滑动，否则慢指针保持不动，同时计算出两个指针的距离
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let indexs = new Array(256).fill(-1);

    for (let i = 0, j = 0; i < s.length; i++) {
        let c = s.charCodeAt(i);
        if (indexs[c] != -1) {
            j = Math.max(j, indexs[c] + 1);
        }
        indexs[c] = i;
        maxLength = Math.max(maxLength, i - j + 1);
    }

    return maxLength;
}

let s = "abcabcbb";
console.log('s: ' + s);
console.log('length: ' + lengthOfLongestSubstring(s));
