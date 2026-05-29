/**
 * Given a binary tree, determine if it is height-balanced. For this problem, a 
 * height-balanced binary tree is defined as: a binary tree in which the left and 
 * right subtrees of every node differ in height by no more than 1.
 * 
 * Example 1:
 * Input: root = [3,9,20,null,null,15,7]
 * Output: true
 * 
 * Constraints:
 * The number of nodes in the tree is in the range [0, 5000].
 * -10^4 <= Node.val <= 10^4
 */

package binarySearchTree;

import binaryTree.TreeNode;

public class IsBalanced {

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
        IsBalanced i = new IsBalanced();
        System.out.println(i.isBalanced(root));
    }
    
    public boolean isBalanced(TreeNode root) {
        return depth(root) != -1;
    }
    
    /**
     * 递归法：如果当前节点为空则返回0，否则依次递归检查左右子树，如果左右子树高度之差小于等于1，
     * 则返回左右子树高度较大者加一，否则返回-1，如果左右子树至少有一边返回-1，则直接返回-1
     */
    private int depth(TreeNode node) {
        if (node == null) {
            return 0;
        }
        int left = depth(node.left);
        if (left == -1) {
            return -1;
        }
        int right = depth(node.right);
        if (right == -1) {
            return -1;
        }
        int diff = (left >= right ? left - right : right - left);
        if (diff > 1) {
            return -1;
        }
        return (left >= right ? left : right) + 1;
    }

}
