package sort;
import java.util.Arrays;
import java.util.Random;

/**
 * Given an array of integers nums, sort the array in ascending order.
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

public class SortArray {

    public static void main(String[] args) {
        int[] nums = { 5, 2, 3, 1 };
        System.out.println(Arrays.toString(nums));
        SortArray s = new SortArray();
        System.out.println(Arrays.toString(s.sortArray(nums)));
    }

    public int[] sortArray(int[] nums) {
        boolean merge = false;
        boolean quick = true;
        if (merge) {
            System.out.println("merge sort");
            mergeSort(nums, 0, nums.length - 1);
        }
        if (quick) {
            System.out.println("quick sort");
            quickSort(nums, 0, nums.length - 1);
        }
        return nums;
    }

    /**
     * 归并排序：分为三步，分解，递归排序，合并，排序发生在合并
     */
    private void mergeSort(int[] nums, int left, int right) {
        if (left >= right) {
            return;
        }
        int mid = (left + right) / 2;
        mergeSort(nums, left, mid);
        mergeSort(nums, mid + 1, right);
        merge(nums, left, mid, right);
    }

    /**
     * 归并排序的合并部分：首先创建两个临时数组保存[left,mid]和[mid+1,right]的元素，然后从
     * 左向右迭代两个数组，每次对比两个数组当前元素，取其中较小的元素放入原数组
     */
    private void merge(int[] nums, int left, int mid, int right) {
        int[] nums1 = Arrays.copyOfRange(nums, left, mid + 1);
        int[] nums2 = Arrays.copyOfRange(nums, mid + 1, right + 1);
        int m = nums1.length;
        int n = nums2.length;
        int i = left;
        int l = 0;
        int r = 0;
        while (l < m || r < n) {
            if (r >= n || (l < m && nums1[l] < nums2[r])) {
                nums[i++] = nums1[l++];
            } else {
                nums[i++] = nums2[r++];
            }
        }
    }

    /**
    * 快速排序：分为两步，分解，递归排序，排序发生在分解
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
    * 快速排序的分解部分：首先将最左边元素作为比较值，然后用两个指针 left 和 right
    * 分别从最左边和最右边向中间移动，移动 right 指针直到指针所在元素小于比较值，
    * 移动 left 指针直到指针所在元素大于比较值
    */
    private int partition(int[] nums, int left, int right) {
        Random random = new Random();
        int index = random.nextInt(right - left + 1) + left;
        int temp = nums[left];
        nums[left] = nums[index];
        nums[index] = temp;
        int pivot = nums[left];

        while (left < right) {
            while (left < right && nums[right] >= pivot) {
                right--;
            }
            nums[left] = nums[right];
            while (left < right && nums[left] <= pivot) {
                left++;
            }
            nums[right] = nums[left];
        }
        nums[left] = pivot;

        return left;
    }
}
