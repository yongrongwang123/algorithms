/**
 * 41. First Missing Positive
 *
 * Given an unsorted integer array nums. Return the smallest positive integer that
 * is not present in nums. You must implement an algorithm that runs in O(n) time
 * and uses O(1) auxiliary space.
 * 
 * Example 1:
 * Input: nums = [1,2,0]
 * Output: 3
 * Explanation: The numbers in the range [1,2] are all in the array.
 * 
 * Constraints:
 * 1 <= nums.length <= 10^5
 * -2^31 <= nums[i] <= 2^31 - 1
 */

package hashTable;

import java.util.Arrays;

public class FirstMissingPositive {
    public static void main(String[] args) {
        int[] nums = {1,2,0};
        System.out.println("nums: " + Arrays.toString(nums));
        FirstMissingPositive f = new FirstMissingPositive();
        System.out.println("missing: " + f.firstMissingPositive(nums));
    }

    /**
     * 首先遍历数组，按照桶排序将数字 n 放在索引 n + 1，然后再遍历一次数组，找到第一个
     * 不在其位的数字，返回它的索引
     */
    public int firstMissingPositive(int[] nums) {
        int n = nums.length;
        for (int i = 0; i < n; i++) {
            int j = nums[i];
            while (j > 0 && j <= n && j != nums[j - 1]) {
                int t = nums[j - 1];
                nums[j - 1] = j;
                j = t;
            }
        }
        for (int i = 0; i < n; i++) {
            if (i + 1 != nums[i]) {
                return i + 1;
            }
        }
        return n + 1;
    }
}
