package sort;
import java.util.Arrays;

/**
 * Given an integer array nums, return the maximum difference between two successive
 * elements in its sorted form. If the array contains less than two elements, return
 * 0. You must write an algorithm that runs in linear time and uses linear extra
 * space.
 *
 * Example 1:
 * Input: nums = [3,6,9,1]
 * Output: 3
 * Explanation: The sorted form of the array is [1,3,6,9], either (3,6) or (6,9)
 * has the maximum difference 3.
 *
 * Constraints:
 * 1 <= nums.length <= 10^5
 * 0 <= nums[i] <= 10^9
 */

public class MaximumGap {
    public static void main(String[] args) {
        int[] nums = {3,6,9,1};
        System.out.println(Arrays.toString(nums));
        MaximumGap m = new MaximumGap();
        System.out.println(m.maximumGap(nums));
    }

    /**
     * 桶排序：假设数组中最大值和最小值是 max 和 min，数组长度是 n，则最大间隙大于等于
     * ceiling[(max-min)/(n-1)]，将其作为桶大小，所有数字分成 n 个桶，每个桶中只需要
     * 存储桶中的最大值和最小值，最后只需要计算当前桶中的最小值和上一个桶中的最大值
     * 的差值
     */
    public int maximumGap(int[] nums) {
        int min = nums[0];
        int max = nums[0];
        for (int num : nums) {
            min = Math.min(min, num);
            max = Math.max(max, num);
        }
        if (min == max) {
            return 0;
        }
        int n = nums.length;
        int gap = (int)Math.ceil((double)(max - min) / (n - 1));
        int maxGap = gap;
        int[] minBucket = new int[n];
        int[] maxBucket = new int[n];
        Arrays.fill(minBucket, Integer.MAX_VALUE);
        Arrays.fill(maxBucket, Integer.MIN_VALUE);

        for (int num : nums) {
            int index = (num - min) / gap;
            minBucket[index] = Math.min(minBucket[index], num);
            maxBucket[index] = Math.max(maxBucket[index], num);
        }
        for (int i = 1, previous = maxBucket[0]; i < n; i++) {
            if (minBucket[i] == Integer.MAX_VALUE) {
                continue;
            }
            maxGap = Math.max(maxGap, minBucket[i] - previous);
            previous = maxBucket[i];
        }

        return maxGap;
    }
}
