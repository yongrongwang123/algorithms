/**
 * Design a class to find the kth largest element in a stream. Note that it is the 
 * kth largest element in the sorted order, not the kth distinct element. Implement 
 * KthLargest class: KthLargest(int k, int[] nums) Initializes the object with the 
 * integer k and the stream of integers nums. int add(int val) Appends the integer 
 * val to the stream and returns the element representing the kth largest element 
 * in the stream.
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
 * It is guaranteed that there will be at least k elements in the array when you 
 * search for the kth element.
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
    this.queue.enqueue(val);
    if (this.queue.size() > this.k) {
        this.queue.dequeue();
    }
    return this.queue.front();
}

var main = function() {
    let nums = [4, 5, 8, 2];
    let k = 3;
    console.log('k: ' + k + ', nums: ' + nums);
    let largest = new KthLargest(k, nums);
    let vals = [3, 5, 10, 9, 4];
    console.log('vals: ' + vals);
    let output = 'kth largest:';
    for (let val of vals) {
        output += ' ' + largest.add(val);
    }
    console.log(output);
}

main()
