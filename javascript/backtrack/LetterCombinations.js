/**
 * 17. Letter Combinations of a Phone Number
 *
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

var letterCombinations = function(digits) {
    let map = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    let list = [];
    comb(list, '', digits, map, 0);
    return list;
}

/**
 * 对于数字对应的字符串，我们可以选择或者不选择当前字符，如果选择则添加字符到当前组
 * 合，如果不选择则不添加字符到当前组合，当组合长度达到数字长度的时候，就找到了一个
 * 合法的组合
 */
var comb = function(list, builder, digits, map, start) {
    if (start == digits.length) {
        list.push(builder);
        return;
    }
    let letters = map[digits[start] - '2'];
    for (let letter of letters) {
        comb(list, builder + letter, digits, map, start + 1);
    }
}

var main = function() {
    let digits = '23';
    console.log('digits: ' + digits);
    console.log('combinations: ' + letterCombinations(digits));
}

main();
