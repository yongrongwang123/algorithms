/**
 * Given an integer n, return the number of prime numbers that are strictly less than n.
 *
 * Example 1:
 * Input: n = 10
 * Output: 4
 * Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
 * 
 * Constraints:
 * 0 <= n <= 5 * 10^6
 */

/**
 * 用数组来标记是否是质数，每次遇到一个质数，就将它的倍数标记为非质数，为了加快
 * 查找速度，首先跳过所有的偶数，然后从质数的平方开始标记
 */
var countPrimes = function(n) {
    if (n <= 2) {
        return 0;
    }

    let notPrime = new Array(n).fill(false);
    let count = 1;
    for (let i = 3; i < n; i += 2) {
        if (notPrime[i]) {
            continue;
        }
        count++;
        if (i >= Math.sqrt(n)) {
            continue;
        }
        for (let j = i * i; j < n; j += 2 * i) {
            notPrime[j] = true;
        }
    }

    return count;
}

var main = function() {
    let n = 10;
    console.log('n: ' + n);
    console.log('count: ' + countPrimes(n));
}

main();
