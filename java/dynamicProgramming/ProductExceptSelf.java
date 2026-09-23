/**
 * 238. Product of Array Except Self
 *
 * Given an integer array nums, return an array answer such that answer[i] is equal
 * to the product of all the elements of nums except nums[i]. The product of any
 * prefix or suffix of nums is guaranteed to fit in a 32-bit integer. You must write
 * an algorithm that runs in O(n) time and without using the division operation.
 * 
 * Example 1:
 * Input: nums = [1,2,3,4]
 * Output: [24,12,8,6]
 * 
 * Constraints:
 * 2 <= nums.length <= 10^5
 * -30 <= nums[i] <= 30
 * The input is generated such that answer[i] is guaranteed to fit in a 32-bit integer.
 */

package dynamicProgramming;

import java.util.Arrays;

public class ProductExceptSelf {
    public static void main(String[] args) {
        int[] nums = {1,2,3,4};
        System.out.println("nums: " + Arrays.toString(nums));
        ProductExceptSelf p = new ProductExceptSelf();
        System.out.println("products: " + Arrays.toString(p.productExceptSelf(nums)));
    }

    /**
     * 当前数字以外的其它数字之积等于左边数字之积乘上右边数字之积，从左往右遍历数组，计算
     * 每个数字的前缀积，从右往左遍历数组，计算每个数字的后缀积，并且乘上前缀积
     */
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int[] prods = new int[n];
        int last = 1;
        for (int i = 0; i < n; i++) {
            prods[i] = last;
            last *= nums[i];
        }
        last = 1;
        for (int i = n - 1; i >= 0; i--) {
            prods[i] *= last;
            last *= nums[i];
        }
        return prods;
    }
}
