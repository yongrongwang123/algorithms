/**
 * Given an integer array nums, return the maximum difference between two successive
 * elements in its sorted form. If the array contains less than two elements, return
 * 0. You must write an algorithm that runs in linear time and uses linear extra
 * space.
 *
 * Example 1:
 * Input: nums = [3,6,9,1]
 * Output: 3
 * Explanation: The sorted form of the array is [1,3,6,9], either (3,6) or (6,9)
 * has the maximum difference 3.
 *
 * Constraints:
 * 1 <= nums.length <= 10^5
 * 0 <= nums[i] <= 10^9
 */

/**
 * 桶排序：假设数组中最大值和最小值是 max 和 min，数组长度是 n，则最大间隙大于等于
 * ceiling[(max-min)/(n-1)]，将其作为桶大小，所有数字分成 n 个桶，每个桶中只需要
 * 存储桶中的最大值和最小值，最后只需要计算当前桶中的最小值和上一个桶中的最大值
 * 的差值
 */
var maximumGap = function(nums) {
    let min = Math.min(...nums);
    let max = Math.max(...nums);
    if (min == max) {
        return 0;
    }
    let n = nums.length;
    let gap = Math.ceil((max - min) / (n - 1));
    let maxGap = gap;
    let minBucket = new Array(n).fill(Number.MAX_SAFE_INTEGER);
    let maxBucket = new Array(n).fill(Number.MIN_SAFE_INTEGER);

    for (let num of nums) {
        let index = Math.floor((num - min) / gap);
        minBucket[index] = Math.min(minBucket[index], num);
        maxBucket[index] = Math.max(maxBucket[index], num);
    }
    for (let i = 1, previous = maxBucket[0]; i < n; i++) {
        if (minBucket[i] == Number.MAX_SAFE_INTEGER) {
            continue;
        }
        maxGap = Math.max(maxGap, minBucket[i] - previous);
        previous = maxBucket[i];
    }

    return maxGap;
}

let nums = [3,6,9,1];
console.log('input array: ' + nums);
console.log('gap: ' + maximumGap(nums));
