/**
 * Given an array nums of size n, return the majority element. The majority element
 * is the element that appears more than ⌊n / 2⌋ times. You may assume that the
 * majority element always exists in the array.
 * 
 * Example 1:
 * Input: nums = [3,2,3]
 * Output: 3
 * 
 * Constraints:
 * n == nums.length
 * 1 <= n <= 5 * 10^4
 * -10^9 <= nums[i] <= 10^9
 * The input is generated such that a majority element will exist in the array.
 */

/**
 * 将数组中的元素分成主要元素和非主要元素，主要元素的个数多于非主要元素，只要出
 * 现一个非主要元素，就一定会出现一个对应的主要元素，到最后胜出的就是主要元素
 */
var majorityElement = function(nums) {
    let major = 0;
    let count = 0;
    for (let num of nums) {
        major = (count ? major : num);
        count += (major == num ? 1 : -1);
    }
    return major;
}

var main = function() {
    let nums = [3,2,3];
    console.log('nums: ' + nums);
    console.log('majority: ' + majorityElement(nums));
}

main();
