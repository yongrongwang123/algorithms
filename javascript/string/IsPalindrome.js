/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase
 * letters and removing all non-alphanumeric characters, it reads the same forward
 * and backward. Alphanumeric characters include letters and numbers. Given a string
 * s, return true if it is a palindrome, or false otherwise.
 *
 * Example 1:
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true
 * Explanation: "amanaplanacanalpanama" is a palindrome.
 *
 * Constraints:
 * 1 <= s.length <= 2 * 10^5
 * s consists only of printable ASCII characters.
 */

/**
 * 使用两个指针遍历数组，一个从左往右，一个从右往左，当两个指针指向的字符是字母或
 * 者数字的时候，如果转换成小写字符后不相同则返回 false，否则移动指针到下一个位置
 */
var isPalindrome = function(s) {
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        for (; i < j && !isLetterOrDigit(s.charCodeAt(i)); i++) {}
        for (; i < j && !isLetterOrDigit(s.charCodeAt(j)); j--) {}
        if (s[i].toLowerCase() != s[j].toLowerCase()) {
            return false;
        }
    }
    return true;
}

var isLetterOrDigit = function(c) {
    return (c >= '0'.charCodeAt(0) && c <= '9'.charCodeAt(0)) ||
           (c >= 'A'.charCodeAt(0) && c <= 'Z'.charCodeAt(0)) ||
           (c >= 'a'.charCodeAt(0) && c <= 'z'.charCodeAt(0));
}

var main = function() {
    let s = ".,";
    console.log('s: ' + s);
    console.log('palindrome: ' + isPalindrome(s));
}

main();
