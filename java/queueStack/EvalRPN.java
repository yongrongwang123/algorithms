/**
 * 150. Evaluate Reverse Polish Notation
 *
 * You are given an array of strings tokens that represents an arithmetic expression
 * in a Reverse Polish Notation. Evaluate the expression. Return an integer that
 * represents the value of the expression. Note that:
 *  - The valid operators are '+', '-', '*', and '/'.
 *  - Each operand may be an integer or another expression.
 *  - The division between two integers always truncates toward zero.
 *  - There will not be any division by zero.
 *  - The input represents a valid arithmetic expression in a reverse polish notation.
 *  - The answer and all the intermediate calculations can be represented in a 32-bit
 *    integer.
 * 
 * Example 1:
 * Input: tokens = ["2","1","+","3","*"]
 * Output: 9
 * Explanation: ((2 + 1) * 3) = 9
 * 
 * Constraints:
 * 1 <= tokens.length <= 10^4
 * tokens[i] is either an operator: "+", "-", "*", or "/", or an integer in the 
 * range [-200, 200].
 */

package queueStack;

import java.util.ArrayDeque;
import java.util.Deque;

public class EvalRPN {

    public static void main(String[] args) {
        String[] tokens = {"2","1","+","3","*"};
        System.out.println("tokens: " + tokens);;
        EvalRPN e = new EvalRPN();
        System.out.println("answer: " + e.evalRPN(tokens));;
    }

    /**
     * 遍历整个数组，如果是数字则压入栈中，如果是符号则从栈中弹出两个数字，先弹出的放右边，后弹出
     * 的放左边，符号放中间，计算结果压入栈中，最后弹出栈中唯一的数字作为最终计算结果
     */
    public int evalRPN(String[] tokens) {
        Deque<Integer> stack = new ArrayDeque<>();
        String operators = "+-*/";
        for (int i = 0; i < tokens.length; i++) {
            if (operators.contains(tokens[i])) {
                int num1 = stack.pop();
                int num2 = stack.pop();
                if (tokens[i].equals("+")) {
                    stack.push(num2 + num1);
                } else if (tokens[i].equals("-")) {
                    stack.push(num2 - num1);
                } else if (tokens[i].equals("*")) {
                    stack.push(num2 * num1);
                } else if (tokens[i].equals("/")) {
                    stack.push(num2 / num1);
                } 
            } else {
                stack.push(Integer.parseInt(tokens[i]));
            }
        }
        return stack.pop();
    }

}
