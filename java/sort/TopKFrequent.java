package sort;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.ArrayList;
import java.util.List;
import java.util.Collections;

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

public class TopKFrequent {
    public static void main(String[] args) {
        int[] nums = {1,1,1,2,2,3};
        int k = 2;
        System.out.println(Arrays.toString(nums));
        System.out.println(k);
        TopKFrequent t = new TopKFrequent();
        System.out.println(Arrays.toString(t.topKFrequent(nums, k)));
    }

    /**
     * 桶排序：首先用 map 存储数组中每个元素出现的频率，然后将相同频率的元素放到相同的
     * 桶中，最后反向遍历桶中元素，返回前 k 个元素
     */
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> freqMap = new HashMap<Integer, Integer>();
        List<ArrayList<Integer>> bucket = new ArrayList<ArrayList<Integer>>(
                Collections.nCopies(nums.length + 1, null));
        List<Integer> answer = new ArrayList<Integer>();

        for (int num : nums) {
            if (freqMap.get(num) == null) {
                freqMap.put(num, 0);
            }
            freqMap.put(num, freqMap.get(num) + 1);
        }
        for (int num : freqMap.keySet()) {
            int freq = freqMap.get(num);
            if (bucket.get(freq) == null) {
                bucket.set(freq, new ArrayList<Integer>());
            }
            bucket.get(freq).add(num);
        }
        for (int i = bucket.size() - 1; i >= 0; i--) {
            if (bucket.get(i) != null) {
                answer.addAll(bucket.get(i));
            }
            if (answer.size() == k) {
                break;
            }
        }

        return answer.stream().mapToInt(i -> i).toArray();
    }
}
