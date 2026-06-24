/**
 * Given an array nums of distinct integers, return all the possible permutations.
 * You can return the answer in any order.
 *
 * Example 1:
 * Input: nums = [1,2,3]
 * Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 *
 * Constraints:
 * 1 <= nums.length <= 6
 * -10 <= nums[i] <= 10
 * All the integers of nums are unique.
 */

package recursion;

import java.util.ArrayList;
import java.util.List;
import java.util.Arrays;
import java.util.stream.Collectors;
import arrays.ArrayUtils;

public class Permute {

    public static void main(String[] args) {
        int[] nums = {1,2,3};
        Permute p = new Permute();
        ArrayUtils a = new ArrayUtils();
        a.print2dArray(a.toArray(p.permute(nums)));
    }

    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> lists = new ArrayList<List<Integer>>();
        helper(lists, nums, 0);
        return lists;
    }

    /**
     * 将数组分成两部分，[0,start-1] 是排列好的，[start,length-1] 是未排列好的，
     * 每次递归从未排列好的当中取出一个放到排列好的里面，当排列好的部分长度等于
     * 数组长度的时候，就获得了一个排列
     */
    private void helper(List<List<Integer>> lists, int[] nums, int start) {
        if (start == nums.length) {
            lists.add(Arrays.stream(nums).boxed().collect(Collectors.toList()));
            return;
        }
        for (int i = start; i < nums.length; i++) {
            swap(nums, i, start);
            helper(lists, nums, start + 1);
            swap(nums, i, start);
        }
    }

    private void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

}
