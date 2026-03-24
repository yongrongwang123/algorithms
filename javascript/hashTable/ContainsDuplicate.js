/**
 * Given an integer array nums, return true if any value appears at least twice 
 * in the array, and return false if every element is distinct.
 * 
 * Example 1:
 * Input: nums = [1,2,3,1]
 * Output: true
 * 
 * Constraints:
 * 1 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 */

var containsDuplicate = function(nums) {
    let set = new Set();
    for (let num of nums) {
        if (set.has(num)) {
            return true;
        }
        set.add(num);
    }
    return false;
}

let nums = [1,2,3,1];
console.log('input array: ' + nums);
console.log('contains duplicate: ' + containsDuplicate(nums));
