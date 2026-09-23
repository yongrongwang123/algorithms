/**
 * 215. Kth Largest Element in an Array
 *
 * Given an integer array nums and an integer k, return the kth largest element
 * in the array. Note that it is the kth largest element in the sorted order, not
 * the kth distinct element. Can you solve it without sorting?
 *
 * Example 1:
 * Input: nums = [3,2,1,5,6,4], k = 2
 * Output: 5
 *
 * Constraints:
 * 1 <= k <= nums.length <= 10^5
 * -10^4 <= nums[i] <= 10^4
 */
package sort;

import java.util.Arrays;
import java.util.Random;

public class FindKthLargest {
    Random random = new Random();

    public static void main(String[] args) {
        int[] nums = {3,2,1,5,6,4};
        int k = 2;
        System.out.println("nums: " + Arrays.toString(nums));
        System.out.println("k: " + k);
        FindKthLargest f = new FindKthLargest();
        System.out.println("kth largest: " + f.findKthLargest(nums, k));
    }

    /**
     * 快速选择：为了处理重复数据，使用快速排序的三路分区结合二分搜索来找第 k 大元素。随机
     * 选择一个元素作为比较值，指针 i 在左指针 l 和右指针 r 之间移动，如果指针 i 所在元素
     * 小于比较值，将它和左指针 j 所在元素进行交换，如果指针 i 所在元素大于比较值，将它和
     * 右指针 r 所在元素进行交换，找到的元素范围在 l 和 r 之间，如果小于左指针 l 则在左边
     * 找，如果大于右指针 r 则在右边找
     */
    public int findKthLargest(int[] nums, int k) {
        int target = nums.length - k;
        int left = 0;
        int right = nums.length - 1;
        while (left <= right) {
            int m = left + random.nextInt(right - left + 1);
            int pivot = nums[m];
            int l = left;
            int r = right;
            for (int i = l; i <= r; i++) {
                if (nums[i] < pivot) {
                    swap(nums, i, l);
                    l++;
                } else if (nums[i] > pivot) {
                    swap(nums, i, r);
                    r--;
                    i--;
                }
            }
            if (target < l) {
                right = l - 1;
            } else if (target > r) {
                left = r + 1;
            } else {
                return pivot;
            }
        }
        return -1;
    }

    private void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
}
