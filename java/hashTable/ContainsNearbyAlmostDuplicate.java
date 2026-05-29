/**
 * You are given an integer array nums and two integers indexDiff and valueDiff.
 * Find a pair of indices (i, j) such that:
 * i != j,
 * abs(i - j) <= indexDiff.
 * abs(nums[i] - nums[j]) <= valueDiff, and
 * Return true if such pair exists or false otherwise.
 *
 * Example 1:
 * Input: nums = [1,2,3,1], indexDiff = 3, valueDiff = 0
 * Output: true
 *
 * Constraints:
 * 2 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 * 1 <= indexDiff <= nums.length
 * 0 <= valueDiff <= 10^9
 */

package hashTable;

import java.util.HashMap;
import java.util.Map;

public class ContainsNearbyAlmostDuplicate {

    public static void main(String[] args) {
        int[] nums = {-2147483648,2147483647};
        int indexDiff = 1;
        int valueDiff = 1;
        ContainsNearbyAlmostDuplicate c = new ContainsNearbyAlmostDuplicate();
        System.out.println(c.containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff));
    }
    
    /**
     * 使用 valueDiff+1 作为哈希桶大小，差值小于等于 valueDiff 的元素必定落在相同的哈希桶或者
     * 相邻的哈希桶
     */
    public boolean containsNearbyAlmostDuplicate(int[] nums, int indexDiff, int valueDiff) {
        Map<Long, Element> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            long num = (long) nums[i] + 1000000000;
            long hash = num / ((long) valueDiff + 1);
            if ((map.containsKey(hash) && i - map.get(hash).i <= indexDiff) ||
                (map.containsKey(hash - 1) && num - map.get(hash - 1).num <= valueDiff &&
                 i - map.get(hash - 1).i <= indexDiff) ||
                (map.containsKey(hash + 1) && map.get(hash + 1).num - num <= valueDiff &&
                 i - map.get(hash + 1).i <= indexDiff)) {
                return true;
            }
            map.put(hash, new Element(num, i));
        }
        return false;
    }

}

class Element {
    long num;
    int i;

    public Element(long num, int i) {
        this.num = num;
        this.i= i;
    }
}
