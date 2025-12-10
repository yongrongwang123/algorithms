package sort;
import java.util.Arrays;

/**
 * You are given a 0-indexed array of strings nums, where each string is of equal
 * length and consists of only digits. You are also given a 0-indexed 2D integer
 * array queries where queries[i] = [ki, trimi]. For each queries[i], you need to:
 * Trim each number in nums to its rightmost trimi digits.
 * Determine the index of the kith smallest trimmed number in nums. If two trimmed
 * numbers are equal, the number with the lower index is considered to be smaller.
 * Reset each number in nums to its original length.
 * Return an array answer of the same length as queries, where answer[i] is the
 * answer to the ith query.
 * Note:
 * To trim to the rightmost x digits means to keep removing the leftmost digit,
 * until only x digits remain.
 * Strings in nums may contain leading zeros.
 *
 * Example 1:
 * Input: nums = ["102","473","251","814"], queries = [[1,1],[2,3],[4,2],[1,2]]
 * Output: [2,2,1,0]
 * Explanation:
 * 1. After trimming to the last digit, nums = ["2","3","1","4"]. The smallest number
 *    is 1 at index 2.
 * 2. Trimmed to the last 3 digits, nums is unchanged. The 2nd smallest number is
 *    251 at index 2.
 * 3. Trimmed to the last 2 digits, nums = ["02","73","51","14"]. The 4th smallest
 *    number is 73.
 * 4. Trimmed to the last 2 digits, the smallest number is 2 at index 0.
 *
 * Constraints:
 * 1 <= nums.length <= 100
 * 1 <= nums[i].length <= 100
 * nums[i] consists of only digits.
 * All nums[i].length are equal.
 * 1 <= queries.length <= 100
 * queries[i].length == 2
 * 1 <= ki <= nums.length
 * 1 <= trimi <= nums[i].length
 */

public class SmallestTrimmedNumbers {
    public static void main(String[] args) {
        String[] nums = { "102","473","251","814" };
        int[][] queries = {{1,1},{2,3},{4,2},{1,2}};
        System.out.println(Arrays.toString(nums));
        System.out.println(Arrays.deepToString(queries));
        SmallestTrimmedNumbers s = new SmallestTrimmedNumbers();
        int[] trimmed = s.smallestTrimmedNumbers(nums, queries);
        System.out.println(Arrays.toString(trimmed));
    }

    /**
     * 首先将原数组的数组值和数组索引作为一个整体构成一个新的数组 list，然后从右往左
     * 遍历数字的每一位，针对每一位都对数组 list 进行一次计数排序，排序后遍历数组 queries，
     * 如果当前的数字位就是要查找的数字位，则将要查找的第 k 个元素的索引放入结果数组中
     */
    public int[] smallestTrimmedNumbers(String[] nums, int[][] queries) {
        int m = queries.length;
        int n = nums.length;
        int n0 = nums[0].length();
        int[] answers = new int[m];
        String[][] list = new String[n][2];

        for (int i = 0; i < nums.length; i++) {
            list[i] = new String[]{nums[i], Integer.toString(i)};
        }
        for (int i = n0 - 1, k = 0; i >= 0 && k < m; i--) {
            list = countingSort(list, i);
            for (int j = 0; j < m && k < m; j++) {
                if (n0 - queries[j][1] == i) {
                    answers[j] = Integer.parseInt(list[queries[j][0] - 1][1]);
                    k++;
                }
            }
        }

        return answers;
    }

    /**
     * 计数排序：遍历数组，每次遇到一个数字，取数字的指定位作为数组索引，指定位出现的
     * 次数作为数组值构成数组 counts，然后更新 counts 中每个元素为当前元素和前一个元素
     * 之和，最后反向遍历原数组，通过数字的指定位作为数组索引来查找数组值，将查找结果
     * 作为新数组的索引
     */
    private String[][] countingSort(String[][] nums, int digit) {
        int[] counts = new int[10];
        String[][] sorted = new String[nums.length][2];

        for (String[] num : nums) {
            int index = num[0].charAt(digit) - '0';
            counts[index]++;
        }
        for (int i = 1; i < counts.length; i++) {
            counts[i] += counts[i - 1];
        }
        for (int i = nums.length - 1; i >= 0; i--) {
            int index = nums[i][0].charAt(digit) - '0';
            counts[index]--;
            sorted[counts[index]] = nums[i];
        }

        return sorted;
    }
}
