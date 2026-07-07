/**
 * Given a string columnTitle that represents the column title as appears in an
 * Excel sheet, return its corresponding column number.
 * For example:
 * A -> 1
 * B -> 2
 * C -> 3
 * ...
 * Z -> 26
 * AA -> 27
 * AB -> 28 
 * ...
 * 
 * Example 1:
 * Input: columnTitle = "A"
 * Output: 1
 * 
 * Constraints:
 * 1 <= columnTitle.length <= 7
 * columnTitle consists only of uppercase English letters.
 * columnTitle is in the range ["A", "FXSHRXW"].
 */

package math;

public class TitleToNumber {

    public static void main(String[] args) {
        String columnTitle = "A";
        System.out.println("title: " + columnTitle);
        TitleToNumber t = new TitleToNumber();
        System.out.println("number: " + t.titleToNumber(columnTitle));
    }

    /**
     * 将26进制转换成10进制，从左往右遍历字符串，首先将字符转换成数字，然后将数字加
     * 到计算结果
     */
    public int titleToNumber(String columnTitle) {
        int num = 0;
        for (char c : columnTitle.toCharArray()) {
            num = num * 26 + (c - 'A' + 1);
        }
        return num;
    }

}
