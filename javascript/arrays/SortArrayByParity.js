/**
 * Given an array nums of non-negative integers, return an array consisting of
 * all the even elements of nums, followed by all the odd elements of nums.You may
 * return any answer array that satisfies this condition.
 *
 * Example 1:
 * Input: nums = [3,1,2,4]
 * Output: [2,4,3,1]
 * The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
 *
 * Note:
 * 1 <= nums.length <= 5000
 * 0 <= nums[i] <= 5000
 */

/**
 * 两指针分别从两端往中间扫描，当左边指针遇到奇数，右边指针遇到偶数时则交换两边元素，否则
 * 左边跳过遇到的偶数，右边跳过遇到的奇数
 */
var sortArrayByParity = function(nums) {
    for (let i = 0, j = nums.length - 1; i < j;) {
        for (; i < j && !(nums[i] % 2); i++) {}
        for (; i < j && nums[j] % 2; j--) {}
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    return nums;
}

var main = function() {
    let nums = [3,1,2,4];
    console.log('input array: ' + nums);
    console.log('output array: ' + sortArrayByParity(nums));
}

main();
