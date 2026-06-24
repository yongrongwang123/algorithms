/**
 * Given an array nums of distinct integers, return all the possible permutations.
 * You can return the answer in any order.
 *
 * Example 1:
 * Input: nums = [1,2,3]
 * Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 *
 * Constraints:
 * 1 <= nums.length <= 6
 * -10 <= nums[i] <= 10
 * All the integers of nums are unique.
 */
import { print2dArray } from '../arrays/ArrayUtils.js';

var permute = function(nums) {
    let lists = [];
    helper(lists, nums, 0);
    return lists;
}

/**
 * 将数组分成两部分，[0,start-1] 是排列好的，[start,length-1] 是未排列好的，
 * 每次递归从未排列好的当中取出一个放到排列好的里面，当排列好的部分长度等于
 * 数组长度的时候，就获得了一个排列
 */
var helper = function(lists, nums, start) {
    if (start == nums.length) {
        lists.push(nums.slice());
        return;
    }
    for (let i = start; i < nums.length; i++) {
        [nums[start], nums[i]] = [nums[i], nums[start]];
        helper(lists, nums, start + 1);
        [nums[start], nums[i]] = [nums[i], nums[start]];
    }
}

var main = function() {
    let nums = [1,2,3];
    console.log('nums: ' + nums);
    print2dArray(permute(nums));
}

main();
