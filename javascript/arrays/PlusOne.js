/**
 * 66. Plus One
 *
 * You are given a large integer represented as an integer array digits, where each
 * digits[i] is the ith digit of the integer. The digits are ordered from most
 * significant to least significant in left-to-right order. The large integer does
 * not contain any leading 0's. Increment the large integer by one and return the
 * resulting array of digits.
 *
 * Example 1:
 * Input: digits = [1,2,3]
 * Output: [1,2,4]
 * Explanation: The array represents the integer 123.
 *
 * Constraints:
 * 1 <= digits.length <= 100
 * 0 <= digits[i] <= 9
 */

/**
 * 从右往左扫描数组，如果当前元素加1后小于等于9，则将当前元素加一然后返回数组，否则将当前
 * 元素设置为0，如果扫描结束了依然没有返回数组则说明位溢出，构造一个长度比原数组大1的新数组，
 * 将索引为0的元素设置为1后返回新数组
 */
var plusOne = function(digits) {
    let n = digits.length;
    for (let i = n - 1; i >= 0; i--) {
        if (digits[i] + 1 <= 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    let newDigits = new Array(n + 1).fill(0);
    newDigits[0] = 1;
    return newDigits;
}

var main = function() {
    let digits = [1,2,3];
    console.log('digits: ' + digits);
    console.log('digits: ' + plusOne(digits));
}

main();
