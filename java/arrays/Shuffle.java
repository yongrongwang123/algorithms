/**
 * Given an integer array nums, design an algorithm to randomly shuffle the array.
 * All permutations of the array should be equally likely as a result of the shuffling.
 * Implement the Solution class:
 *  - Solution(int[] nums) Initializes the object with the integer array nums.
 *  - int[] reset() Resets the array to its original configuration and returns it.
 *  - int[] shuffle() Returns a random shuffling of the array.
 * 
 * Example 1:
 * Input
 * ["Solution", "shuffle", "reset", "shuffle"]
 * [[[1, 2, 3]], [], [], []]
 * Output
 * [null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]
 * Explanation
 * Solution solution = new Solution([1, 2, 3]);
 * solution.shuffle();    // Shuffle the array [1,2,3] and return its result.
 *                        // Any permutation of [1,2,3] must be equally likely to be returned.
 *                        // Example: return [3, 1, 2]
 * solution.reset();      // Resets the array back to its original configuration [1,2,3]. Return [1, 2, 3]
 * solution.shuffle();    // Returns the random shuffling of array [1,2,3]. Example: return [1, 3, 2]
 *
 * Constraints:
 * 1 <= nums.length <= 50
 * -10^6 <= nums[i] <= 10^6
 * All the elements of nums are unique.
 * At most 10^4 calls in total will be made to reset and shuffle.
 */

package arrays;

import java.util.Random;

public class Shuffle {

    private int[] nums;
    private Random random;

    public static void main(String[] args) {
        int[] nums = {1,2,3};
        ArrayUtils a = new ArrayUtils();
        a.printArray(nums);
        Shuffle s = new Shuffle(nums);
        a.printArray(s.shuffle());
        a.printArray(s.reset());
        a.printArray(s.shuffle());
    }

    public Shuffle(int[] nums) {
        this.nums = nums;
        this.random = new Random();
    }
    
    public int[] reset() {
        return nums;
    }
    
    /**
     * 证明元素在 [0,j] 任何位置概率相等：
     * 1. 如果 i == j，nums[i] 和 nums[j] 不需要交换，概率为 1/(j+1)
     * 2. 如果 i != j，nums[i] 和 nums[j] 需要交换，概率为 (1-1/(j+1))*(1/j) = 1/(j+1)
     */
    public int[] shuffle() {
        int[] arr = nums.clone();
        for (int i = 1; i < arr.length; i++) {
            int j = random.nextInt(i + 1);
            swap(arr, i, j);
        }
        return arr;
    }

    private void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

}
