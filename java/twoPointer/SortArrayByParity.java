/**
 * 905. Sort Array By Parity
 *
 * Given an integer array nums, move all the even integers at the beginning of
 * the array followed by all the odd integers. Return any array that satisfies
 * this condition.
 *
 * Example 1:
 * Input: nums = [3,1,2,4]
 * Output: [2,4,3,1]
 * The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
 *
 * Note:
 * 1 <= nums.length <= 5000
 * 0 <= nums[i] <= 5000
 */
package twoPointer;

import java.util.Arrays;

public class SortArrayByParity {

    public static void main(String[] args) {
        int[] nums = {3,1,2,4};
        System.out.println("nums: " + Arrays.toString(nums));
        SortArrayByParity s = new SortArrayByParity();
        System.out.println("nums: " + Arrays.toString(s.sortArrayByParity(nums)));
    }

    /**
     * 两指针分别从两端往中间扫描，当左边指针遇到奇数，右边指针遇到偶数时则交换两边元素，否则
     * 左边跳过遇到的偶数，右边跳过遇到的奇数
     */
    public int[] sortArrayByParity(int[] nums) {
        for (int i = 0, j = nums.length - 1; i < j;) {
            for (; i < j && nums[i] % 2 == 0; i++) {}
            for (; i < j && nums[j] % 2 != 0; j--) {}
            swap(nums, i, j);
        }
        return nums;
    }

    private void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

}
