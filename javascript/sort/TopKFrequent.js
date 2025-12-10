/**
 * Given an integer array nums and an integer k, return the k most frequent elements.
 * You may return the answer in any order.
 *
 * Example 1:
 * Input: nums = [1,1,1,2,2,3], k = 2
 * Output: [1,2]
 *
 * Constraints:
 * 1 <= nums.length <= 10^5
 * -10^4 <= nums[i] <= 10^4
 *  k is in the range [1, the number of unique elements in the array].
 *  It is guaranteed that the answer is unique.
 */

/**
 * 桶排序：首先用 map 存储数组中每个元素出现的频率，然后将相同频率的元素放到相同的
 * 桶中，最后反向遍历桶中元素，返回前 k 个元素
 */
var topKFrequent = function(nums, k) {
    let freqMap = {};
    let bucket = [];
    let answer = [];

    for (let num of nums) {
        if (!freqMap[num]) {
            freqMap[num] = 0;
        }
        freqMap[num] += 1;
    }
    for (let [num, freq] of Object.entries(freqMap)) {
        if (!bucket[freq]) {
            bucket[freq] = [];
        }
        bucket[freq].push(+num);
    }
    for (let i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i]) {
            answer.push(...bucket[i]);
        }
        if (answer.length == k) {
            break;
        }
    }

    return answer;
}

let nums = [1,1,1,2,2,3];
let k = 2;
console.log('input array: ' + nums);
console.log('k: ' + k);
console.log('output array: ' + topKFrequent(nums, k));
