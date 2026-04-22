/**
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
import arrays.ArrayUtils;

public class IsSameTree {

    public static void main(String[] args) {
        int[] nums = {5,2,4,1,3};
        int[] numss = {5,2,4,1,3};
        TreeNode node4 = new TreeNode(nums[4], null, null);
        TreeNode node3 = new TreeNode(nums[3], null, null);
        TreeNode node2 = new TreeNode(nums[2], node4, null);
        TreeNode node1 = new TreeNode(nums[1], node3, null);
        TreeNode root = new TreeNode(nums[0], node1, node2);
        TreeNode nodes4 = new TreeNode(numss[4], null, null);
        TreeNode nodes3 = new TreeNode(numss[3], null, null);
        TreeNode nodes2 = new TreeNode(numss[2], nodes4, null);
        TreeNode nodes1 = new TreeNode(numss[1], nodes3, null);
        TreeNode roots = new TreeNode(numss[0], nodes1, nodes2);
        IsSameTree i = new IsSameTree();
        ArrayUtils a = new ArrayUtils();
        a.printArray(nums);
        a.printArray(numss);
        System.out.println("same: " + i.isSameTree(root, roots));
    }

    /**
     * 如果节点只有一个为空或者值不相等则直接判断不相等，否则递归比较左右子树
     */
    public boolean isSameTree(TreeNode p, TreeNode q) {
        if (p == null || q == null) {
            return p == q;
        }
        return p.val == q.val && isSameTree(p.left, q.left) &&
            isSameTree(p.right, q.right);
    }

}
