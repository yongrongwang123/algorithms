/**
 * Given two integers n and k, return all possible combinations of k numbers chosen
 * from the range [1, n]. You may return the answer in any order.
 *
 * Example 1:
 * Input: n = 4, k = 2
 * Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
 * Explanation: There are 4 choose 2 = 6 total combinations. Note that combinations
 * are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.
 * 
 * Constraints:
 * 1 <= n <= 20
 * 1 <= k <= n
 */

package recursion;

import java.util.ArrayList;
import java.util.List;
import arrays.ArrayUtils;

public class Combine {

    public static void main(String[] args) {
        int n = 4;
        int k = 2;
        Combine c = new Combine();
        ArrayUtils a = new ArrayUtils();
        System.out.println("n: " + n + ", k: " + k);
        a.print2dArray(a.toArray(c.combine(n, k)));
    }

    public List<List<Integer>> combine(int n, int k) {
        List<List<Integer>> lists = new ArrayList<List<Integer>>();
        helper(lists, new ArrayList<Integer>(), n, 1, k);
        return lists;
    }

    /**
     * 对于1~n范围内的每个数字，我们可以选择或者不选择，如果选择则添加当前数字到当前子集
     * ，如果不选择则不添加当前数字到当前子集，然后合并两个子集生成新的子集，如果选择的
     * 数字个数达到k个则是一个合法子集
     */
    private void helper(List<List<Integer>> lists, List<Integer> list, int n, int start, int k) {
        if (k == 0) {
            lists.add(new ArrayList<Integer>(list));
        }
        if (k == 0 || start > n - k + 1) {
            return;
        }
        list.add(start);
        helper(lists, list, n, start + 1, k - 1);
        list.remove(list.size() - 1);
        helper(lists, list, n, start + 1, k);
    }

}
