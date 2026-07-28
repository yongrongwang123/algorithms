/**
 * 27. Remove Element
 *
 * Given an integer array nums and an integer val, remove all occurrences of val
 * in nums in-place. The order of the elements may be changed. Then return the number
 * of elements in nums which are not equal to val. Consider the number of elements
 * in nums which are not equal to val be k, to get accepted, you need to do the
 * following things:
 *  - Change the array nums such that the first k elements of nums contain the elements
 *    which are not equal to val. The remaining elements of nums are not important
 *    as well as the size of nums.
 *  - Return k.
 *
 * Example 1:
 * Input: nums = [3,2,2,3], val = 3
 * Output: 2, nums = [2,2,_,_]
 * Explanation: Your function should return k = 2, with the first two elements of
 * nums being 2. It does not matter what you leave beyond the returned k (hence
 * they are underscores).
 *
 * Constraints:
 * 0 <= nums.length <= 100
 * 0 <= nums[i] <= 50
 * 0 <= val <= 100
 */
package twoPointer;

import java.util.Arrays;

public class RemoveElement {

    public static void main(String[] args) {
        int[] nums = {2, 2, 3};
        int val = 3;
        System.out.println("nums: " + Arrays.toString(nums));
        System.out.println("val: " + val);
        RemoveElement r = new RemoveElement();
        int k = r.removeElement(nums, val);
        System.out.println("length: " + k);
        System.out.println("nums: " + Arrays.toString(Arrays.copyOfRange(nums, 0, k)));
    }

    /**
     * 从左往右扫描数组，将每次遇到的不等于val的元素放到数组的合适位置
     */
    public int removeElement(int[] nums, int val) {
        int i = 0;
        for (int num : nums) {
            if (num != val) {
                nums[i] = nums[i];
                i++;
            }
        }
        return i;
    }

}
