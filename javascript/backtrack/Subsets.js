/**
 * 78. Subsets
 *
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

var subsets = function(nums) {
    let lists = [];
    sub(lists, [], nums, 0);
    return lists;
}

/**
 * 对于原数组中的每个元素，我们可以选择或者不选择，如果选择则添加当前元素到当前
 * 子集，如果不选择则不添加当前元素到当前子集，所有子集都是合法子集
 */
var sub = function(lists, list, nums, start) {
    lists.push([...list]);
    for (let i = start; i < nums.length; i++) {
        list.push(nums[i]);
        sub(lists, list, nums, i + 1);
        list.pop();
    }
}

var main = function() {
    let nums = [1,2,3];
    console.log('nums: ' + nums);
    console.log('subsets: ' + JSON.stringify(subsets(nums)));
}

main();
