/**
 * Given two integer arrays nums1 and nums2, return an array of their intersection. 
 * Each element in the result must appear as many times as it shows in both arrays 
 * and you may return the result in any order.
 * 
 * Example 1:
 * Input: nums1 = [1,2,2,1], nums2 = [2,2]
 * Output: [2,2]
 * 
 * Constraints:
 * 1 <= nums1.length, nums2.length <= 1000
 * 0 <= nums1[i], nums2[i] <= 1000
 */

/**
 * 一个Map用来存储第一个数组中的元素和对应的频率，一个List在第二个数组中的元素出现在Map且
 * 对应的频率大于0的时候就存储该元素，然后再将对应的频率减一，最后将List转换成数组
 */
var intersect = function(nums1, nums2) {
    let map = {};
    let intersect = [];

    for (let num of nums1) {
        if (!map[num]) {
            map[num] = 0;
        }
        map[num] += 1;
    }
    for (let num of nums2) {
        if (map[num]) {
            intersect.push(num);
            map[num] -= 1;
        }
    }

    return intersect;
}

let nums1 = [1,2,2,1];
let nums2 = [2,2];
console.log('input array1: ' + nums1);
console.log('input array2: ' + nums2);
console.log('intersect: ' + intersect(nums1, nums2));
