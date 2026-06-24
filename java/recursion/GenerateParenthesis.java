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

package recursion;

import java.util.ArrayList;
import java.util.List;

public class GenerateParenthesis {

    public static void main(String[] args) {
        int n = 3;
        System.out.println("n: " + n);
        GenerateParenthesis g = new GenerateParenthesis();
        List<String> list = g.generateParenthesis(n);
        list.forEach(s -> System.out.println(s));
    }

    public List<String> generateParenthesis(int n) {
        List<String> list = new ArrayList<String>();
        helper(list, "", n, n);
        return list;
    }

    /**
     * 用 left 和 right 分别表示左括号和右括号剩下的个数，当 left>0 说明可以拼接一个
     * 左括号，当 right>left 说明可以拼接一个右括号，当 left 和 right 都为0的时候，
     * 将当前拼接的字符串添加到结果中，并且进行回溯
     */
    private void helper(List<String> list, String str, int left, int right) {
        if (left == 0 && right == 0) {
            list.add(str);
            return;
        }
        if (left > 0) {
            helper(list, str + "(", left - 1, right);
        }
        if (right > left) {
            helper(list, str + ")", left, right - 1);
        }
    }

}
