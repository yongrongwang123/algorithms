/**
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
 * 循环利用每一行结果，每次先在行首插入1，然后从索引1开始从左往右扫描，每个元素设置为该元素
 * 和后一个元素之和，最后复制这一行结果后加入数组
 */
var generate = function(numRows) {
    let row = [];
    let rows = [];

    for (let i = 0; i < numRows; i++) {
        row.unshift(1);
        for (let j = 1; j < row.length - 1; j++)
            row[j] = row[j] + row[j + 1];
        rows.push([...row]);
    }

    return rows;
}

let numRows = 5;
console.log('numRows: ' + numRows);
console.log('output array: ' + generate(numRows));
