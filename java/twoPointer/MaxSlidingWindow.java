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

package twoPointer;

import java.util.Arrays;
import java.util.ArrayDeque;
import java.util.Deque;

public class MaxSlidingWindow {
    public static void main(String[] args) {
        int[] nums = {1,3,-1,-3,5,3,6,7};
        int k = 3;
        System.out.println("nums: " + Arrays.toString(nums));
        System.out.println("k: " + k);
        MaxSlidingWindow m = new MaxSlidingWindow();
        System.out.println("window: " + Arrays.toString(m.maxSlidingWindow(nums, k)));
    }

    /**
     * 用滑动窗口结合单调双端队列，将滑动窗口从左往右滑动，如果队列头部索引不在滑动窗
     * 口内则将它弹出，如果队列尾部索引的元素小于等于当前元素则将它们弹出，然后将当前
     * 元素的索引压入到队列尾部，当滑动窗口内的元素个数等于k的时候，将队列头部索引的元
     * 素添加到结果数组。
     */
    public int[] maxSlidingWindow(int[] nums, int k) {
        int n = nums.length;
        int[] arr = new int[n - k + 1];
        Deque<Integer> deque = new ArrayDeque<>();
        for (int i = 0; i < n; i++) {
            int j = i - k + 1;
            if (!deque.isEmpty() && deque.peekFirst() < j) {
                deque.pollFirst();
            }
            while (!deque.isEmpty() && nums[deque.peekLast()] <= nums[i]) {
                deque.pollLast();
            }
            deque.offerLast(i);
            if (j >= 0) {
                arr[j] = nums[deque.peekFirst()];
            }
        }
        return arr;
    }
}
