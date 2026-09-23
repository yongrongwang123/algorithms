/**
 * 56. Merge Intervals
 *
 * Given an array of intervals where intervals[i] = [start_i, end_i], merge all overlapping
 * intervals, and return an array of the non-overlapping intervals that cover all
 * the intervals in the input.
 *
 * Example 1:
 * Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
 * 
 * Constraints:
 * 1 <= intervals.length <= 10^4
 * intervals[i].length == 2
 * 0 <= start_i <= end_i <= 10^4
 */

/**
 * 在原数组上进行修改，首先进行排序，然后从左往右遍历数组，每次遇到一个间隔，就
 * 比较当前间隔的起点和上一个间隔的终点，如果前者小于等于后者，则选择两个间隔终
 * 点较大的作为新的终点，否则添加当前间隔到结果中
 */
var merge = function(intervals) {
    int n = intervals.length;
    if (n <= 1) {
        return intervals;
    }
    intervals.sort((a, b) => a[0] - b[0]);
    let cur = intervals[0];
    let pre = cur;
    let j = 1;
    for (let i = 1; i < n; i++) {
        cur = intervals[i];
        if (pre[1] >= cur[0]) {
            pre[1] = (pre[1] >= cur[1] ? pre[1] : cur[1]);
        } else {
            intervals[j] = cur;
            j++;
            pre = cur;
        }
    }
    intervals.length = j;
    return intervals;
}

var main = function() {
    let intervals = [[1,3],[2,6],[8,10],[15,18]];
    console.log('intervals: ' + JSON.stringify(intervals));
    console.log('merged: ' + JSON.stringify(merge(intervals)));
}

main();
