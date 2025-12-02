/**
 * Given a string containing digits from 2-9 inclusive, return all possible letter
 * combinations that the number could represent. Return the answer in any order.
 * A mapping of digits to letters (just like on the telephone buttons) is given
 * below. Note that 1 does not map to any letters.
 *
 * Example 1:
 * Input: digits = "23"
 * Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
 *
 * Constraints:
 * 1 <= digits.length <= 4
 * digits[i] is a digit in the range ['2', '9'].
 */

/**
 * 用空字符串作为基础组合，依次访问每个数字对应的字符串，在当前组合的每个字符串
 * 上拼接访问的字符串的每个字符，以此作为新组合
 */
var letterCombinations = function(digits) {
    let map = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    let combinations = [''];
    for (let digit of digits) {
        let temp = [];
        let letters = map[digit - '2'];
        for (let letter of letters) {
            for (let combination of combinations) {
                temp.push(combination + letter);
            }
        }
        combinations = temp;
    }
    return combinations;
}

var main = function() {
    let digits = "23";
    console.log('digits: ' + digits);
    console.log('combinations: ' + letterCombinations(digits));
}

main();
