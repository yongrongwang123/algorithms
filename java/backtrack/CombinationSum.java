/**
 * 39. Combination Sum
 *
 * Given an array of distinct integers candidates and a target integer target, return
 * a list of all unique combinations of candidates where the chosen numbers sum to
 * target. You may return the combinations in any order. The same number may be chosen
 * from candidates an unlimited number of times. Two combinations are unique if the
 * frequency of at least one of the chosen numbers is different. The test cases are
 * generated such that the number of unique combinations that sum up to target is
 * less than 150 combinations for the given input.
 * 
 * Example 1:
 * Input: candidates = [2,3,6,7], target = 7
 * Output: [[2,2,3],[7]]
 * Explanation:
 * 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
 * 7 is a candidate, and 7 = 7.
 * These are the only two combinations.
 * 
 * Constraints:
 * 1 <= candidates.length <= 30
 * 2 <= candidates[i] <= 40
 * All elements of candidates are distinct.
 * 1 <= target <= 40
 */

package backtrack;

import java.util.ArrayList;
import java.util.List;
import java.util.Arrays;

public class CombinationSum {
    public static void main(String[] args) {
        int[] candidates = {2,3,6,7};
        int target = 7;
        System.out.println("candidates: " + Arrays.toString(candidates));
        System.out.println("target: " + target);
        CombinationSum c = new CombinationSum();
        System.out.println("combination: " + c.combinationSum(candidates, target));
    }

    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        List<List<Integer>> lists = new ArrayList<>();
        comb(lists, new ArrayList<>(), candidates, target, 0);
        return lists;
    }

    /**
     * 对于原数组中的每个数字，如果当前数字小于等于目标值，则添加当前数字到候选集中，否
     * 则不添加当前数字到候选集中，当目标值为0的时候，说明形成了一个合法候选集
     */
    private void comb(List<List<Integer>> lists, List<Integer> list, int[] nums,
            int target, int start) {
        if (target == 0) {
            lists.add(new ArrayList<>(list));
            return;
        }
        for (int i = start; i < nums.length; i++) {
            if (target - nums[i] >= 0) {
                list.add(nums[i]);
                comb(lists, list, nums, target - nums[i], i);
                list.removeLast();
            }
        }
    }
}
