/**
 * 560. Subarray Sum Equals K
 *
 * Given an array of integers nums and an integer k, return the total number of
 * subarrays whose sum equals to k. A subarray is a contiguous non-empty sequence
 * of elements within an array.
 * 
 * Example 1:
 * Input: nums = [1,1,1], k = 2
 * Output: 2
 * 
 * Constraints:
 * 1 <= nums.length <= 2 * 10^4
 * -1000 <= nums[i] <= 1000
 * -10^7 <= k <= 10^7
 */

package hashTable;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class SubarraySum {
    public static void main(String[] args) {
        int[] nums = {1,1,1};
        int k = 2;
        System.out.println("nums: " + Arrays.toString(nums));
        System.out.println("k: " + k);
        SubarraySum s = new SubarraySum();
        System.out.println("sum: " + s.subarraySum(nums, k));
    }

    /**
     * 因为有负数，所以不能用滑动窗口，用前缀和以及 map，遍历数组，存储每个位置的前缀和跟
     * 对应出现的次数，假设存在两个位置的前缀和 sum1 和 sum2，满足条件 sum1 - sum2 = k，
     * 也就是当 map 中存在 sum2 = sum1 - k 的时候，找到了合法的连续序列，将它出现的次数
     * 加到最终结果
     */
    public int subarraySum(int[] nums, int k) {
        int count = 0;
        int sum = 0;
        Map<Integer, Integer> map = new HashMap<>();
        map.put(sum, 1);
        for (int num : nums) {
            sum += num;
            count += map.getOrDefault(sum - k, 0);
            map.put(sum, map.getOrDefault(sum, 0) + 1);
        }
        return count;
    }
}
