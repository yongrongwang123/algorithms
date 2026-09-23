/**
 * 347. Top K Frequent Elements
 *
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
    let map = new Map();
    let buckets = [];
    let freqs = new Array(k);
    for (let num of nums) {
        map.set(num, (map.get(num) ?? 0) + 1);
    }
    for (let i = 0; i < nums.length + 1; i++) {
        buckets.push([]);
    }
    for (let num of map.keys()) {
        buckets[map.get(num)].push(num);
    }
    for (let i = buckets.length - 1, j = 0; i >= 0 && j < k; i--) {
        for (let num of buckets[i]) {
            freqs[j] = num;
            j++;
        }
    }
    return freqs;
}

var main = function() {
    let nums = [1,1,1,2,2,3];
    let k = 2;
    console.log('nums: ' + nums);
    console.log('k: ' + k);
    console.log('nums: ' + topKFrequent(nums, k));
}

main();
