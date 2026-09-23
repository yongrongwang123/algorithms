/**
 * 75. Sort Colors
 *
 * Given an array nums with n objects colored red, white, or blue, sort them in-place
 * so that objects of the same color are adjacent, with the colors in the order
 * red, white, and blue. We will use the integers 0, 1, and 2 to represent the color
 * red, white, and blue, respectively. You must solve this problem without using
 * the library's sort function.
 *
 * Example 1:
 * Input: nums = [2,0,2,1,1,0]
 * Output: [0,0,1,1,2,2]
 *
 * Constraints:
 * n == nums.length
 * 1 <= n <= 300
 * nums[i] is either 0, 1, or 2.
 */
package sort;

import java.util.Arrays;

public class SortColors {
    public static void main(String[] args) {
        int[] nums = {2,0,2,1,1,0};
        System.out.println("nums: " + Arrays.toString(nums));
        SortColors s = new SortColors();
        s.sortColors(nums);
        System.out.println("nums: " + Arrays.toString(nums));
    }

    /**
     * 用 3 个指针 l, i, r 来分区，l 指针之左用来存储红色对象，l 指针和 i 指针之间用来存
     * 储白色对象，i 指针和 r 指针之间用来存储未分类的对象，r 指针之右用来存储蓝色对象，
     * 将 i 指针从左往右移动，如果 i 指针所在元素为红色对象，则交换 l 指针和 i 指针所在元
     * 素，并且向右移动 l 指针和 i 指针，如果 i 指针所在元素为蓝色对象，则交换 i 指针和 r
     * 指针所在元素，并且向左移动 r 指针，如果 i 指针所在元素为白色对象，则向右移动 i 指针
     */
    public void sortColors(int[] nums) {
        for (int l = 0, r = nums.length - 1, i = l; i <= r; i++) {
            if (nums[i] < 1) {
                swap(nums, i, l);
                l++;
            } else if (nums[i] > 1) {
                swap(nums, i, r);
                r--;
                i--;
            }
        }
    }

    private void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
}
