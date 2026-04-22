/**
 * 100. Same Tree
 *
 * Given the roots of two binary trees p and q, write a function to check if they
 * are the same or not. Two binary trees are considered the same if they are structurally
 * identical, and the nodes have the same value.
 *
 * Example 1:
 * Input: p = [1,2,3], q = [1,2,3]
 * Output: true
 *
 * Constraints:
 * The number of nodes in both trees is in the range [0, 100].
 * -10^4 <= Node.val <= 10^4
 */

package binaryTree;

import java.util.Arrays;

public class IsSameTree {

    public static void main(String[] args) {
        IsSameTree i = new IsSameTree();
        LevelOrder l = new LevelOrder();
        TreeNode root1 = l.createTree();
        TreeNode root2 = l.createTree();
        System.out.println("same: " + i.isSameTree(root1, root2));
    }

    /**
     * 如果节点只有一个为空或者值不相等则直接判断不相等，否则递归比较左右子树
     */
    public boolean isSameTree(TreeNode p, TreeNode q) {
        if (p == null && q == null) {
            return true;
        }
        if (p == null || q == null || p.val != q.val) {
            return false;
        }
        boolean same1 = isSameTree(p.left, q.left);
        boolean same2 = isSameTree(p.right, q.right);
        return same1 && same2;
    }

}
