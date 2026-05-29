/**
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).
 * A valid BST is defined as follows:
 * - The left subtree of a node contains only nodes with keys less than the node's key.
 * - The right subtree of a node contains only nodes with keys greater than the node's key.
 * - Both the left and right subtrees must also be binary search trees.
 *
 * Example 1:
 * Input: root = [2,1,3]
 * Output: true
 *
 * Constraints:
 * The number of nodes in the tree is in the range [1, 10^4].
 * -2^31 <= Node.val <= 2^31 - 1
 */

package binarySearchTree;

import binaryTree.TreeNode;

public class IsValidBST {
    TreeNode pre = null;
    TreeNode cur = null;

    public static void main(String[] args) {
        /**
         *                4
         *               / \
         *              3   5
         *             /     \
         *            1       6
         */
        int[] nums = {4,3,5,1,6};
        TreeNode node4 = new TreeNode(nums[4], null, null);
        TreeNode node3 = new TreeNode(nums[3], null, null);
        TreeNode node2 = new TreeNode(nums[2], null, node4);
        TreeNode node1 = new TreeNode(nums[1], node3, null);
        TreeNode root = new TreeNode(nums[0], node1, node2);
        IsValidBST i = new IsValidBST();
        System.out.println(i.isValidBST(root));
    }

    public boolean isValidBST(TreeNode root) {
        return valid(root, null, null);
    }

    /**
     * 递归法：从根节点向左子树递归，则小于当前节点值，向右子树递归，则大于当前节点值。每次遇到
     * 一个节点，如果当前节点小于等于最小值或者大于等于最大值，则返回false
     */
    private boolean valid(TreeNode node, TreeNode min, TreeNode max) {
        if (node == null) {
            return true;
        }
        if ((min != null && node.val <= min.val) || (max != null && node.val >= max.val)) {
            return false;
        }
        return valid(node.left, min, node) && valid(node.right, node, max);
    }

}
