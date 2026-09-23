/**
 * 42. Trapping Rain Water
 *
 * Given n non-negative integers representing an elevation map where the width of
 * each bar is 1, compute how much water it can trap after raining.
 *
 * Example 1:
 * Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 * Explanation: The above elevation map (black section) is represented by array
 * [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section)
 * are being trapped.
 * 
 * Constraints:
 * n == height.length
 * 1 <= n <= 2 * 10^4
 * 0 <= height[i] <= 10^5
 */

package twoPointer;

import java.util.Arrays;

public class Trap {
    public static void main(String[] args) {
        int[] height = {0,1,0,2,1,0,1,3,2,1,2,1};
        System.out.println("height: " + Arrays.toString(height));
        Trap t = new Trap();
        System.out.println("area: " + t.trap(height));
    }

    /**
     * 用两个指针从两边向中间扫描，每次只移动高度较小的那个指针，首先保存两边的
     * 最大高度，然后用最大高度减去当前高度得到当前点面积，最后将当前点面积累加
     * 到最后结果
     */
    public int trap(int[] height) {
        int area = 0;
        int max1 = 0;
        int max2 = 0;
        for (int i = 0, j = height.length - 1; i < j;) {
            if (height[i] < height[j]) {
                max1 = (max1 >= height[i] ? max1 : height[i]);
                area += max1 - height[i];
                i++;
            } else {
                max2 = (max2 >= height[j] ? max2 : height[j]);
                area += max2 - height[j];
                j--;
            }
        }
        return area;
    }
}
