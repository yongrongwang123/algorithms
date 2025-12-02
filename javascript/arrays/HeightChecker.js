/**
 * A school is trying to take an annual photo of all the students. The students
 * are asked to stand in a single file line in non-decreasing order by height.
 * Let this ordering be represented by the integer array expected where expected[i]
 * is the expected height of the ith student in line. You are given an integer array
 * heights representing the current order that the students are standing in. Each
 * heights[i] is the height of the ith student in line (0-indexed). Return the
 * number of indices where heights[i] != expected[i].
 *
 * Example 1:
 * Input: heights = [1,1,4,2,1,3]
 * Output: 3
 * Explanation:
 * heights:  [1,1,4,2,1,3]
 * expected: [1,1,1,2,3,4]
 * Indices 2, 4, and 5 do not match.
 *
 * Constraints:
 * 1 <= heights.length <= 100
 * 1 <= heights[i] <= 100
 */

/**
 * 采用计数排序，从左往右扫描数组，记录原数组中每个元素出现的频率存入一个新的数组，该新的数
 * 组下标对应原数组的元素值，然后再次从左往右扫描原数组，当遇到频率数组中非0的元素时，如果
 * 原数组当前元素不等于频率数组下标则找到一个位置不对的元素
 */
var heightChecker = function(heights) {
    let frequent = new Array(101).fill(0);
    let current = 0;
    let count = 0;

    for (let height of heights)
        frequent[height]++;
    for (let height of heights) {
        while (frequent[current] == 0)
            current++;
        if (height != current)
            count++;
        frequent[current]--;
    }

    return count;
}

let heights = [1,1,4,2,1,3];
console.log('input array: ' + heights);
console.log('count: ' + heightChecker(heights));
