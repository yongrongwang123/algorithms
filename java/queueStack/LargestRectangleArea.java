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

package queueStack;

import java.util.Stack;
import java.util.Arrays;

public class LargestRectangleArea {

    public static void main(String[] args) {
        int[] heights = {2,1,5,6,2,3};
        LargestRectangleArea l = new LargestRectangleArea();
        System.out.println("max area: " + l.largestRectangleArea(heights));
    }

    /**
     * 关键是要获取左右边界，使用一个堆栈存储数组索引，索引对应的元素必须是非递减的，
     * 如果当前元素不小于前一个元素则只需要存储索引，否则还要从堆栈中弹出大于当前
     * 元素的元素索引，高度对应的是弹出的元素索引，右边界是当前元素索引，左边界是
     * 弹出元素后的栈顶元素索引，高度数组中添加0是为了方便清空堆栈，堆栈中添加-1是
     * 为了方便计算宽度
     */
    public int largestRectangleArea(int[] heights) {
        int[] heights2 = Arrays.copyOf(heights, heights.length + 1);
        heights2[heights2.length - 1] = 0;
        Stack<Integer> stack = new Stack<Integer>();
        stack.push(-1);
        int max = 0;
        for (int i = 0; i < heights2.length; i++) {
            while (stack.size() > 1 && heights2[i] < heights2[stack.peek()]) {
                int h = heights2[stack.pop()];
                int w = i - stack.peek() - 1;
                int area = h * w;
                max = (area <= max ? max : area);
            }
            stack.push(i);
        }
        return max;
    }

}
