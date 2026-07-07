/**
 * Given an array nums containing n distinct numbers in the range [0, n], return
 * the only number in the range that is missing from the array.
 *
 * Example 1:
 * Input: nums = [3,0,1]
 * Output: 2
 * Explanation:
 * n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is
 * the missing number in the range since it does not appear in nums.
 * 
 * Constraints:
 * n == nums.length
 * 1 <= n <= 10^4
 * 0 <= nums[i] <= n
 * All the numbers of nums are unique.
 */

package math;

import arrays.ArrayUtils;

public class MissingNumber {

    public static void main(String[] args) {
        int[] nums = {3,0,1};
        ArrayUtils a = new ArrayUtils();
        a.printArray(nums);
        MissingNumber m = new MissingNumber();
        System.out.println("num: " + m.missingNumber(nums));
    }

    /**
     * 异或有交换律和结合律，所以 b^a^b = a^b^b = a^(b^b) = a，对数组所有索引和
     * 数值都进行异或操作，最后计算的结果就是缺少的数字
     */
    public int missingNumber(int[] nums) {
        int num = nums.length;
        for (int i = 0; i < nums.length; i++) {
            num ^= i ^ nums[i];
        }
        return num;
    }

}
