/**
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
 * such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * Notice that the solution set must not contain duplicate triplets.
 * 
 * Example 1:
 * Input: nums = [-1,0,1,2,-1,-4]
 * Output: [[-1,-1,2],[-1,0,1]]
 * Explanation: 
 * nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
 * nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
 * nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
 * The distinct triplets are [-1,0,1] and [-1,-1,2].
 * Notice that the order of the output and the order of the triplets does not matter.
 * 
 * Constraints:
 * 3 <= nums.length <= 3000
 * -10^5 <= nums[i] <= 10^5
 */
import { print2dArray } from '../arrays/ArrayUtils.js';

/**
 * 用一个指针从左往右扫描数组，如果第一个数字固定，则第二个和第三个数字可以
 * 通过两指针来查找，两指针分别从两边往中间扫描，如果三个数字之和等于0，则第
 * 二个和第三个指针跳过重复的数字，如果第二个和第三个指针相遇，则第一个指针
 * 跳过重复的数字，如果第一个数字大于0，则不用再找第二个和第三个数字
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let list = [];
    let n = nums.length;

    for (let i = 0; i + 2 < n && nums[i] <= 0;) {
        for (let j = i + 1, k = n - 1; j < k;) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum < 0) {
                j++;
            } else if (sum > 0) {
                k--;
            } else {
                list.push([nums[i], nums[j], nums[k]]);
                for (j += 1; j < k && nums[j] == nums[j - 1]; j++) {}
                for (k -= 1; j < k && nums[k] == nums[k + 1]; k--) {}
            }
        }
        for (i += 1; i + 2 < n && nums[i] == nums[i - 1]; i++) {}
    }

    return list;
}

var main = function() {
    let nums = [-1,0,1,2,-1,-4];
    console.log('nums: ' + nums);
    print2dArray(threeSum(nums))
}

main();
