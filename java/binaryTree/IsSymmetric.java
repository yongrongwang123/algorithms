/**
 * 101. Symmetric Tree
 *
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
        LevelOrder l = new LevelOrder();
        TreeNode root = l.createTree();
        IsSymmetric i = new IsSymmetric();
        System.out.println("symmetric: " + i.isSymmetric(root));
    }

    public boolean isSymmetric(TreeNode root) {
        return validate(root.left, root.right);
    }

    /**
     * 深度优先遍历，如果两边都是叶子节点则直接返回 true，如果只有一边是叶子节点或者两边
     * 都不是叶子节点但是值不同，则直接返回 false，最后递归对比镜像节点，即对比左孩子的
     * 左孩子和右孩子的右孩子，以及对比左孩子的右孩子和右孩子的左孩子
     */
    private boolean validate(TreeNode left, TreeNode right) {
        if (left == null && right == null) {
            return true;
        }
        if (left == null || right == null || left.val != right.val) {
            return false;
        }
        boolean sym1 = validate(left.left, right.right);
        boolean sym2 = validate(left.right, right.left);
        return sym1 && sym2;
    }

}
