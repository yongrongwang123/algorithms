/**
 * 102. Binary Tree Level Order Traversal
 *
 * Given the root of a binary tree, return the level order traversal of its nodes' 
 * values. (i.e., from left to right, level by level).
 * 
 * Example 1:
 * Input: root = [3,9,20,null,null,15,7]
 * Output: [[3],[9,20],[15,7]]
 * 
 * Constraints:
 * The number of nodes in the tree is in the range [0, 2000].
 * -1000 <= Node.val <= 1000
 */

package binaryTree;

import java.util.LinkedList;
import java.util.ArrayList;
import java.util.List;
import java.util.Queue;

public class LevelOrder {

    public static void main(String[] args) {
        LevelOrder l = new LevelOrder();
        TreeNode root = l.createTree();
        System.out.println("level order: " + l.levelOrder(root));
    }

    public TreeNode createTree() {
        /*
         *            7
         *           / \
         *          5   6
         *         /\   /\
         *        1  2 3  4
         *       /         \
         *      8           9
         */
        int[] nums = {7,5,6,1,2,3,4,8,9};
        TreeNode node8 = new TreeNode(nums[8], null, null, null);
        TreeNode node7 = new TreeNode(nums[7], null, null, null);
        TreeNode node6 = new TreeNode(nums[6], null, node8, null);
        TreeNode node5 = new TreeNode(nums[5], null, null, null);
        TreeNode node4 = new TreeNode(nums[4], null, null, null);
        TreeNode node3 = new TreeNode(nums[3], node7, null, null);
        TreeNode node2 = new TreeNode(nums[2], node5, node6, null);
        TreeNode node1 = new TreeNode(nums[1], node3, node4, null);
        return new TreeNode(nums[0], node1, node2, null);
    }
    
    /**
     * 先将根节点压入队列，之后每弹出一个节点，先将该节点的值添加到保存该层节点的数组中，然后将
     * 该节点的左孩子和右孩子分别加入到队列，遍历完一层节点就将保存该层节点的数组添加到保存所有
     * 节点的数组中，队列为空时返回保存所有节点的数组
     */
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> lists = new ArrayList<>();
        if (root == null) {
            return lists;
        }
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        while (!queue.isEmpty()) {
            List<Integer> level = new ArrayList<>();
            for (int i = queue.size(); i > 0; i--) {
                root = queue.poll();
                level.add(root.val);
                if (root.left != null) {
                    queue.offer(root.left);
                }
                if (root.right != null) {
                    queue.offer(root.right);
                }
            }
            lists.add(level);
        }
        return lists;
    }
    
    public List<List<TreeNode>> levelOrder2(TreeNode root) {
        List<List<TreeNode>> lists = new ArrayList<>();
        if (root == null) {
            return lists;
        }
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        while (!queue.isEmpty()) {
            List<TreeNode> level = new ArrayList<>();
            for (int i = queue.size(); i > 0; i--) {
                root = queue.poll();
                level.add(root);
                if (root.left != null) {
                    queue.offer(root.left);
                }
                if (root.right != null) {
                    queue.offer(root.right);
                }
            }
            lists.add(level);
        }
        return lists;
    }

}
