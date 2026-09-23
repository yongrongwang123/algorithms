/**
 * 152. Maximum Product Subarray
 *
 * Given an integer array nums, find a subarray that has the largest product, and
 * return the product. The test cases are generated so that the answer will fit in
 * a 32-bit integer. Note that the product of an array with a single element is the
 * value of that element.
 * 
 * Example 1:
 * Input: nums = [2,3,-2,4]
 * Output: 6
 * Explanation: [2,3] has the largest product 6.
 * 
 * Constraints:
 * 1 <= nums.length <= 2 * 10^4
 * -10 <= nums[i] <= 10
 * The product of any subarray of nums is guaranteed to fit in a 32-bit integer.
 */

package dynamicProgramming;

import java.util.Arrays;

public class MaxProduct {
    public static void main(String[] args) {
        int[] nums = {2,3,-2,4};
        System.out.println("nums: " + Arrays.toString(nums));
        MaxProduct m = new MaxProduct();
        System.out.println("product: " + m.maxProduct(nums));
    }

    /**
     * 要得到最大子数组之积，使用动态规划，局部最优解中选择最大的得到全局最优解，如果之前
     * 子数组之积为0就重新开始子数组，否则就保持起点不变，如果负数个数为偶数，则可以包含
     * 所有负数和正数，否则不能包含最右边的负数及其右边的数字，或者最左边的负数及其左边的
     * 数字，通过前缀积和后缀积来找到两边最大值
     */
    public int maxProduct(int[] nums) {
        int n = nums.length;
        int left = nums[0];
        int right = nums[n - 1];
        int max = (left >= right ? left : right);
        for (int i = 1; i < n; i++) {
            left = (left != 0 ? left : 1);
            left *= nums[i];
            right = (right != 0 ? right : 1);
            right *= nums[n - 1 - i];
            max = (max >= left ? max : left);
            max = (max >= right ? max : right);
        }
        return max;
    }
}
