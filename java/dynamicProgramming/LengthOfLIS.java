/**
 * 300. Longest Increasing Subsequence
 *
 * Given an integer array nums, return the length of the longest strictly increasing
 * subsequence.
 *
 * Example 1:
 * Input: nums = [10,9,2,5,3,7,101,18]
 * Output: 4
 * Explanation: The longest increasing subsequence is [2,3,7,101], therefore the
 * length is 4.
 * 
 * Constraints:
 * 1 <= nums.length <= 2500
 * -10^4 <= nums[i] <= 10^4
 */

package dynamicProgramming;

import java.util.Arrays;

public class LengthOfLIS {

    public static void main(String[] args) {
        int[] nums = {10,9,2,5,3,7,101,18};
        System.out.println("nums: " + Arrays.toString(nums));
        LengthOfLIS l = new LengthOfLIS();
        System.out.println("length: " + l.lengthOfLIS(nums));
    }

    /**
     * 用贪心算法结合二分搜索，在原数组上进行修改，从左往右遍历原数组，如果当前数字
     * 大于子数组的最后一个数字，则将该数字添加到数组最后面，否则在子数组中搜索大于
     * 等于该数字的最小数字，然后用该数字替换原数字，在数组最后面添加数字是为了获得
     * 更大长度，在数组上更新数字是为了将来更有可能获得更大长度
     */
    public int lengthOfLIS(int[] nums) {
        int n = 1;
        for (int i = 1, j = 1; i < nums.length; i++) {
            if (nums[n - 1] < nums[i]) {
                j = n;
                n++;
            } else {
                j = binarySearch(nums, 0, n - 1, nums[i]);
            }
            nums[j] = nums[i];
        }
        return n;
    }

    /**
     * 二分搜索大于等于目标值的最小元素
     */
    private int binarySearch(int[] nums, int left, int right, int target) {
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] >= target) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }

}
