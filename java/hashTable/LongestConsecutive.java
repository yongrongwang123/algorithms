/**
 * 128. Longest Consecutive Sequence
 *
 * Given an unsorted array of integers nums, return the length of the longest
 * consecutive elements sequence. You must write an algorithm that runs in O(n) time.
 * 
 * Example 1:
 * Input: nums = [100,4,200,1,3,2]
 * Output: 4
 * Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore
 * its length is 4.
 * 
 * Constraints:
 * 0 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 */

package hashTable;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class LongestConsecutive {
    public static void main(String[] args) {
        int[] nums = {100,4,200,1,3,2};
        System.out.println("nums: " + Arrays.toString(nums));
        LongestConsecutive l = new LongestConsecutive();
        System.out.println("longest: " + l.longestConsecutive(nums));
    }

    /**
     * 将所有数字存储到 set 中，遍历 set 中每个数字，首先找到连续序列的起点，然后找到
     * 连续序列的终点，最后更新连续序列的最大长度
     */
    public int longestConsecutive(int[] nums) {
        Set<Integer> set = toSet(nums);
        int longest = 0;
        for (int num1 : set) {
            if (set.contains(num1 - 1)) {
                continue;
            }
            int num2 = num1 + 1;
            for (; set.contains(num2); num2++) {}
            int diff = num2 - num1;
            longest = (longest >= diff ? longest : diff);
        }
        return longest;
    }

    private Set<Integer> toSet(int[] nums) {
        Set<Integer> set = new HashSet<>();
        for (int num : nums) {
            set.add(num);
        }
        return set;
    }
}
