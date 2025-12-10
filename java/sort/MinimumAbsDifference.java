package sort;
import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;

/**
 * Given an array of distinct integers arr, find all pairs of elements with the
 * minimum absolute difference of any two elements. Return a list of pairs in ascending
 * order(with respect to pairs), each pair [a, b] follows
 * a, b are from arr
 * a < b
 * b - a equals to the minimum absolute difference of any two elements in arr
 *
 * Example 1:
 * Input: arr = [4,2,1,3]
 * Output: [[1,2],[2,3],[3,4]]
 * Explanation: The minimum absolute difference is 1. List all pairs with difference
 * equal to 1 in ascending order.
 *
 * Constraints:
 * 2 <= arr.length <= 10^5
 * -10^6 <= arr[i] <= 10^6
 */

public class MinimumAbsDifference {
    public static void main(String[] args) {
        int[] nums = { 4,2,1,3 };
        System.out.println(Arrays.toString(nums));
        MinimumAbsDifference m = new MinimumAbsDifference();
        System.out.println(m.minimumAbsDifference(nums));
    }

    /**
     * 首先对数组进行排序，然后从左往右遍历数组，记录两个连续元素差值的最小值，再次
     * 从左往右遍历数组，保存每组差值等于最小值的两个元素
     */
    public List<List<Integer>> minimumAbsDifference(int[] arr) {
        Arrays.sort(arr);
        List<List<Integer>> pairs = new ArrayList<List<Integer>>();
        int min = arr[1] - arr[0];

        for (int i = 1; i < arr.length; i++) {
            if (arr[i] - arr[i - 1] < min) {
                min = arr[i] - arr[i - 1];
            }
        }
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] - arr[i - 1] == min) {
                pairs.add(Arrays.asList(arr[i - 1], arr[i]));
            }
        }

        return pairs;
    }
}
