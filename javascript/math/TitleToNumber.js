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

/**
 * 将26进制转换成10进制，从左往右遍历字符串，首先将字符转换成数字，然后将数字加
 * 到计算结果
 */
var titleToNumber = function(columnTitle) {
    let num = 0;
    let a = 'A'.charCodeAt(0);
    for (let c of columnTitle) {
        num = num * 26 + (c.charCodeAt(0) - a + 1);
    }
    return num;
}

var main = function() {
    let columnTitle = 'A';
    console.log('title: ' + columnTitle);
    console.log('number: ' + titleToNumber(columnTitle));
}

main();
