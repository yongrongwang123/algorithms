/**
 * 912. Sort an Array
 *
 * Given an array of integers nums, sort the array in ascending order and return
 * it. You must solve the problem without using any built-in functions in O(nlog(n))
 * time complexity and with the smallest space complexity possible.
 *
 * Example 1:
 * Input: nums = [5,2,3,1]
 * Output: [1,2,3,5]
 * Explanation: After sorting the array, the positions of some numbers are not
 * changed (for example, 2 and 3), while the positions of other numbers are changed
 * (for example, 1 and 5).
 *
 * Constraints:
 * 1 <= nums.length <= 5 * 10^4
 * -5 * 10^4 <= nums[i] <= 5 * 10^4
 */
package sort;

import java.util.Arrays;
import java.util.Random;

public class SortArray {

    Random random = new Random();

    public static void main(String[] args) {
        int[] nums = { 5, 2, 3, 1 };
        System.out.println("nums: " + Arrays.toString(nums));
        SortArray s = new SortArray();
        System.out.println("nums: " + Arrays.toString(s.sortArray(nums)));
    }

    public int[] sortArray(int[] nums) {
        boolean merge = true;
        if (merge) {
            System.out.println("merge sort");
            mergeSort(nums, 0, nums.length - 1);
        } else {
            System.out.println("quick sort");
            quickSort(nums, 0, nums.length - 1);
        }
        return nums;
    }

    /**
     * 归并排序分为三步，分解，递归和合并，排序发生在合并
     */
    private void mergeSort(int[] nums, int left, int right) {
        if (left >= right) {
            return;
        }
        int mid = left + (right - left) / 2;
        mergeSort(nums, left, mid);
        mergeSort(nums, mid + 1, right);
        merge(nums, left, mid, right);
    }

    /**
     * 首先创建两个临时数组，保存 [left,mid] 和 [mid+1,right] 的元素，然后从左向右迭
     * 代两个数组，取其中较小的元素放入原数组
     */
    private void merge(int[] nums, int left, int mid, int right) {
        int[] nums1 = Arrays.copyOfRange(nums, left, mid + 1);
        int[] nums2 = Arrays.copyOfRange(nums, mid + 1, right + 1);
        for (int i = 0, j = 0, k = left; k <= right; k++) {
            int num1 = (i < nums1.length ? nums1[i] : 1000001);
            int num2 = (j < nums2.length ? nums2[j] : 1000001);
            if (num1 < num2) {
                nums[k] = num1;
                i++;
            } else {
                nums[k] = num2;
                j++;
            }
        }
    }

    /**
    * 快速排序分为两步，分解和递归，排序发生在分解
    */
    private void quickSort(int[] nums, int left, int right) {
        if (left >= right) {
            return;
        }
        int mid = partition(nums, left, right);
        quickSort(nums, left, mid);
        quickSort(nums, mid + 1, right);
    }

    /**
    * 随机选择一个元素作为比较值，指针 i 在左指针 j 和右边界之间移动，如果指针 i 所在元素小
    * 于比较值，将它和指针 j 所在元素进行交换
    */
    private int partition(int[] nums, int left, int right) {
        int r = random.nextInt(right - left + 1) + left;
        int pivot = nums[r];
        swap(nums, r, right);
        int j = left;
        for (int i = left; i < right; i++) {
            if (nums[i] < pivot) {
                swap(nums, i, j);
                j++;
            }
        }
        swap(nums, j, right);
        return left;
    }

    private void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
}
