/**
 * 32. Longest Valid Parentheses
 *
 * Given a string containing just the characters '(' and ')', return the length of
 * the longest valid (well-formed) parentheses substring.
 *
 * Example 1:
 * Input: s = "(()"
 * Output: 2
 * Explanation: The longest valid parentheses substring is "()".
 * 
 * Constraints:
 * 0 <= s.length <= 3 * 10^4
 * s[i] is '(', or ')'.
 */

/**
 * 关键是获取左边界，用不匹配的右括号索引作为左边界，开始的时候用-1作为左边界。从左
 * 往右遍历字符串，如果是左括号则压入索引到堆栈，如果是右括号则从堆栈中弹出索引。如
 * 果弹出后堆栈为空，则压入索引作为左边界，如果弹出后堆栈不为空，则用当前索引减去栈
 * 顶索引获得当前长度，最后从所有长度中获得最大长度
 */
var longestValidParentheses = function(s) {
    let max = 0;
    let stack = [];
    stack.push(-1);
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            stack.push(i);
        } else {
            stack.pop();
            if (!stack.length) {
                stack.push(i);
            } else {
                let len = i - stack.at(-1);
                max = (max >= len ? max : len);
            }
        }
    }
    return max;
};

var main = function() {
    let s = "(()";
    console.log('s: ' + s);
    console.log('longest: ' + longestValidParentheses(s));
};

main();
