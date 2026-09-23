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

package backtrack;

import java.util.List;
import java.util.ArrayList;

public class LetterCombinations {

    public static void main(String[] args) {
        String digits = "23";
        System.out.println("digits: " + digits);
        LetterCombinations l = new LetterCombinations();
        System.out.println("combinations: " + l.letterCombinations(digits));
    }

    public List<String> letterCombinations(String digits) {
        String[] map = {"abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};
        List<String> list = new ArrayList<>();
        comb(list, new StringBuilder(), digits.toCharArray(), map, 0);
        return list;
    }

    /**
     * 对于数字对应的字符串，我们可以选择或者不选择当前字符，如果选择则添加字符到当前组
     * 合，如果不选择则不添加字符到当前组合，当组合长度达到数字长度的时候，就找到了一个
     * 合法的组合
     */
    private void comb(List<String> list, StringBuilder builder, char[] digits,
            String[] map, int start) {
        if (start == digits.length) {
            list.add(builder.toString());
            return;
        }
        String letters = map[digits[start] - '2'];
        for (char letter: letters.toCharArray()) {
            builder.append(letter);
            comb(list, builder, digits, map, start + 1);
            builder.deleteCharAt(builder.length() - 1);
        }
    }
}
