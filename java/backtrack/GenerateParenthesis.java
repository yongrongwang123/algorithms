/**
 * 22. Generate Parentheses
 *
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

package backtrack;

import java.util.ArrayList;
import java.util.List;

public class GenerateParenthesis {

    public static void main(String[] args) {
        int n = 3;
        System.out.println("n: " + n);
        GenerateParenthesis g = new GenerateParenthesis();
        System.out.println("parenthesis: " + g.generateParenthesis(n));
    }

    public List<String> generateParenthesis(int n) {
        List<String> list = new ArrayList<>();
        generate(list, new StringBuilder(), n, n);
        return list;
    }

    /**
     * 用 left 和 right 分别表示左括号和右括号剩下的个数，当 left>0 说明可以拼接一个
     * 左括号，当 right>left 说明可以拼接一个右括号，当 left 和 right 都为0的时候，
     * 将当前拼接的字符串添加到结果中，并且进行回溯
     */
    private void generate(List<String> list, StringBuilder builder, int left, int right) {
        if (right == 0) {
            list.add(builder.toString());
            return;
        }
        if (left > 0) {
            builder.append('(');
            generate(list, builder, left - 1, right);
            builder.deleteCharAt(builder.length() - 1);
        }
        if (right > left) {
            builder.append(')');
            generate(list, builder, left, right - 1);
            builder.deleteCharAt(builder.length() - 1);
        }
    }

}
