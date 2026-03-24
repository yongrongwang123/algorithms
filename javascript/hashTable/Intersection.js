/**
 * Given two integer arrays nums1 and nums2, return an array of their intersection. 
 * Each element in the result must be unique and you may return the result in any order.
 * 
 * Example 1:
 * Input: nums1 = [1,2,2,1], nums2 = [2,2]
 * Output: [2]
 * 
 * Constraints:
 * 1 <= nums1.length, nums2.length <= 1000
 * 0 <= nums1[i], nums2[i] <= 1000
 */

/**
 * 第一个集合用来存储第一个数组中的元素，第二个集合在第二个数组中的元素出现在第一个集合的时候
 * 就存储该元素，最后将第二个集合转换成数组
 */
var intersection = function(nums1, nums2) {
    let set = new Set();
    let intersect = new Set();

    for (let num of nums1) {
        set.add(num);
    }
    for (let num of nums2) {
        if (set.has(num)) {
            intersect.add(num);
        }
    }

    return [...intersect];
}

let nums1 = [1,2,2,1];
let nums2 = [2,2];
console.log('input array1: ' + nums1);
console.log('input array2: ' + nums2);
console.log('intersection: ' + intersection(nums1, nums2));
