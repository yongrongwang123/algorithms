/**
 * Given an integer n, return true if it is a power of three. Otherwise, return
 * false. An integer n is a power of three, if there exists an integer x such
 * that n == 3^x.
 * 
 * Example 1:
 * Input: n = 27
 * Output: true
 * Explanation: 27 = 3^3
 * 
 * Constraints:
 * -2^31 <= n <= 2^31 - 1
 */

/**
 * 由整数范围 n < MAX_VAUE，得到3的最大幂是 3^(log3(MAX_VALUE) =
 * 3^(loge(MAX_VALUE)/loge(3)) = 3^19，因为3是质数，所以 3^19/n = 3^19/3^x =
 * 3^(19-x)，如果n是3的幂，则n能被 3^19 整除
 */
var isPowerOfThree = function(n) {
    const MAX = 2147483647;
    let maxPow = parseInt(Math.pow(3, parseInt(Math.log(MAX) / Math.log(3))));
    return n > 0 && maxPow % !n;
}

var main = function() {
    let n = 27;
    console.log('n: ' + n);
    console.log('power of three: ' + isPowerOfThree(n));
}

main();
