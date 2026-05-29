/**
 * 349. Intersection of Two Arrays
 *
 * Given two integer arrays nums1 and nums2, return an array of their intersection.
 * Each element in the result must be unique and you may return the result in any order.
 *
 * Example 1:
 * Input: nums1 = [1,2,2,1], nums2 = [2,2]
 * Output: [2]
 *
 * Constraints:
 * 1 <= nums1.length, nums2.length <= 1000
 * 0 <= nums1[i], nums2[i] <= 1000
 */

package hashTable;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class Intersection {

    public static void main(String[] args) {
        int[] nums1 = {1,2,2,1};
        int[] nums2 = {2,2};
        System.out.println("nums1: " + Arrays.toString(nums1));
        System.out.println("nums2: " + Arrays.toString(nums2));
        Intersection i = new Intersection();
        System.out.println("intersection: " + Arrays.toString(i.intersection(nums1, nums2)));
    }

    /**
     * 第一个集合用来存储第一个数组中的元素，第二个集合在第二个数组中的元素出现在第一个集合的时候
     * 就存储该元素，最后将第二个集合转换成数组
     */
    public int[] intersection(int[] nums1, int[] nums2) {
        Set<Integer> set = toSet(nums1);
        Set<Integer> intersected = new HashSet<>();
        for (int num : nums2) {
            if (set.contains(num)) {
                intersected.add(num);
            }
        }
        return intersected.stream().mapToInt(i -> i).toArray();
    }

    private Set<Integer> toSet(int[] nums) {
        Set<Integer> set = new HashSet<>();
        for (int num : nums) {
            set.add(num);
        }
        return set;
    }

}
