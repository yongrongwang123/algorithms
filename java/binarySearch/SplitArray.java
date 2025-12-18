/**
 * 410. Split Array Largest Sum
 *
 * Given an integer array nums and an integer k, split nums into k non-empty subarrays
 * such that the largest sum of any subarray is minimized. Return the minimized
 * largest sum of the split. A subarray is a contiguous part of the array.
 * 
 * Example 1:
 * Input: nums = [7,2,5,10,8], k = 2
 * Output: 18
 * Explanation:
 * There are four ways to split nums into two subarrays.
 * The best way is to split it into [7,2,5] and [10,8],
 * where the largest sum among the two subarrays is only 18.
 * 
 * Constraints:
 * 1 <= nums.length <= 1000
 * 0 <= nums[i] <= 106
 * 1 <= k <= min(50, nums.length)
 */

package binarySearch;

import java.util.Arrays;

public class SplitArray {

    public static void main(String[] args) {
        int[] nums = {7,2,5,10,8};
        int k = 1;
        System.out.println("nums: " + Arrays.toString(nums));
        System.out.println("k: " + k);
        SplitArray s = new SplitArray();
        System.out.println("sum: " + s.splitArray(nums, k));
    }
    
    /**
     * 在最大元素到所有元素之和之间进行二分搜索，每次针对一个给定的元素之和，使用贪心算法来缩小
     * 左右边界，判断是否能将原数组分成大于等于k个子数组，如果可以的话，说明当前给定的元素之和
     * 过小，则搜索右半部分，如果不可以的话，说明当前给定的元素之和过大，则搜素左半部分
     */
    public int splitArray(int[] nums, int k) {
        long left = 0;
        long right = 0;
        for (int num : nums) {
            left = (left >= num ? left : num);
            right += num;
        }
        while (left < right) {
            long mid = left + (right - left) / 2;
            if (validate(nums, mid, k)) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return (int)left;
    }
    
    /**
     * 验证是否可以将数组分成大于等于k个子数组，且每个子数组的元素之和小于等于目标
     * 值，如果可以则返回true
     */
    private boolean validate(int[] nums, long target, int k) {
        long sum = 0;
        for (int num : nums) {
            sum += num;
            if (sum > target) {
                sum = num;
                k--;
                if (k == 0) {
                    return true;
                }
            }
        }
        return false;
    }

}
