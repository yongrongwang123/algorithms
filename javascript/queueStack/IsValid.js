/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
 * determine if the input string is valid.
 * An input string is valid if:
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * 
 * Example 1:
 * Input: s = "()"
 * Output: true
 * 
 * Constraints:
 * 1 <= s.length <= 10^4
 * s consists of parentheses only '()[]{}'.
 */

/**
 * 针对字符串中的每一个字符进行判断，每次遇到一个左括号字符就将匹配的右括号字符压入栈中，否则
 * 如果堆栈为空或者当前字符不等于弹出的字符则返回false
 */
var isValid = function(s) {
    if (s.length % 2 != 0) {
        return false;
    }
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        let c = s.charAt(i);
        if (c == '(') {
            stack.push(')');
        } else if (c == '[') {
            stack.push(']');
        } else if (c == '{') {
            stack.push('}');
        } else if (stack.length == 0 || c != stack.pop()) {
            return false;
        }
    }

    return stack.length == 0;
}

let s = "()";
console.log('s: ' + s);
console.log('valid: ' + isValid(s));
