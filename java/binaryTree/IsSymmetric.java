/**
 * Given the root of a binary tree, check whether it is a mirror of itself (i.e.,
 * symmetric around its center).
 *
 * Example 1:
 * Input: root = [1,2,2,3,4,4,3]
 * Output: true
 *
 * Constraints:
 * The number of nodes in the tree is in the range [1, 1000].
 * -100 <= Node.val <= 100
 */

package binaryTree;

public class IsSymmetric {

    public static void main(String[] args) {
        /*
         *            5
         *           / \
         *          2   4
         *         /   /
         *        1   3
         */
        int[] nums = {5,2,4,1,3};
        TreeNode node4 = new TreeNode(nums[4], null, null);
        TreeNode node3 = new TreeNode(nums[3], null, null);
        TreeNode node2 = new TreeNode(nums[2], node4, null);
        TreeNode node1 = new TreeNode(nums[1], node3, null);
        TreeNode root = new TreeNode(nums[0], node1, node2);
        IsSymmetric i = new IsSymmetric();
        System.out.println(i.isSymmetric(root));
    }

    public boolean isSymmetric(TreeNode root) {
        return validate(root.left, root.right);
    }

    /**
     * 递归法：深度优先遍历，如果两边都是叶子节点则直接返回 true，如果只有一边是叶子
     * 节点或者两边都不是叶子节点但是值不同，则直接返回 false，最后递归对比镜像节点，
     * 即对比左孩子的左孩子和右孩子的右孩子，以及对比左孩子的右孩子和右孩子的左孩子
     */
    private boolean validate(TreeNode left, TreeNode right) {
        if (left == null && right == null) {
            return true;
        }
        if (left == null || right == null || left.val != right.val) {
            return false;
        }
        return validate(left.left, right.right) && validate(left.right, right.left);
    }

}
