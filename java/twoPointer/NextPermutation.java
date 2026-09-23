/**
 * 31. Next Permutation
 *
 * A permutation of an array of integers is an arrangement of its members into a
 * sequence or linear order.
 * - For example, for arr = [1,2,3], the following are all the permutations of arr:
 *   [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
 * The next permutation of an array of integers is the next lexicographically greater
 * permutation of its integer. More formally, if all the permutations of the array
 * are sorted in one container according to their lexicographical order, then the
 * next permutation of that array is the permutation that follows it in the sorted
 * container. If such arrangement is not possible, the array must be rearranged as
 * - the lowest possible order (i.e., sorted in ascending order).
 * - For example, the next permutation of arr = [1,2,3] is [1,3,2].
 * - Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
 * - While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does
 *   not have a lexicographical larger rearrangement.
 * Given an array of integers nums, find the next permutation of nums. The replacement
 * must be in place and use only constant extra memory.
 * 
 * Example 1:
 * Input: nums = [1,2,3]
 * Output: [1,3,2]
 * 
 * Constraints:
 * 1 <= nums.length <= 100
 * 0 <= nums[i] <= 100
 */

package twoPointer;

import java.util.Arrays;

public class NextPermutation {
    public static void main(String[] args) {
        int[] nums = {1,2,3};
        System.out.println("nums: " + Arrays.toString(nums));
        NextPermutation n = new NextPermutation();
        n.nextPermutation(nums);
        System.out.println("nums: " + Arrays.toString(nums));
    }

    /**
     * 关键是尽可能小地增加当前排列，也就是尽可能小地增加左边部分，然后获得右边部分的最小排列。
     * 1. 从右往左扫描数组，找到第一个变小的数字 a，此时 a 的右边部分是非递增的，所以已经是最
     *    大排列，翻转后获得最小排列
     * 2. 如果找不到数字 a，直接翻转当前排列来获得下一个排列
     * 3. 如果找到了数字 a，在 a 的右边部分找到最小的大于 a 的数字 b，然后交换 a 和 b，最后翻
     *    转 a 的右边部分，则可以获得下一个排列
     */
    public void nextPermutation(int[] nums) {
        int n = nums.length;
        int i = n - 2;
        for (; i >= 0 && nums[i] >= nums[i + 1]; i--) {}
        if (i >= 0) {
            int j = n - 1;
            for (; nums[j] <= nums[i]; j--) {}
            swap(nums, i, j);
        }
        reverse(nums, i + 1);
    }

    private void reverse(int[] nums, int start) {
        for (int i = start, j = nums.length - 1; i < j; i++, j--) {
            swap(nums, i, j);
        }
    }

    private void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
}
