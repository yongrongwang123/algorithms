/**
 * Given a characters array letters that is sorted in non-decreasing order and a
 * character target, return the smallest character in the array that is larger than
 * target. Note that the letters wrap around. For example, if target == 'z' and
 * letters == ['a', 'b'], the answer is 'a'.
 *
 * Example 1:
 * Input: letters = ["c","f","j"], target = "a"
 * Output: "c"
 *
 * Constraints:
 * 2 <= letters.length <= 10^4
 * letters[i] is a lowercase English letter.
 * letters is sorted in non-decreasing order.
 * letters contains at least two different characters.
 * target is a lowercase English letter.
 */

/**
 * 因为是环形的，所以右边界设置为n而不是n-1来避免取不到最后一个元素，如果中间的字符大于目标
 * 值，则搜索左半部分且包含中间的字符，否则搜索右半部分且不包含中间的字符，最后左右边界重合
 * 的时候跳出循环，返回结果之前需要对得到的索引取余
 */
var nextGreatestLetter = function(letters, target) {
    let left = 0;
    let right = letters.length;

    while (left < right) {
        let mid = Math.floor((right - left) / 2) + left;
        if (letters[mid] > target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return letters[left % letters.length];
}

let letters = ["c","f","j"];
let target = 'a';
console.log('input array: ' + letters);
console.log('target: ' + target);
console.log('next letter: ' + nextGreatestLetter(letters, target));
