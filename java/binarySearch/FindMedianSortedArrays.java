/**
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

public class FindMedianSortedArrays {

    public static void main(String[] args) {
        int[] nums1 = {0,0};
        int[] nums2 = {0,0};
        FindMedianSortedArrays f = new FindMedianSortedArrays();
        System.out.println(f.findMedianSortedArrays(nums1, nums2));
    }
    
    /**
     * 递归法
     */
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int n1 = nums1.length;
        int n2 = nums2.length;
        double med1 = getKth(nums1, 0, nums2, 0, (n1 + n2 + 1) / 2);
        if ((n1 + n2) % 2 == 0) {
            double med2 = getKth(nums1, 0, nums2, 0, (n1 + n2 + 2) / 2);
            return (med1 + med2) / 2.0;
        }
        return med1;
    }
    
    /**
     * 如果med1小于med2，则保留nums1右半部分和nums2左半部分，否则保留nums1左半部分和nums2
     * 右半部分，其中med1和med2分别为nums1和nums2中间索引的数值
     */
    public double getKth(int[] nums1, int start1, int[] nums2, int start2, int k) {
        if (start2 >= nums2.length) {
            return nums1[start1 + k - 1];
        }
        if (start1 >= nums1.length) {
            return nums2[start2 + k - 1];
        }
        if (k == 1) {
            return Math.min(nums1[start1], nums2[start2]);
        }
        int i = start1 + k / 2 - 1;
        int j = start2 + k / 2 - 1;
        int med1 = (i < nums1.length ? nums1[i] : Integer.MAX_VALUE);
        int med2 = (j < nums2.length ? nums2[j] : Integer.MAX_VALUE);
        if (med1 < med2) {
            return getKth(nums1, i + 1, nums2, start2, k - k / 2);
        } else {
            return getKth(nums1, start1, nums2, j + 1, k - k / 2);
        }
    }

}
