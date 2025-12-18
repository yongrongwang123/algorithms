/**
 * 367. Valid Perfect Square
 *
 * Given a positive integer num, return true if num is a perfect square or false
 * otherwise. A perfect square is an integer that is the square of an integer. In
 * other words, it is the product of some integer with itself. You must not use any
 * built-in library function, such as sqrt.
 *
 * Example 1:
 * Input: num = 16
 * Output: true
 *
 * Constraints:
 * 1 <= num <= 2^31 - 1
 */

/**
 * 如果中间数字的平方等于目标值，则返回该数字，如果中间数字的平方大于目标值，则搜索左半部分，
 * 否则搜索右半部分
 */
var isPerfectSquare = function(num) {
    let left = 1;
    let right = num;
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (mid * mid == num) {
            return true;
        } else if (mid * mid > num) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return false;
}

var main = function() {
    let num = 16;
    console.log('num: ' + num);
    console.log('perfect square: ' + isPerfectSquare(num));
}

main();
