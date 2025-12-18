/**
 * We are playing the Guess Game. The game is as follows:
 * I pick a number from 1 to n. You have to guess which number I picked.
 * Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.
 * You call a pre-defined API int guess(int num), which returns 3 possible results:
 * - -1: The number I picked is lower than your guess (i.e. pick < num).
 * - 1: The number I picked is higher than your guess (i.e. pick > num).
 * - 0: The number I picked is equal to your guess (i.e. pick == num).
 * Return the number that I picked.
 *
 * Example 1:
 * Input: n = 10, pick = 6
 * Output: 6
 *
 * Constraints:
 * 1 <= n <= 2^31 - 1
 * 1 <= pick <= n
 */

/**
 * 如果中间数字等于目标值，则返回该数字，如果要猜的数字更小则搜索左半部分，否则搜索右半部分
 */
var guessNumber = function(n) {
    let left = 1;
    let right = n;

    while (true) {
        let mid = Math.floor((right - left) / 2) + left;
        if (guess(mid) == 0) {
            return mid;
        } else if (guess(mid) < 0) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
}

var guess = function(num) {
    if (pick == num) {
        return 0;
    } else if (pick < num) {
        return -1;
    } else {
        return 1;
    }
}

let n = 10;
let pick = 6;
console.log('n: ' + n);
console.log('pick: ' + pick);
console.log('answer: ' + guessNumber(n));
