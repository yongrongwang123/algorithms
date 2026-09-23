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

package queueStack;

import java.util.ArrayDeque;
import java.util.Deque;

public class LongestValidParentheses {
    public static void main(String[] args) {
        String s = "(()";
        System.out.println("s: " + s);
        LongestValidParentheses l = new LongestValidParentheses();
        System.out.println("longest: " + l.longestValidParentheses(s));
    }

    /**
     * 关键是获取左边界，用不匹配的右括号索引作为左边界，开始的时候用-1作为左边界。从左
     * 往右遍历字符串，如果是左括号则压入索引到堆栈，如果是右括号则从堆栈中弹出索引。如
     * 果弹出后堆栈为空，则压入索引作为左边界，如果弹出后堆栈不为空，则用当前索引减去栈
     * 顶索引获得当前长度，最后从所有长度中获得最大长度
     */
    public int longestValidParentheses(String s) {
        int max = 0;
        Deque<Integer> stack = new ArrayDeque<>();        
        stack.push(-1);
        char[] ch = s.toCharArray();
        for (int i = 0; i < ch.length; i++) {
            if (ch[i] == '(') {
                stack.push(i);
            } else {
                stack.pop();
                if (stack.isEmpty()) {
                    stack.push(i);
                } else {
                    int len = i - stack.peek();
                    max = (max >= len ? max : len);
                }
            }
        }
        return max;
    }
}
