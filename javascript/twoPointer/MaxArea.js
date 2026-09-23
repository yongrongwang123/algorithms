/**
 * 11. Container With Most Water
 *
 * You are given an integer array height of length n. There are n vertical lines
 * drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 * Find two lines that together with the x-axis form a container, such that the
 * container contains the most water. Return the maximum amount of water a container
 * can store. Notice that you may not slant the container.
 * 
 * Example 1:
 * Input: height = [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
 * In this case, the max area of water (blue section) the container can contain is 49.
 * 
 * Constraints:
 * n == height.length
 * 2 <= n <= 10^5
 * 0 <= height[i] <= 10^4
 */

/**
 * 用两个指针从两边向中间扫描，每次只移动高度较小的那个指针，首先计算此时面积，然后
 * 更新最大面积，因为以该指针为一边的其它组合必然小于此时两个指针之间的面积，所以
 * 可以排除这些组合
 */
var maxArea = function(height) {
    let max = 0;
    let area = 0;
    for (let i = 0, j = height.length - 1; i < j;) {
        if (height[i] < height[j]) {
            area = height[i] * (j - i);
            i++;
        } else {
            area = height[j] * (j - i);
            j--;
        }
        max = (max >= area ? max : area);
    }
    return max;
};

var main = function() {
    let height = [1,8,6,2,5,4,8,3,7];
    console.log('height: ' + height);
    console.log('area: ' + maxArea(height));
};

main();
