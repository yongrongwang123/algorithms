/**
 * Given an integer n, return the number of trailing zeroes in n!.
 * Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.
 * 
 * Example 1:
 * Input: n = 3
 * Output: 0
 * Explanation: 3! = 6, no trailing zero.
 * 
 * Constraints:
 * 0 <= n <= 10^4
 */

/**
 * 阶乘结果尾部的0来自10，10来自质数2和5相乘，因为2的个数多于5的个数，所以只需要
 * 考虑阶乘中有多少个5，5的指数倍中5的个数不止一个，所以还需要统计阶乘中有多少个
 * 5的指数倍
 */
var trailingZeroes = function(n) {
    let count = 0;
    while (n) {
        n = parseInt(n / 5);
        count += n;
    }
    return count;
}

var main = function() {
    let n = 3;
    console.log('n: ' + n);
    console.log('zeroes: ' + trailingZeroes(n));
}

main();
