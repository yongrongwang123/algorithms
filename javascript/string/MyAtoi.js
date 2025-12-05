/**
 * Implement the myAtoi(string s) function, which converts a string to a 32-bit
 * signed integer. The algorithm for myAtoi(string s) is as follows:
 * 1. Whitespace: Ignore any leading whitespace (" ").
 * 2. Signedness: Determine the sign by checking if the next character is '-' or '+',
 *    assuming positivity if neither present.
 * 3. Conversion: Read the integer by skipping leading zeros until a non-digit character
 *    is encountered or the end of the string is reached. If no digits were read, then
 *    the result is 0.
 * 4. Rounding: If the integer is out of the 32-bit signed integer range [-2^31, 2^31 - 1],
 *    then round the integer to remain in the range. Specifically, integers less than
 *    -2^31 should be rounded to -2^31, and integers greater than 2^31 - 1 should be 
 *    rounded to 2^31 - 1.
 * Return the integer as the final result.
 *
 * Example 1:
 * Input: s = "42"
 * Output: 42
 * Explanation:
 * The underlined characters are what is read in and the caret is the current reader
 * position.
 * Step 1: "42" (no characters read because there is no leading whitespace)
 *          ^
 * Step 2: "42" (no characters read because there is neither a '-' nor '+')
 *          ^
 * Step 3: "42" ("42" is read in)
 *            ^
 * Constraints:
 * 0 <= s.length <= 200
 * s consists of English letters (lower-case and upper-case), digits (0-9), ' ',
 * '+', '-', and '.'.
 */

/**
 * 首先跳过空格，然后获取符号，最后处理合法字符：获取该位数字，在加上该位数字
 * 之前判断是否会溢出，因为 -MIN_VALUE = MAX_VALUE+1，所以只需要考虑正数溢出
 * 情况，由整数的范围 base < MAX_VALUE 和 base = base*10+digit，可得
 * base < (MAX_VALUE-digit)/10
 */
var myAtoi = function(s) {
    if (s == '') {
        return 0;
    }
    let base = 0;
    let sign = 1;
    let i = 0;
    const MAX = 2147483647;
    const MIN = -2147483648;

    for (; i < s.length && s[i] == ' '; i++) {}
    if (i < s.length && (s[i] == '-' || s[i] == '+')) {
        sign = (s[i] == '+' ? 1 : -1);
        i++;
    }
    for (; i < s.length && s[i] >= '0' && s[i] <= '9'; i++) {
        let digit = s[i] - '0';
        if (base > parseInt((MAX - digit) / 10)) {
            return sign == 1 ? MAX : MIN;
        }
        base = base * 10 + digit;
    }

    return base * sign;
}

var main = function() {
    let s = "42";
    console.log('s: ' + s);
    console.log('i: ' + myAtoi(s));
}

main();
