/**
 * The Hamming distance between two integers is the number of positions at which
 * the corresponding bits are different. Given two integers x and y, return the
 * Hamming distance between them.
 * 
 * Example 1:
 * Input: x = 1, y = 4
 * Output: 2
 * Explanation:
 * 1   (0 0 0 1)
 * 4   (0 1 0 0)
 *        ↑   ↑
 * The above arrows point to positions where the corresponding bits are different.
 * 
 * Constraints:
 * 0 <= x, y <= 2^31 - 1
 */

/**
 * 用异或得到x和y二进制相应的位不相同的位置，然后再统计异或得到的数字中的1的个数
 */
var hammingDistance = function(x, y) {
    return x == y ? 0 : hammingWeight(x ^ y);
}

var hammingWeight = function(n) {
    let count = 0;
    for (; n; n >>= 1) {
        count += n & 1;
    }
    return count;
}

var main = function() {
    let x = 1;
    let y = 4;
    console.log('x: ' + x + ', y: ' + y);
    console.log('distance: ' + hammingDistance(x, y));
}

main();
