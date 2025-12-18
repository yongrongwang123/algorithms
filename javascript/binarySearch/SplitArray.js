/**
 * Given an array nums which consists of non-negative integers and an integer m, 
 * you can split the array into m non-empty continuous subarrays. Write an algorithm 
 * to minimize the largest sum among these m subarrays.
 * 
 * Example 1:
 * Input: nums = [7,2,5,10,8], k = 2
 * Output: 18
 * Explanation:
 * There are four ways to split nums into two subarrays.
 * The best way is to split it into [7,2,5] and [10,8],
 * where the largest sum among the two subarrays is only 18.
 * 
 * Constraints:
 * 1 <= nums.length <= 1000
 * 0 <= nums[i] <= 10^6
 * 1 <= m <= min(50, nums.length)
 */

/**
 * 在最大元素到所有元素之和之间进行二分搜索，每次针对一个给定的元素之和，使用贪心算法来缩小
 * 左右边界，判断是否能将原数组分成小于等于m个子数组，如果可以的话，说明当前给定的元素之和
 * 过大，则搜索左半部分，如果不可以的话，说明当前给定的元素之和过小，则搜素右半部分
 */
var splitArray = function(nums, k) {
    let left = 0;
    let right = 0;
    
    for (let num of nums) {
        left = Math.max(left, num);
        right += num;
    }
    while (left < right) {
        let mid = Math.floor((right - left) / 2) + left;
        if (validate(nums, mid, k)) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
}

/**
 * 验证是否可以将数组分成大于等于k个子数组，且每个子数组的元素之和小于等于目标
 * 值，如果可以则返回true
 */
var validate = function(nums, target, k) {
    let sum = 0;

    for (let num of nums) {
        sum += num;
        if (sum > target) {
            sum = num;
            k--;
            if (k == 0) {
                return true;
            }
        }
    }

    return false;
}

let nums = [7,2,5,10,8];
let k = 2;
console.log('input array: ' + nums);
console.log('k: ' + k);
console.log('sum: ' + splitArray(nums, k));
