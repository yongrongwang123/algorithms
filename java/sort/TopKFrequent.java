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
package sort;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.ArrayList;
import java.util.List;

public class TopKFrequent {
    public static void main(String[] args) {
        int[] nums = {1,1,1,2,2,3};
        int k = 2;
        System.out.println("nums: " + Arrays.toString(nums));
        System.out.println("k: " + k);
        TopKFrequent t = new TopKFrequent();
        System.out.println("nums: " + Arrays.toString(t.topKFrequent(nums, k)));
    }

    /**
     * 桶排序：首先用 map 存储数组中每个元素出现的频率，然后将相同频率的元素放到相同的
     * 桶中，最后反向遍历桶中元素，返回前 k 个元素
     */
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> map = new HashMap<>();
        List<List<Integer>> buckets = new ArrayList<>();
        int[] freqs = new int[k];
        for (int num : nums) {
            map.put(num, map.getOrDefault(num, 0) + 1);
        }
        for (int i = 0; i < nums.length + 1; i++) {
            buckets.add(new ArrayList<>());
        }
        for (int num : map.keySet()) {
            buckets.get(map.get(num)).add(num);
        }
        for (int i = buckets.size() - 1, j = 0; i >= 0 && j < k; i--) {
            for (int num : buckets.get(i)) {
                freqs[j] = num;
                j++;
            }
        }
        return freqs;
    }
}
