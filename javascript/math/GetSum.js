/**
 * Given two integers a and b, return the sum of the two integers without using
 * the operators + and -.
 *
 * Example 1:
 * Input: a = 1, b = 2
 * Output: 3
 * 
 * Constraints:
 * -1000 <= a, b <= 1000
 */

/**
 * 用异或取得相加的结果，用与取得进位，如果进位不为0，则左移一位之后加到相加的
 * 结果，否则返回相加的结果
 */
var getSum = function(a, b) {
    let c = 0;
    while (b) {
        c = (a & b) << 1;
        a ^= b;
        b = c;
    }
    return a;
}

var main = function() {
    let a = 1;
    let b = 2;
    console.log('a: ' + a + ', b: ' + b);
    console.log('sum: ' + getSum(a, b));
}

main();
