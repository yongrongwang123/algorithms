/**
 * Given four integer arrays nums1, nums2, nums3, and nums4 all of length n, return 
 * the number of tuples (i, j, k, l) such that:
 * 0 <= i, j, k, l < n
 * nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0
 * 
* Example 1:
* Input: nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
* Output: 2
* Explanation:
* The two tuples are:
* 1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
* 2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0
* 
* Constraints:
* n == nums1.length
* n == nums2.length
* n == nums3.length
* n == nums4.length
* 1 <= n <= 200
* -2^28 <= nums1[i], nums2[i], nums3[i], nums4[i] <= 2^28
 */

/**
 * 四个数组分成两组，求出第一组中所有可能的两个数组组合的两元素之和作为键，出现的次数作为值
 * 存储在map中，如果第二组中所有可能的两个数组组合的两元素之和的相反数出现在了map中，则计数
 * 值加一
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    let count = 0;
    let map = {};

    for (let n1 of nums1) {
        for (let n2 of nums2) {
            if (!map[n1 + n2]) {
                map[n1 + n2] = 0;
            }
            map[n1 + n2] += 1;
        }
    }
    for (let n3 of nums3) {
        for (let n4 of nums4) {
            if (map[-(n3 + n4)]) {
                count += map[-(n3 + n4)];
            }
        }
    }

    return count;
}

let nums1 = [1, 2];
let nums2 = [-2, -1];
let nums3 = [-1, 2];
let nums4 = [0, 2];
console.log('nums1: ' + nums1 + '\nnums2: ' + nums2 + '\nnums3: ' + nums3 + '\nnums4: ' + nums4);
console.log('count: ' + fourSumCount(nums1, nums2, nums3, nums4));
