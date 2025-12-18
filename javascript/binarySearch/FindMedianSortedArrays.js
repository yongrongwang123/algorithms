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

/**
 * 递归法
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let n1 = nums1.length;
    let n2 = nums2.length;
    let med1 = getKth(nums1, 0, nums2, 0, Math.floor((n1 + n2 + 1) / 2));
    if ((n1 + n2) % 2 == 0) {
        let med2 = getKth(nums1, 0, nums2, 0, Math.floor((n1 + n2 + 2) / 2));
        return (med1 + med2) / 2;
    }
    return med1;
}

/**
 * 如果med1小于med2，则保留nums1右半部分和nums2左半部分，否则保留nums1左半部分和nums2
 * 右半部分，其中med1和med2分别为nums1和nums2中间索引的数值
 */
var getKth = function(nums1, start1, nums2, start2, k) {
    if (start1 >= nums1.length) {
        return nums2[start2 + k - 1];
    }
    if (start2 >= nums2.length) {
        return nums1[start1 + k - 1];
    }
    if (k == 1) {
        return Math.min(nums1[start1], nums2[start2]);
    }
    let mid1 = start1 + Math.floor(k / 2) - 1;
    let mid2 = start2 + Math.floor(k / 2) - 1;
    let med1 = mid1 >= nums1.length ? Number.MAX_SAFE_INTEGER : nums1[mid1];
    let med2 = mid2 >= nums2.length ? Number.MAX_SAFE_INTEGER : nums2[mid2];
    if (med1 < med2) {
        return getKth(nums1, mid1 + 1, nums2, start2, k - Math.floor(k / 2));
    } else {
        return getKth(nums1, start1, nums2, mid2 + 1, k - Math.floor(k / 2));
    }
}

let nums1 = [1,3];
let nums2 = [2];
console.log('input array1: ' + nums1);
console.log('input array2: ' + nums2);
console.log('median: ' + findMedianSortedArrays(nums1, nums2));
