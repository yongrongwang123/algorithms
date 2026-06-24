/**
 * Given an integer array nums of unique elements, return all possible subsets
 * (the power set). The solution set must not contain duplicate subsets. Return
 * the solution in any order.
 * 
 * Example 1:
 * Input: nums = [1,2,3]
 * Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 * 
 * Constraints:
 * 1 <= nums.length <= 10
 * -10 <= nums[i] <= 10
 * All the numbers of nums are unique.
 */

package recursion;

import java.util.ArrayList;
import java.util.List;
import arrays.ArrayUtils;

public class Subsets {

    public static void main(String[] args) {
        int[] nums = {1,2,3};
        ArrayUtils a = new ArrayUtils();
        a.printArray(nums);
        Subsets s = new Subsets();
        System.out.println();
        a.print2dArray(a.toArray(s.subsets(nums)));
    }

    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> lists = new ArrayList<>();
        helper(lists, new ArrayList<>(), nums, 0);
        return lists;
    }

    /**
     * 对于原数组中的每个元素，我们可以选择或者不选择，如果选择则添加当前元素到当前
     * 子集，如果不选择则不添加当前元素到当前子集，然后合并两个子集生成新的子集
     */
    private void helper(List<List<Integer>> lists, List<Integer> list, int[] nums, int start) {
        if (start == nums.length) {
            lists.add(new ArrayList<>(list));
            return;
        }
        list.add(nums[start]);
        helper(lists, list, nums, start + 1);
        list.remove(list.size() - 1);
        helper(lists, list, nums, start + 1);
    }

}
