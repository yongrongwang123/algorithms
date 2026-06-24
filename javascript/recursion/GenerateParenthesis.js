/**
 * Given n pairs of parentheses, write a function to generate all combinations of
 * well-formed parentheses.
 *
 * Example 1:
 * Input: n = 3
 * Output: ["((()))","(()())","(())()","()(())","()()()"]
 *
 * Constraints:
 * 1 <= n <= 8
 */

var generateParenthesis = function(n) {
    let list = [];
    helper(list, '', n, n);
    return list;
}

/**
 * 用 left 和 right 分别表示左括号和右括号剩下的个数，当 left>0 说明可以拼接一个
 * 左括号，当 right>left 说明可以拼接一个右括号，当 left 和 right 都为0的时候，
 * 将当前拼接的字符串添加到结果中，并且进行回溯
 */
var helper = function(list, str, left, right) {
    if (!left && !right) {
        list.push(str);
        return;
    }
    if (left > 0) {
        helper(list, str + '(', left - 1, right);
    }
    if (right > left) {
        helper(list, str + ')', left, right - 1);
    }
}

var main = function() {
    let n = 3;
    console.log('n: ' + n);
    let list = generateParenthesis(n);
    list.forEach(s => console.log(s));
}

main();
