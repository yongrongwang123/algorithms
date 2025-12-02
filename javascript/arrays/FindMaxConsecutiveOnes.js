/**
 * Given a binary array nums, return the maximum number of consecutive 1's in the array.
 *
 * Example 1:
 * Input: nums = [1,1,0,1,1,1]
 * Output: 3
 * Explanation: The first two digits or the last three digits are consecutive 1s.
 * The maximum number of consecutive 1s is 3.
 *
 * Constraints:
 * 1 <= nums.length <= 10^5
 * nums[i] is either 0 or 1.
 */

var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let max = 0;

    for (let num of nums) {
        if (num == 1) {
            count++;
            if (count > max)
                max = count;
        } else {
            count = 0;
        }
    }

    return max;
};

let nums = [1,1,0,1,1,1];
console.log('input array: ' + nums);
console.log('max: ' + findMaxConsecutiveOnes(nums));
