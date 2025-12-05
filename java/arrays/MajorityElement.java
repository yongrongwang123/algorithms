/**
 * Given an array nums of size n, return the majority element. The majority element
 * is the element that appears more than ⌊n / 2⌋ times. You may assume that the
 * majority element always exists in the array.
 * 
 * Example 1:
 * Input: nums = [3,2,3]
 * Output: 3
 * 
 * Constraints:
 * n == nums.length
 * 1 <= n <= 5 * 10^4
 * -10^9 <= nums[i] <= 10^9
 * The input is generated such that a majority element will exist in the array.
 */

package arrays;

import arrays.ArrayUtils;

public class MajorityElement {

    public static void main(String[] args) {
        int[] nums = {3,2,3};
        ArrayUtils a = new ArrayUtils();
        a.printArray(nums);
        MajorityElement m = new MajorityElement();
        System.out.println("majority: " + m.majorityElement(nums));
    }

    /**
     * 将数组中的元素分成主要元素和非主要元素，主要元素的个数多于非主要元素，只要出
     * 现一个非主要元素，就一定会出现一个对应的主要元素，到最后胜出的就是主要元素
     */
    public int majorityElement(int[] nums) {
        int major = 0;
        int count = 0;
        for (int num : nums) {
            major = (count != 0 ? major : num);
            count += (major == num ? 1 : -1);
        }
        return major;
    }

}
