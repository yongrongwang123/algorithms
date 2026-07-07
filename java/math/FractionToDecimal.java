/**
 * Given two integers representing the numerator and denominator of a fraction,
 * return the fraction in string format. If the fractional part is repeating, enclose
 * the repeating part in parentheses. If multiple answers are possible, return
 * any of them. It is guaranteed that the length of the answer string is less than
 * 104 for all the given inputs. Note that if the fraction can be represented as
 * a finite length string, you must return it.
 * 
 * Example 1:
 * Input: numerator = 1, denominator = 2
 * Output: "0.5"
 * 
 * Constraints:
 * -2^31 <= numerator, denominator <= 2^31 - 1
 * denominator != 0
 */

package math;

import java.util.HashMap;
import java.util.Map;

public class FractionToDecimal {

    public static void main(String[] args) {
        int numerator = 1;
        int denominator = 2;
        System.out.println("n: " + numerator + ", d: " + denominator);
        FractionToDecimal f = new FractionToDecimal();
        System.out.println("f: " + f.fractionToDecimal(numerator, denominator));
    }

    /**
     * 要判断当前小数是否循环，需要存储每一位的余数和索引，如果余数没有遇到过，先将
     * 余数乘以10倍后除以除数得到商，然后添加商到结果，如果余数遇到过，先找到对应的
     * 索引，然后添加括号到结果
     */
    public String fractionToDecimal(int numerator, int denominator) {
        if (numerator == 0) {
            return "0";
        }
        StringBuilder sb = new StringBuilder();
        if ((numerator > 0) != (denominator > 0)) {
            sb.append("-");
        }
        long n = (numerator > 0 ? numerator : -(long)numerator);
        long d = (denominator > 0 ? denominator : -(long)denominator);
        sb.append(n / d);
        n %= d;
        if (n == 0) {
            return sb.toString();
        }
        sb.append(".");
        Map<Long, Integer> map = new HashMap<>();
        for (; n != 0; n %= d) {
            if (map.containsKey(n)) {
                sb.insert(map.get(n), "(");
                sb.append(")");
                return sb.toString();
            }
            map.put(n, sb.length());
            n *= 10;
            sb.append(n / d);
        }
        return sb.toString();
    }

}
