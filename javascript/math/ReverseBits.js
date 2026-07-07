/**
 * Reverse bits of a given 32 bits signed integer.
 *
 * Example 1:
 * Input: n = 43261596
 * Output: 964176192
 * Explanation:
 * Integer	Binary
 * 43261596	00000010100101000001111010011100
 * 964176192	00111001011110000010100101000000
 * 
 * Constraints:
 * 0 <= n <= 2^31 - 2
 * n is even.
 */

/**
 * 首先将储存结果的数字左移一位，然后从原数字中得到最右边一位放入储存结果的
 * 数字，最后将原数字右移一位，因为整形数字是32位二进制数字，所以需要循环32次
 */
var reverseBits = function(n) {
    if (!n) {
        return 0;
    }
    let reversed = 0;
    for (let i = 0; i < 32; i++) {
        reversed <<= 1;
        reversed += n & 1;
        n >>= 1;
    }
    return reversed;
}

var main = function() {
    let n = 43261596;
    console.log('n: ' + n);
    console.log('reversed: ' + reverseBits(n));
}

main();
