/**
 * 26. Remove Duplicates from Sorted Array
 *
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates
 * in-place such that each unique element appears only once. The relative order of
 * the elements should be kept the same. Consider the number of unique elements in
 * nums to be k. After removing duplicates, return the number of unique elements k.
 * The first k elements of nums should contain the unique numbers in sorted order.
 * The remaining elements beyond index k - 1 can be ignored.
 *
 * Example 1:
 * Input: nums = [1,1,2]
 * Output: 2, nums = [1,2,_]
 * Explanation: Your function should return k = 2, with the first two elements
 * of nums being 1 and 2 respectively. It does not matter what you leave beyond
 * the returned k (hence they are underscores).
 *
 * Constraints:
 * 0 <= nums.length <= 3 * 104
 * -100 <= nums[i] <= 100
 * nums is sorted in non-decreasing order.
 */
package twoPointer;

import java.util.Arrays;

public class RemoveDuplicates {

    public static void main(String[] args) {
        int[] nums = {1,1,2};
        System.out.println("nums: " + Arrays.toString(nums));
        RemoveDuplicates r = new RemoveDuplicates();
        int k = r.removeDuplicates(nums);
        System.out.println("length: " + k);
        System.out.println("nums: " + Arrays.toString(Arrays.copyOfRange(nums, 0, k)));
    }

    /**
     * 从左往右扫描数组，当前元素小于等于目标数组的最后一个元素的时候，就一直向右滑动指针，直到
     * 大于的时候保存当前元素
     */
    public int removeDuplicates(int[] nums) {
        int j = 0;
        for (int num : nums) {
            if (j == 0 || num > nums[j - 1]) {
                nums[j] = num;
                j++;
            }
        }
        return j;
    }

}
