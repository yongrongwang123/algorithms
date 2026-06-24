/**
 * Given an integer array nums of unique elements, return all possible subsets
 * (the power set). The solution set must not contain duplicate subsets. Return
 * the solution in any order.
 * 
 * Example 1:
 * Input: nums = [1,2,3]
 * Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 * 
 * Constraints:
 * 1 <= nums.length <= 10
 * -10 <= nums[i] <= 10
 * All the numbers of nums are unique.
 */
import { print2dArray } from '../arrays/ArrayUtils.js';

var subsets = function(nums) {
    let lists = [];
    helper(lists, [], nums, 0);
    return lists;
}

/**
 * 对于原数组中的每个元素，我们可以选择或者不选择，如果选择则添加当前元素到当前
 * 子集，如果不选择则不添加当前元素到当前子集，然后合并两个子集生成新的子集
 */
var helper = function(lists, list, nums, start) {
    if (start == nums.length) {
        lists.push(list.slice());
        return;
    }
    list.push(nums[start]);
    helper(lists, list, nums, start + 1);
    list.pop();
    helper(lists, list, nums, start + 1);
}

var main = function() {
    let nums = [1,2,3];
    console.log('nums: ' + nums);
    print2dArray(subsets(nums));
}

main();
