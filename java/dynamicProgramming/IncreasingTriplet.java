/**
 * Given an integer array nums, return true if there exists a triple of indices
 * (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices
 * exists, return false.
 *
 * Example 1:
 * Input: nums = [1,2,3,4,5]
 * Output: true
 * Explanation: Any triplet where i < j < k is valid.
 * 
 * Constraints:
 * 1 <= nums.length <= 5 * 10^5
 * -2^31 <= nums[i] <= 2^31 - 1
 */

package dynamicProgramming;

import arrays.ArrayUtils;

public class IncreasingTriplet {

    public static void main(String[] args) {
        int[] nums = {1,2,3,4,5};
        ArrayUtils a = new ArrayUtils();
        a.printArray(nums);
        IncreasingTriplet i = new IncreasingTriplet();
        System.out.println("triple exists: " + i.increasingTriplet(nums));
    }

    /**
     * 使用贪心算法，要找到满足 min1 < min2 < min3 的三个数字，当 min2 存在的时候 min1
     * 必定存在，当 min3 存在的时候 min1 和 min2 必定存在，更新 min1 和 min2 是为了将
     * 来更快获得 min3
     */
    public boolean increasingTriplet(int[] nums) {
        if (nums.length < 3) {
            return false;
        }
        int min1 = Integer.MAX_VALUE;
        int min2 = min1;
        for (int n : nums) {
            if(n <= min1) {
                min1 = n;
            } else if (n <= min2) {
                min2 = n;
            } else {
                return true;
            }
        }
        return false;
    }

}
