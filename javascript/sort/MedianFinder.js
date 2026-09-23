/**
 * 295. Find Median from Data Stream
 *
 * The median is the middle value in an ordered integer list. If the size of the
 * list is even, there is no middle value, and the median is the mean of the two
 * middle values.
 * - For example, for arr = [2,3,4], the median is 3.
 * - For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
 * Implement the MedianFinder class:
 * - MedianFinder() initializes the MedianFinder object.
 * - void addNum(int num) adds the integer num from the data stream to the data structure.
 * - double findMedian() returns the median of all elements so far. Answers within
 *   10^-5 of the actual answer will be accepted.
 * 
 * Example 1:
 * Input
 * ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
 * [[], [1], [2], [], [3], []]
 * Output
 * [null, null, null, 1.5, null, 2.0]
 * 
 * Explanation
 * MedianFinder medianFinder = new MedianFinder();
 * medianFinder.addNum(1);    // arr = [1]
 * medianFinder.addNum(2);    // arr = [1, 2]
 * medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
 * medianFinder.addNum(3);    // arr[1, 2, 3]
 * medianFinder.findMedian(); // return 2.0
 * 
 * Constraints:
 * -10^5 <= num <= 10^5
 * There will be at least one element in the data structure before calling findMedian.
 * At most 5 * 10^4 calls will be made to addNum and findMedian.
 */
import { MaxPriorityQueue } from '@datastructures-js/priority-queue';
import { MinPriorityQueue } from '@datastructures-js/priority-queue';

var MedianFinder = function() {
    this.left = new MaxPriorityQueue();
    this.right = new MinPriorityQueue();
};

/**
 * 用最大优先级队列保存左半边数据，用最小优先级队列保存右半边数据，如果左半边小于
 * 右半边数据个数，则从右半边取出一个放到左半边，如果左半边大于右半边数据个数加
 * 一，则从左半边取出一个放到右半边
 */
MedianFinder.prototype.addNum = function(num) {
    if (this.left.isEmpty() || this.left.front() >= num) {
        this.left.enqueue(num);
    } else {
        this.right.enqueue(num);
    }
    if (this.left.size() < this.right.size()) {
        this.left.enqueue(this.right.dequeue());
    } else if (this.left.size() > this.right.size() + 1) {
        this.right.enqueue(this.left.dequeue());
    }
};

/**
 * 中位数在两个队列的队头，如果总数为奇数，则中位数为最大优先级队列队头，否则中位
 * 数为两个队列队头的平均数
 */
MedianFinder.prototype.findMedian = function() {
    return this.left.size() > this.right.size() ? this.left.front() :
        (this.left.front() + this.right.front()) / 2;
};

var main = function() {
    let nums = [1,2,3];
    console.log('nums: ' + nums);
    let m = new MedianFinder();
    console.log('add num ' + nums[0]);
    m.addNum(nums[0]);
    console.log('add num ' + nums[1]);
    m.addNum(nums[1]);
    console.log('find median: ' + m.findMedian());
    console.log('add num ' + nums[2]);
    m.addNum(nums[2]);
    console.log('find median: ' + m.findMedian());
};

main();
