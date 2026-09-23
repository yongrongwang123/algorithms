/**
 * 437. Path Sum III
 *
 * Given the root of a binary tree and an integer targetSum, return the number of
 * paths where the sum of the values along the path equals targetSum. The path does
 * not need to start or end at the root or a leaf, but it must go downwards (i.e.,
 * traveling only from parent nodes to child nodes).
 * 
 * Example 1:
 * Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
 * Output: 3
 * Explanation: The paths that sum to 8 are shown.
 * 
 * Constraints:
 * The number of nodes in the tree is in the range [0, 1000].
 * -10^9 <= Node.val <= 10^9
 * -1000 <= targetSum <= 1000
 */

package binaryTree;

import java.util.HashMap;
import java.util.Map;

public class PathSum {
    public static void main(String[] args) {
        int target = 7;
        System.out.println("target: " + target);
        LevelOrder l = new LevelOrder();
        TreeNode root = l.createTree();
        PathSum p = new PathSum();
        System.out.println("path sum: " + p.pathSum(root, target));
    }

    public int pathSum(TreeNode root, int targetSum) {
        if (root == null) {
            return 0;
        }
        Map<Long, Integer> map = new HashMap<>();
        long sum = 0;
        map.put(sum, 1);
        return path(root, targetSum, sum, map);
    }

    /**
     * 用前缀和以及 map，树的路径和类似子数组求和，对树进行深度优先遍历，存储根到每个
     * 节点的前缀和跟对应出现的次数，假设存在两个位置的前缀和 sum1 和 sum2，满足条件
     * sum1 - sum2 = target，也就是当 map 中存在 sum2 = sum1 - target 的时候，找到了合
     * 法的路径，将它出现的次数加到最终结果，计算前缀和的时候是自顶向下，统计前缀和次
     * 数的时候是自底向上，使用回溯法可以避免重复统计
     */
    private int path(TreeNode root, int target, long sum, Map<Long, Integer> map) {
        if (root == null) {
            return 0;
        }
        sum += root.val;
        int count = map.getOrDefault(sum - target, 0);
        map.put(sum, map.getOrDefault(sum, 0) + 1);
        count += path(root.left, target, sum, map);
        count += path(root.right, target, sum, map);
        map.put(sum, map.get(sum) - 1);
        return count;
    }
}
