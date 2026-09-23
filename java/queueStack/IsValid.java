/**
 * 20. Valid Parentheses
 *
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
 * determine if the input string is valid.
 * An input string is valid if:
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 * 3. Every close bracket has a corresponding open bracket of the same type.
 * 
 * Example 1:
 * Input: s = "()"
 * Output: true
 * 
 * Constraints:
 * 1 <= s.length <= 10^4
 * s consists of parentheses only '()[]{}'.
 */

package queueStack;

import java.util.Map;
import java.util.ArrayDeque;
import java.util.Deque;

public class IsValid {

    public static void main(String[] args) {
        String s = "()";
        System.out.println("s: " + s);
        IsValid i = new IsValid();
        System.out.println("valid: " + i.isValid(s));
    }

    /**
     * 针对字符串中的每一个字符进行判断，每次遇到一个左括号字符就将匹配的右括号字符压入栈中，否则
     * 如果堆栈为空或者当前字符不等于弹出的字符则返回false
     */
    public boolean isValid(String s) {
        Deque<Character> stack = new ArrayDeque<>();
        Map<Character, Character> map = Map.of(
            '(', ')',
            '[', ']',
            '{', '}'
        );
        for (char c : s.toCharArray()) {
            if (map.containsKey(c)) {
                stack.push(map.get(c));
            } else if (stack.isEmpty() || stack.pop() != c) {
                return false;
            }
        }
        return stack.isEmpty();
    }
}
