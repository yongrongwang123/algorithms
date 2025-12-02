/**
 * Given an integer array nums sorted in non-decreasing order, return an array of
 * the squares of each number sorted in non-decreasing order.
 *
 * Example 1:
 * Input: nums = [-4,-1,0,3,10]
 * Output: [0,1,9,16,100]
 * Explanation: After squaring, the array becomes [16,1,0,9,100]. After sorting,
 * it becomes [0,1,9,16,100].
 *
 * Constraints:
 * 1 <= nums.length <= 10^4
 * -104 <= nums[i] <= 10^4
 * nums is sorted in non-decreasing order.
 */

/**
 * 两指针在原数组上从两边往中间滑动，将绝对值大的平方后依次由后往前放到目标数组上
 */
var sortedSquares = function(nums) {
    let n = nums.length - 1;
    let i = 0;
    let j = n;
    let sorted = [];
    
    for ( let p = n; p >= 0; p--) {
        if (Math.abs(nums[i]) > Math.abs(nums[j])) {
            sorted.unshift(nums[i] * nums[i]);
            i++;
        } else {
            sorted.unshift(nums[j] * nums[j]);
            j--;
        }
    }

    return sorted;
};

let nums = [-4,-1,0,3,10];
console.log('input array: ' + nums);
console.log('output array: ' + sortedSquares(nums));
