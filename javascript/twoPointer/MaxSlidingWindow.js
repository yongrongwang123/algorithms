/**
 * 239. Sliding Window Maximum
 *
 * You are given an array of integers nums, there is a sliding window of size k
 * which is moving from the very left of the array to the very right. You can only
 * see the k numbers in the window. Each time the sliding window moves right by
 * one position. Return the max sliding window.
 * 
 * Example 1:
 * Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
 * Output: [3,3,5,5,6,7]
 * Explanation: 
 * Window position                Max
 * ---------------               -----
 * [1  3  -1] -3  5  3  6  7       3
 *  1 [3  -1  -3] 5  3  6  7       3
 *  1  3 [-1  -3  5] 3  6  7       5
 *  1  3  -1 [-3  5  3] 6  7       5
 *  1  3  -1  -3 [5  3  6] 7       6
 *  1  3  -1  -3  5 [3  6  7]      7
 * 
 *  Constraints:
 * 1 <= nums.length <= 10^5
 * -10^4 <= nums[i] <= 10^4
 * 1 <= k <= nums.length
 */

/**
 * 用滑动窗口结合单调双端队列，将滑动窗口从左往右滑动，如果队列头部索引不在滑动窗
 * 口内则将它弹出，如果队列尾部索引的元素小于等于当前元素则将它们弹出，然后将当前
 * 元素的索引压入到队列尾部，当滑动窗口内的元素个数等于k的时候，将队列头部索引的元
 * 素添加到结果数组。
 */
var maxSlidingWindow = function(nums, k) {
    let n = nums.length;
    let arr = new Array(n - k + 1);
    let deque = [];
    for (let i = 0; i < n; i++) {
        let j = i - k + 1;
        if (deque.length && deque[0] < j) {
            deque.shift();
        }
        while (deque.length && nums[deque.at(-1)] <= nums[i]) {
            deque.pop();
        }
        deque.push(i);
        if (j >= 0) {
            arr[j] = nums[deque[0]];
        }
    }
    return arr;
};

var main = function() {
    let nums = [1,3,-1,-3,5,3,6,7];
    let k = 3;
    console.log('nums: ' + nums);
    console.log('k: ' + k);
    console.log('window: ' + maxSlidingWindow(nums, k));
};

main();
