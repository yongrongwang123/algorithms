/**
 * Given an array nums of n integers where nums[i] is in the range [1, n], return
 * an array of all the integers in the range [1, n] that do not appear in nums.
 *
 * Example 1:
 * Input: nums = [4,3,2,7,8,2,3,1]
 * Output: [5,6]
 *
 * Constraints:
 * n == nums.length
 * 1 <= n <= 10^5
 * 1 <= nums[i] <= n
 */

/**
 * 从左往右扫描数组，当元素索引加一不等于元素值a，且元素值a不等于元素值减一后为索引所对应的
 * 元素值b的时候，就交换a和b，如果交换后还满足交换条件就进行下一次交换，结束后再次扫描数组，
 * 如果元素索引加一不等于元素值则加入到结果数组
 */
var findDisappearedNumbers = function(nums) {
    let list = [];

    for (let i = 0; i < nums.length; i++) {
        while (i + 1 != nums[i] && nums[i] != nums[nums[i] - 1]) {
            let t = nums[i];
            nums[i] = nums[t - 1];
            nums[t - 1] = t;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (i + 1 != nums[i])
            list.push(i + 1);
    }

    return list;
}

let nums = [4,3,2,7,8,2,3,1];
console.log('input array: ' + nums);
console.log('output array: ' + findDisappearedNumbers(nums));
