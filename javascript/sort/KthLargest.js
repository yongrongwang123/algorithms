/**
 * 703. Kth Largest Element in a Stream
 *
 * You are part of a university admissions office and need to keep track of the kth
 * highest test score from applicants in real-time. This helps to determine cut-off
 * marks for interviews and admissions dynamically as new applicants submit their
 * scores. You are tasked to implement a class which, for a given integer k, maintains
 * a stream of test scores and continuously returns the kth highest test score after
 * a new score has been submitted. More specifically, we are looking for the kth
 * highest score in the sorted list of all scores. Implement the KthLargest class:
 *  - KthLargest(int k, int[] nums) Initializes the object with the integer k and
 *    the stream of test scores nums.
 *  - int add(int val) Adds a new test score val to the stream and returns the element
 *    representing the kth largest element in the pool of test scores so far.
 * 
 * Example 1:
 * Input
 * ["KthLargest", "add", "add", "add", "add", "add"]
 * [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
 * Output
 * [null, 4, 5, 5, 8, 8]
 * Explanation
 * KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
 * kthLargest.add(3);   // return 4
 * kthLargest.add(5);   // return 5
 * kthLargest.add(10);  // return 5
 * kthLargest.add(9);   // return 8
 * kthLargest.add(4);   // return 8
 * 
 * Constraints:
 * 1 <= k <= 10^4
 * 0 <= nums.length <= 10^4
 * -10^4 <= nums[i] <= 10^4
 * -10^4 <= val <= 10^4
 * At most 10^4 calls will be made to add.
 */
import { MinPriorityQueue } from '@datastructures-js/priority-queue';

var KthLargest = function(k, nums) {
    this.k = k;
    this.queue = new MinPriorityQueue();
    for (let num of nums) {
        this.add(num);
    }
}

/**
 * 使用一个优先级队列来保存k个最大元素，每次遇到一个新的元素则压入该元素到队列，如果队列中
 * 元素个数大于k个则弹出最小的那个元素，此时队列顶部的元素即为第k个最大元素
 */
KthLargest.prototype.add = function(val) {
    if (this.queue.size() < this.k || this.queue.front() < val) {
        this.queue.enqueue(val);
    }
    if (this.queue.size() > this.k) {
        this.queue.dequeue();
    }
    return this.queue.front();
}

var main = function() {
    let nums = [4, 5, 8, 2];
    let k = 3;
    let vals = [3, 5, 10, 9, 4];
    console.log('nums: ' + nums);
    console.log('k: ' + k);
    let largest = new KthLargest(k, nums);
    for (let val of vals) {
        console.log('add: ' + val);
        console.log('kth largest: ' + largest.add(val));
    }
}

main()
