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

package sort;

import java.util.Arrays;
import java.util.PriorityQueue;
import java.util.Queue;

public class MedianFinder {
    Queue<Integer> left;
    Queue<Integer> right;

    public static void main(String[] args) {
        int[] nums = {1,2,3};
        System.out.println("nums: " + Arrays.toString(nums));
        MedianFinder m = new MedianFinder();
        System.out.println("add num " + nums[0]);
        m.addNum(nums[0]);
        System.out.println("add num " + nums[1]);
        m.addNum(nums[1]);
        System.out.println("find median: " + m.findMedian());
        System.out.println("add num " + nums[2]);
        m.addNum(nums[2]);
        System.out.println("find median: " + m.findMedian());
    }

    public MedianFinder() {
        left = new PriorityQueue<>((a, b) -> b - a);
        right = new PriorityQueue<>();
    }
    
    /**
     * 用最大优先级队列保存左半边数据，用最小优先级队列保存右半边数据，如果左半边小于
     * 右半边数据个数，则从右半边取出一个放到左半边，如果左半边大于右半边数据个数加
     * 一，则从左半边取出一个放到右半边
     */
    public void addNum(int num) {
        if (left.isEmpty() || left.peek() >= num) {
            left.offer(num);
        } else {
            right.offer(num);
        }
        if (left.size() < right.size()) {
            left.offer(right.poll());
        } else if (left.size() > right.size() + 1) {
            right.offer(left.poll());
        }
    }
    
    /**
     * 中位数在两个队列的队头，如果总数为奇数，则中位数为最大优先级队列队头，否则中位
     * 数为两个队列队头的平均数
     */
    public double findMedian() {
        return left.size() > right.size() ? left.peek() :
            (left.peek() + right.peek()) / 2.0;
    }
}
