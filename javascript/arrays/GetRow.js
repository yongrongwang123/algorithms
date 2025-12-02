/**
 * 119. Pascal's Triangle II
 *
 * Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's
 * triangle. In Pascal's triangle, each number is the sum of the two numbers directly
 * above it as shown:
 *
 * Example 1:
 * Input: rowIndex = 3
 * Output: [1,3,3,1]
 *
 * Constraints:
 * 0 <= rowIndex <= 33
 */

/**
 * 先初始化一个长度为rowIndex+1的数组，并且设置全部元素为1，然后计算每一行数据。针对
 * 每一行数据，从倒数第二个元素往前直到第二个元素，每个元素设置为当前元素值和前一个
 * 元素值之和
 */
var getRow = function(rowIndex) {
    let rows = new Array(rowIndex + 1).fill(1);
    for (let i = 0; i <= rowIndex; i++) {
        for (let j = i - 1; j >= 1; j--) {
            rows[j] += rows[j - 1];
        }
    }
    return rows;
}

var main = function() {
    let rowIndex = 3;
    console.log('row index: ' + rowIndex);
    console.log('rows: ' + getRow(rowIndex));
}

main();
