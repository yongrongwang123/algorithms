/**
 * Given an integer n, return the least number of perfect square numbers that sum 
 * to n.A perfect square is an integer that is the square of an integer; in other 
 * words, it is the product of some integer with itself. For example, 1, 4, 9, and 
 * 16 are perfect squares while 3 and 11 are not.
 * 
 * Example 1:
 * Input: n = 12
 * Output: 3
 * Explanation: 12 = 4 + 4 + 4.
 * 
 * Constraints:
 * 1 <= n <= 10^4
 */

/**
 * 先将数字0压入队列，之后每弹出一个数字就将该数字和一个完全平方数相加，如果两数之和不大于
 * 目标值且没有访问过就将该数字压入队列，直到最后等于目标值则返回查找的深度
 */
var numSquares = function(n) {
    let depth = 1;
    let visited = [];
    let queue = [];
    visited.push(0);
    queue.push(0);

    while (queue.length != 0) {
        for (let i = queue.length; i > 0; i--) {
            let v = queue.shift();
            for (let j = 1; j * j <= n; j++) {
                let v1 = v + j * j;
                if (v1 == n) {
                    return depth;
                } else if (v1 > n) {
                    break;
                } else if (!visited.includes(v1)) {
                    visited.push(v1);
                    queue.push(v1);
                }
            }
        }
        depth++;
    }

    return depth;
}

let n = 12;
console.log('n: ' + n);
console.log('number: ' + numSquares(n));
