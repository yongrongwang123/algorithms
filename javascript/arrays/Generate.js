/**
 * 118. Pascal's Triangle
 *
 * Given an integer numRows, return the first numRows of Pascal's triangle. In
 * Pascal's triangle, each number is the sum of the two numbers directly above it
 * as shown:
 *
 * Example 1:
 * Input: numRows = 5
 * Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 *
 * Constraints:
 * 1 <= numRows <= 30
 */

/**
 * 循环利用每一行结果，每次先在最后添加1，然后从倒数第二个元素往前直到第二个元素，
 * 每个元素设置为该元素和前一个元素之和，最后复制这一行结果后加入数组
 */
var generate = function(numRows) {
    let row = [];
    let rows = [];
    for (let i = 1; i <= numRows; i++) {
        row.push(1);
        for (let j = i - 2; j >= 1; j--) {
            row[j] += row[j - 1];
        }
        rows.push([...row]);
    }
    return rows;
}

var main = function() {
    let numRows = 5;
    console.log('num rows: ' + numRows);
    console.log('rows: ' + JSON.stringify(generate(numRows)));
}

main();
