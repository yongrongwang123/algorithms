/**
 * 652. Find Duplicate Subtrees
 *
 * Given the root of a binary tree, return all duplicate subtrees. For each kind 
 * of duplicate subtrees, you only need to return the root node of any one of them.
 * Two trees are duplicate if they have the same structure with the same node values.
 * 
 * Example 1:
 * Input: root = [1,2,3,4,null,2,4,null,null,4]
 * Output: [[2,4],[4]]
 * 
 * Constraints:
 * The number of the nodes in the tree will be in the range [1, 10^4]
 * -200 <= Node.val <= 200
 */

package hashTable;

import java.util.HashMap;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import binaryTree.TreeNode;

public class FindDuplicateSubtrees {
    int currentId = 1;

    public static void main(String[] args) {
        /**
         *        1
         *       / \
         *      2   3
         *     /   / \
         *    4   2   4
         *       /
         *      4
         */
        int[] nums = {1,2,3,4,2,4,4};
        TreeNode node6 = new TreeNode(nums[6], null, null);
        TreeNode node5 = new TreeNode(nums[5], null, null);
        TreeNode node4 = new TreeNode(nums[4], node6, null);
        TreeNode node3 = new TreeNode(nums[3], null, null);
        TreeNode node2 = new TreeNode(nums[2], node4, node5);
        TreeNode node1 = new TreeNode(nums[1], node3, null);
        TreeNode root = new TreeNode(nums[0], node1, node2);
        FindDuplicateSubtrees f = new FindDuplicateSubtrees();
        String str = "";
        for (TreeNode node : f.findDuplicateSubtrees(root)) {
            str += node.val + " ";
        }
        System.out.println(str);
    }
    
    public List<TreeNode> findDuplicateSubtrees(TreeNode root) {
        Map<String, Integer> serialToId = new HashMap<>();
        Map<Integer, Integer> idToCount = new HashMap<>();
        List<TreeNode> trees  = new ArrayList<>();
        postOrder(root, serialToId, idToCount, trees);
        return trees;
    }
    
    /**
     * 使用后序遍历将子树序列化成字符串，相同字符串表示的子树重复出现，则将其根结点加入结果，通
     * 过使用id表示左右子树来简化字符串拼接操作
     */
    private int postOrder(TreeNode root, Map<String, Integer> serialToId, 
                          Map<Integer, Integer> idToCount, List<TreeNode> trees) {
        if (root == null) {
            return 0;
        }
        int leftId = postOrder(root.left, serialToId, idToCount, trees);
        int rightId = postOrder(root.right, serialToId, idToCount, trees);
        String serial = root.val + "," + leftId + "," + rightId;
        serialToId.putIfAbsent(serial, currentId);
        int id = serialToId.get(serial);
        currentId += (id == currentId ? 1 : 0);
        int count = idToCount.getOrDefault(id, 0) + 1;
        if (count == 2) {
            trees.add(root);
        }
        idToCount.put(id, count);
        return id;
    }

}
