/**
 * 485. Max Consecutive Ones
 *
 * Given a binary array nums, return the maximum number of consecutive 1's in the array.
 *
 * Example 1:
 * Input: nums = [1,1,0,1,1,1]
 * Output: 3
 * Explanation: The first two digits or the last three digits are consecutive 1s.
 * The maximum number of consecutive 1s is 3.
 *
 * Constraints:
 * 1 <= nums.length <= 10^5
 * nums[i] is either 0 or 1.
 */
package twoPointer;

import java.util.Arrays;

public class FindMaxConsecutiveOnes {

    public static void main(String[] args) {
        int[] nums = {1,0,1,1,0,1};
        System.out.println("nums: " + Arrays.toString(nums));
        FindMaxConsecutiveOnes f = new FindMaxConsecutiveOnes();
        System.out.println("max: " + f.findMaxConsecutiveOnes(nums));
    }

    public int findMaxConsecutiveOnes(int[] nums) {
        int max = 0;
        int count = 0;
        for (int num : nums) {
            if (num == 1) {
                count++;
                if (count > max) {
                    max = count;
                }
            } else {
                count = 0;
            }
        }
        return max;
    }

}
