/**
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing
 * x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1],
 * then return 0. Assume the environment does not allow you to store 64-bit integers
 * (signed or unsigned).
 *
 * Example 1:
 * Input: x = 123
 * Output: 321
 *
 * Constraints:
 * -2^31 <= x <= 2^31 - 1
 */

/**
 * 每次从原来数字取最后一位加到翻转的数字后面，然后从原来数字去掉最后一位，
 * 必须在加上最后一位之前判断是否会溢出，因为翻转的数字 reversed 是整数，所以
 * MIN_VALUE < reversed < MAX_VALUE 和 reversed = reversed*10+digit，可得
 * MIN_VALUE/10 < reversed < MAX_VALUE/10，因为原来数字和翻转的数字都必须满足
 * 整数范围的要求，所以在判断是否溢出的时候可以忽略最后一位数字
 */
var reverse = function(x) {
    let reversed = 0;
    const MAX = 2147483647;
    const MIN = -2147483648;
    for (; x; x = parseInt(x / 10)) {
        if (reversed < parseInt(MIN / 10) || reversed > parseInt(MAX / 10)) {
            return 0;
        }
        reversed = reversed * 10 + x % 10;
    }
    return reversed;
}

var main = function() {
    let x = 1534236469;
    console.log('x: ' + x);
    console.log('reversed: ' + reverse(x));
}

main();
