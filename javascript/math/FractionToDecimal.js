/**
 * 166. Fraction to Recurring Decimal
 *
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

/**
 * 要判断当前小数是否循环，需要存储每一位的余数和索引，如果余数没有遇到过，先将
 * 余数乘以10倍后除以除数得到商，然后添加商到结果，如果余数遇到过，先找到对应的
 * 索引，然后添加括号到结果
 */
var fractionToDecimal = function(numerator, denominator) {
    if (!numerator) {
        return '0';
    }
    let builder = [];
    if ((numerator > 0) != (denominator > 0)) {
        builder.push('-');
    }
    let n = (numerator > 0 ? numerator : -numerator);
    let d = (denominator > 0 ? denominator : -denominator);
    builder.push(Math.floor(n / d));
    n %= d;
    if (!n) {
        return builder.join('');
    }
    builder.push('.');
    let map = new Map();
    for (; n; n %= d) {
        if (map.get(n)) {
            builder.splice(map.get(n), 0, '(');
            builder.push(')');
            return builder.join('');
        }
        map.set(n, builder.length);
        n *= 10;
        builder.push(Math.floor(n / d));
    }
    return builder.join('');
}

var main = function() {
    let numerator = 1;
    let denominator = 2;
    console.log('n: ' + numerator + ', d: ' + denominator);
    console.log('f: ' + fractionToDecimal(numerator, denominator));
}

main();
