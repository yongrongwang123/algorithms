/**
 * 414. Third Maximum Number
 *
 * Given an integer array nums, return the third distinct maximum number in this
 * array. If the third maximum does not exist, return the maximum number.
 *
 * Example 1:
 * Input: nums = [3,2,1]
 * Output: 1
 * Explanation: The third maximum is 1.
 *
 * Constraints:
 * 1 <= nums.length <= 10^4
 * -2^31 <= nums[i] <= 2^31 - 1
 */
package arrays;

import java.util.Arrays;

public class ThirdMax {

    public static void main(String[] args) {
        int[] nums = {3,2,1};
        System.out.println("nums: " + Arrays.toString(nums));
        ThirdMax t = new ThirdMax();
        System.out.println("max: " + t.thirdMax(nums));
    }

    /**
     * 从左往右扫描，找到该次扫描的最大值，保存第一次扫描的最大值作为备用，再做一次从左往右
     * 扫描，每当遇到该次扫描的最大值就和最后一个元素互换，然后数组长度减一，像这样找最大值找三次
     */
    public int thirdMax(int[] nums) {
        int max = nums[0];
        int max1 = max;
        int n = nums.length;
        int count = 0;
        for (; n > 0 && count < 3; count++) {
            max = nums[0];
            for (int i = 0; i < n; i++) {
                max = (max >= nums[i] ? max : nums[i]);
            }
            if (count == 2) {
                count++;
                break;
            }
            max1 = (count !=0 ? max1 : max);
            for (int i = 0; i < n; i++) {
                if (nums[i] == max) {
                    for (int j = n - 1; j >= i; j--) {
                        n--;
                        if (nums[j] != max) {
                            nums[i] = nums[j];
                            break;
                        }
                    }
                }
            }
        }
        return count < 3 ? max1 : max;
    }

}
