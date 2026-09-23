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
var findMedianSortedArrays = function(nums1, nums2) {
    let n1 = nums1.length;
    let n2 = nums2.length;
    if (n1 > n2) {
        return findMedianSortedArrays(nums2, nums1);
    }
    let left1 = 0;
    let right1 = n1;
    while (left1 <= right1) {
        let mid1 = left1 + Math.floor((right1 - left1) / 2);
        let mid2 = Math.floor((n1 + n2 + 1) / 2) - mid1;
        let rmin1 = (mid1 <= n1 - 1 ? nums1[mid1] : 1000001);
        let rmin2 = (mid2 <= n2 - 1 ? nums2[mid2] : 1000001);
        let lmax1 = (mid1 - 1 >= 0 ? nums1[mid1 - 1] : -1000001);
        let lmax2 = (mid2 - 1 >= 0 ? nums2[mid2 - 1] : -1000001);
        if (lmax1 > rmin2) {
            right1 = mid1 - 1;
        } else if (rmin1 < lmax2) {
            left1 = mid1 + 1;
        } else {
            let lmax = (lmax1 > lmax2 ? lmax1 : lmax2);
            if ((n1 + n2) % 2 != 0) {
                return lmax;
            }
            return (lmax + (rmin1 < rmin2 ? rmin1 : rmin2)) / 2;
        }
    }
    return -1;
}

var main = function() {
    let nums1 = [1,3];
    let nums2 = [2];
    console.log('nums1: ' + nums1);
    console.log('nums2: ' + nums2);
    console.log('median: ' + findMedianSortedArrays(nums1, nums2));
}

main();
