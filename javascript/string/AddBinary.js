/**
 * 67. Add Binary
 *
 * Given two binary strings a and b, return their sum as a binary string.
 *
 * Example 1:
 * Input: a = "11", b = "1"
 * Output: "100"
 *
 * Constraints:
 * 1 <= a.length, b.length <= 10^4
 * a and b consist only of '0' or '1' characters.
 * Each string does not contain leading zeros except for the zero itself.
 */

/**
 * 两个字符串同时从右往左扫描，如果当前索引大于等于0，则分别取出当前元素转换为十进制数字后
 * 加上低位进位得到该位的和sum，然后用sum取余2得到该位实际二进制数字，再用sum除以2得到进位，
 * 循环结束后如果进位不为0，则加上最左边的1
 */
var addBinary = function(a, b) {
    let builder = '';
    let sum = 0;
    let carry = 0;
    for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0;) {
        sum = carry;
        if (i >= 0) {
            sum += a[i] - '0';
            i--;
        }
        if (j >= 0) {
            sum += b[j] - '0';
            j--;
        }
        carry = Math.floor(sum / 2);
        builder += sum % 2;
    }
    if (carry)
        builder += 1;
    return builder.split('').reverse().join('');
}

var main = function() {
    let a = '11';
    let b = '1'
    console.log('a: ' + a);
    console.log('b: ' + b);
    console.log('c: ' + addBinary(a, b));
}

main();
