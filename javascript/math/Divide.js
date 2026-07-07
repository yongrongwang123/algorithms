/**
 * Given two integers dividend and divisor, divide two integers without using
 * multiplication, division, and mod operator. The integer division should truncate
 * toward zero, which means losing its fractional part. For example, 8.345 would
 * be truncated to 8, and -2.7335 would be truncated to -2. Return the quotient
 * after dividing dividend by divisor.
 * Note: Assume we are dealing with an environment that could only store integers
 * within the 32-bit signed integer range: [−2^31, 2^31 − 1]. For this problem, if
 * the quotient is strictly greater than 2^31 - 1, then return 2^31 - 1, and if the
 * quotient is strictly less than -2^31, then return -2^31.
 * 
 * Example 1:
 * Input: dividend = 10, divisor = 3
 * Output: 3
 * Explanation: 10/3 = 3.33333.. which is truncated to 3.
 * 
 * Constraints:
 * -2^31 <= dividend, divisor <= 2^31 - 1
 * divisor != 0
 */

/**
 * 将除法得到的商转换成二进制数字，为了防止数字溢出，将被除数和除数都转换成负数，
 * 因为是整数，所以最多有32位，从最高位往最低位搜索，每次在除数的2的指数倍中搜索
 * 大于等于被除数的最小数字，然后用被除数减去该数字得到新的被除数，在对除数左移
 * 之前需要确保数字不会溢出
 */
var divide = function(dividend, divisor) {
    const MIN = -2147483648;
    const MAX = 2147483647;
    if (dividend == MIN && divisor == -1) {
        return MAX;
    }
    let quotient = 0;
    let sign = (dividend > 0) == (divisor > 0);
    dividend = (dividend > 0 ? -dividend : dividend);
    divisor = (divisor > 0 ? -divisor : divisor);
    for (let i = 31; i >= 0; i--) {
        if (dividend <= (divisor << i) && (dividend >> i) <= divisor) {
            dividend -= divisor << i;
            quotient += 1 << i;
        }
    }
    return sign || quotient == MIN ? quotient : -quotient;
}

var main = function() {
    let dividend = -2147483648;
    let divisor = -2147483648;
    console.log('dividend: ' + dividend);
    console.log('divisor: ' + divisor);
    console.log('quotient: ' + divide(dividend, divisor));
}

main();
