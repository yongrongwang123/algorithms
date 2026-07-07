/**
 * Given a positive integer n, write a function that returns the number of set
 * bits in its binary representation (also known as the Hamming weight).
 *
 * Example 1:
 * Input: n = 11
 * Output: 3
 * Explanation:
 * The input binary string 1011 has a total of three set bits.
 * 
 * Constraints:
 * 1 <= n <= 2^31 - 1
 */

/**
 * 首先从原数字中得到最右边一位放入储存结果的数字，然后将原数字右移一位，重复之前
 * 的操作直到原数字变成0
 */
var hammingWeight = function(n) {
    let count = 0;
    for (; n; n >>= 1) {
        count += n & 1;
    }
    return count;
}

var main = function() {
    let n = 11;
    console.log('n: ' + n);
    console.log('weight: ' + hammingWeight(n));
}

main();
