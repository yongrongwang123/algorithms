/**
 * 230. Kth Smallest Element in a BST
 *
 * Given the root of a binary search tree, and an integer k, return the kth smallest
 * value (1-indexed) of all the values of the nodes in the tree.
 *
 * Example 1:
 * Input: root = [3,1,4,null,2], k = 1
 * Output: 1
 * 
 * Constraints:
 * The number of nodes in the tree is n.
 * 1 <= k <= n <= 10^4
 * 0 <= Node.val <= 10^4
 */

package binarySearchTree;

import java.util.ArrayDeque;
import java.util.Deque;
import binaryTree.TreeNode;

class KthSmallest {
    int count = 0;
    int kth = 0;

    public static void main(String[] args) {
        /**
         *                4
         *               / \
         *              3   5
         *             /     \
         *            1       6
         */
        int[] nums = {4,3,5,1,6};
        int k = 3;
        System.out.println("k: " + k);
        TreeNode node4 = new TreeNode(nums[4], null, null);
        TreeNode node3 = new TreeNode(nums[3], null, null);
        TreeNode node2 = new TreeNode(nums[2], null, node4);
        TreeNode node1 = new TreeNode(nums[1], node3, null);
        TreeNode root = new TreeNode(nums[0], node1, node2);
        KthSmallest k1 = new KthSmallest();
        System.out.println("val: " + k1.kthSmallest(root, k));
    }

    /**
     * 先访问左子树直到最左边的叶子节点，然后统计访问节点的个数，最后访问右子树，访问
     * 方法和之前一样，当访问节点的个数达到k个的时候，返回当前节点的值
     */
    public int kthSmallest(TreeNode root, int k) {
        count = k;
        find(root);
        return kth;
    }

    private void find(TreeNode root) {
        if (root == null || count <= 0) {
            return;
        }
        find(root.left);
        count--;
        kth = (count == 0 ? root.val : kth);
        find(root.right);
    }
}
