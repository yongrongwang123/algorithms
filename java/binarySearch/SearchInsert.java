/**
 * 35. Search Insert Position
 *
 * Given a sorted array of distinct integers and a target value, return the index
 * if the target is found. If not, return the index where it would be if it were
 * inserted in order. You must write an algorithm with O(log n) runtime complexity.
 * 
 * Example 1:
 * Input: nums = [1,3,5,6], target = 5
 * Output: 2
 * 
 * Constraints:
 * 1 <= nums.length <= 10^4
 * -10^4 <= nums[i] <= 10^4
 * nums contains distinct values sorted in ascending order.
 * -10^4 <= target <= 10^4
 */

package binarySearch;

import java.util.Arrays;

public class SearchInsert {
    public static void main(String[] args) {
        int[] nums = {1,3,5,6};
        int target = 5;
        System.out.println("nums: " + Arrays.toString(nums));
        System.out.println("target: " + target);
        SearchInsert s = new SearchInsert();
        System.out.println("index: " + s.searchInsert(nums, target));
    }

    /**
     * 要搜索的是大于等于目标值的最小值，如果中间索引的值大于等于目标值，则搜索左半部分
     * 且包含中间索引，如果小于目标值，则搜索右半部分，如果左边界等于右边界则跳出循环
     */
    public int searchInsert(int[] nums, int target) {
        int left = 0;
        int right = nums.length;
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] >= target) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }
}
