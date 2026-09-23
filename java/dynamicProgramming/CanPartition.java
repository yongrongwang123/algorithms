/**
 * 416. Partition Equal Subset Sum
 *
 * Given an integer array nums, return true if you can partition the array into two
 * subsets such that the sum of the elements in both subsets is equal or false otherwise.
 *
 * Example 1:
 * Input: nums = [1,5,11,5]
 * Output: true
 * Explanation: The array can be partitioned as [1, 5, 5] and [11].
 * 
 * Constraints:
 * 1 <= nums.length <= 200
 * 1 <= nums[i] <= 100
 */

package dynamicProgramming;

import java.util.Arrays;

public class CanPartition {
    public static void main(String[] args) {
        int[] nums = {1,5,11,5};
        System.out.println("nums: " + Arrays.toString(nums));
        CanPartition c = new CanPartition();
        System.out.println("partitioned: " + c.canPartition(nums));
    }

    /**
     * 用动态规划，首先确定目标值为所有数字之和的一半，然后用数组存储结果，索引表示子集
     * 和，元素表示是否可以达到该子集和，一个都不选的时候可以达到子集和0，对于每一个数字
     * 可以选择添加或者不添加到子集和，当可以达到的子集和为目标值的时候直接返回，为了节
     * 省空间使用一维数组，为了访问左边的更新前的元素，从右往左更新dp数组
     */
    public boolean canPartition(int[] nums) {
        int n = 0;
        for (int num : nums) {
            n += num;
        }
        if (n % 2 == 1) {
            return false;
        }
        n /= 2;
        boolean[] dp = new boolean[n + 1];
        dp[0] = true;
        for (int i = 0; i < nums.length && nums[i] <= n && !dp[n]; i++) {
            for (int j = n; j >= nums[i]; j--) {
                dp[j] |= dp[j - nums[i]];
            }
        }
        return dp[n];
    }
}
