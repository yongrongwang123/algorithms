/**
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

import java.util.Stack;
import binaryTree.TreeNode;

class KthSmallest {

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
        KthSmallest k1 = new KthSmallest();
        int k = 3;
        System.out.println("k: " + k + ", val: " + k1.kthSmallest(root, k));
    }

    /**
     * 迭代法：先迭代访问左子树直到最左边的叶子节点，然后将当前节点加入到堆栈中，最后迭代访问右子树，
     * 访问方法和之前一样，当访问节点的个数达到k个的时候，返回当前节点的值
     */
    public int kthSmallest(TreeNode root, int k) {
        Stack<TreeNode> stack = new Stack<TreeNode>();
        TreeNode cur = root;
        while (cur != null || !stack.isEmpty()) {
            if (cur != null) {
                stack.push(cur);
                cur = cur.left;
            } else {
                cur = stack.pop();
                k--;
                if (k == 0) {
                    return cur.val;
                }
                cur = cur.right;
            }
        }
        return -1;
    }

}
