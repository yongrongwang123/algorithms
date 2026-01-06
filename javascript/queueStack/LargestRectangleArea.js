/**
 * Given an array of integers heights representing the histogram's bar height where
 * the width of each bar is 1, return the area of the largest rectangle in the histogram.
 *
 * Example 1:
 * Input: heights = [2,1,5,6,2,3]
 * Output: 10
 * Explanation: The above is a histogram where width of each bar is 1. The largest
 * rectangle is shown in the red area, which has an area = 10 units.
 *
 * Constraints:
 * 1 <= heights.length <= 10^5
 * 0 <= heights[i] <= 10^4
 */

/**
 * 关键是要获取左右边界，使用一个堆栈存储数组索引，索引对应的元素必须是非递减的，
 * 如果当前元素不小于前一个元素则只需要存储索引，否则还要从堆栈中弹出大于当前
 * 元素的元素索引，高度对应的是弹出的元素索引，右边界是当前元素索引，左边界是
 * 弹出元素后的栈顶元素索引，高度数组中添加0是为了方便清空堆栈，堆栈中添加-1是
 * 为了方便计算宽度
 */
var largestRectangleArea = function(heights) {
    heights.push(0);
    let stack = [-1];
    let max = 0;
    for (let i = 0; i < heights.length; i++) {
        while (stack.length > 1 && heights[i] < heights[stack[stack.length - 1]]) {
            let h = heights[stack.pop()];
            let w = i - stack[stack.length - 1] - 1;
            let area = h * w;
            max = (area <= max ? max : area);
        }
        stack.push(i);
    }
    heights.pop();
    return max;
}

var main = function() {
    let heights = [2,1,5,6,2,3];
    console.log('heights: ' + heights);
    console.log('max area: ' + largestRectangleArea(heights));
}

main();
