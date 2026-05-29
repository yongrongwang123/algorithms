/**
 * You are given the root of a binary search tree (BST) and an integer val.
 * Find the node in the BST that the node's value equals val and return the subtree
 * rooted with that node. If such a node does not exist, return null.
 *
 * Example 1:
 * Input: root = [4,2,7,1,3], val = 2
 * Output: [2,1,3]
 *
 * Constraints:
 * The number of nodes in the tree is in the range [1, 5000].
 * 1 <= Node.val <= 10^7
 * root is a binary search tree.
 * 1 <= val <= 10^7
 */

package binarySearchTree;

import binaryTree.TreeNode;
import binaryTree.LevelOrder;
import arrays.ArrayUtils;

public class SearchBST {

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
        SearchBST s = new SearchBST();
        root = s.searchBST(root, 2);
        LevelOrder l = new LevelOrder();
        ArrayUtils a = new ArrayUtils();
        if (root != null) {
            System.out.println("True");
            a.print2dArray(a.toArray(l.levelOrder(root)));
        } else {
            System.out.println("False");
        }
    }

    /**
     * 迭代法：如果当前值等于目标值则返回当前节点，如果当前值大于目标值则查找左子树，否则查找右子树
     */
    public TreeNode searchBST(TreeNode root, int val) {
        while (root != null && root.val != val) {
            if (root.val > val) {
                root = root.left;
            } else {
                root = root.right;
            }
        }
        return root;
    }

}
