/**
 * 4. Median of Two Sorted Arrays
 *
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return 
 * the median of the two sorted arrays. The overall run time complexity should be 
 * O(log (m+n)).
 * 
 * Example 1:
 * Input: nums1 = [1,3], nums2 = [2]
 * Output: 2.00000
 * Explanation: merged array = [1,2,3] and median is 2.
 * 
 * Constraints:
 * nums1.length == m
 * nums2.length == n
 * 0 <= m <= 1000
 * 0 <= n <= 1000
 * 1 <= m + n <= 2000
 * -10^6 <= nums1[i], nums2[i] <= 10^6
 */

package binarySearch;

import java.util.Arrays;

public class FindMedianSortedArrays {

    public static void main(String[] args) {
        int[] nums1 = {1,3};
        int[] nums2 = {2};
        System.out.println("nums1: " + Arrays.toString(nums1));
        System.out.println("nums2: " + Arrays.toString(nums2));
        FindMedianSortedArrays f = new FindMedianSortedArrays();
        System.out.println("median: " + f.findMedianSortedArrays(nums1, nums2));
    }
    
    /**
     * 只要二分搜索数组 nums1 分割的位置，就能得到数组 nums2 分割的位置，满足中位数的
     * 条件是左边的数都小于右边的数。因为两个数组都有序，所以只要 nums1 左边最大的数
     * 小于 nums2 右边最小的数，并且 nums1 右边最小的数大于 nums2 左边最大的数。为了
     * 减少对比时的边界检查，当左边为空的时候，给左边一个最小整数，当右边为空的时候，
     * 给右边一个最大整数。如果不满足前一个条件，则分割的位置要左移，如果不满足后一个
     * 条件，则分割的位置要右移，如果满足两个条件，则找到了分割中位数的位置。如果两个
     * 数组总长度是奇数，则中位数是两个数组左边最大的数，如果两个数组总长度是偶数，则
     * 中位数是两个数组左边最大的数和右边最小的数的平均值。
     */
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int n1 = nums1.length;
        int n2 = nums2.length;
        if (n1 > n2) {
            return findMedianSortedArrays(nums2, nums1);
        }
        int left1 = 0;
        int right1 = n1;
        while (left1 <= right1) {
            int mid1 = left1 + (right1 - left1) / 2;
            int mid2 = (n1 + n2 + 1) / 2 - mid1;
            int rmin1 = (mid1 <= n1 - 1 ? nums1[mid1] : 1000001);
            int rmin2 = (mid2 <= n2 - 1 ? nums2[mid2] : 1000001);
            int lmax1 = (mid1 - 1 >= 0 ? nums1[mid1 - 1] : -1000001);
            int lmax2 = (mid2 - 1 >= 0 ? nums2[mid2 - 1] : -1000001);
            if (lmax1 > rmin2) {
                right1 = mid1 - 1;
            } else if (rmin1 < lmax2) {
                left1 = mid1 + 1;
            } else {
                double lmax = (lmax2 > lmax1 ? lmax2 : lmax1);
                if ((n1 + n2) % 2 != 0) {
                    return lmax;
                }
                return (lmax + (rmin2 < rmin1 ? rmin2 : rmin1)) / 2;
            }
        }
        return -1;
    }

}
