/**
 * Implement pow(x, n), which calculates x raised to the power n (i.e., x^n).
 *
 * Example 1:
 * Input: x = 2.00000, n = 10
 * Output: 1024.00000
 *
 * Constraints:
 * -100.0 < x < 100.0
 * -2^31 <= n <= 2^31-1
 * -10^4 <= x^n <= 10^4
 */

/**
 * 使用递归的办法：当为负数的时候先转化为正数，但如果是最小的负数，则为了避免溢出需要特别处理，
 * 都为正数以后，则可以通过x=x*x，n=n/2来减小指数
 */
var myPow = function(x, n) {
    if (n == 0) {
        return 1;
    } else if (n < 0) {
        return 1 / x * myPow( 1 / x, -n - 1);
    } else {
        let pow = myPow(x * x, Math.floor(n / 2));
        return n % 2 == 0 ? pow : x * pow;
    }
}

let x = 2.00000;
let n = 10;
console.log('x: ' + x);
console.log('n: ' + n);
console.log('pow: ' + myPow(x, n));
