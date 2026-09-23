/**
 * 226. Invert Binary Tree
 *
 * Given the root of a binary tree, invert the tree, and return its root.
 *
 * Example 1:
 * Input: root = [4,2,7,1,3,6,9]
 * Output: [4,7,2,9,6,3,1]
 * 
 * Constraints:
 * 
 * The number of nodes in the tree is in the range [0, 100].
 * -100 <= Node.val <= 100
 */

package binaryTree;

public class InvertTree {
    public static void main(String[] args) {
        InvertTree i = new InvertTree();
        LevelOrder l = new LevelOrder();
        TreeNode root = l.createTree();
        System.out.println("level order: " + l.levelOrder(root));
        root = i.invertTree(root);
        System.out.println("level order: " + l.levelOrder(root));
    }

    /**
     * 先访问左子树直到最左边节点，然后访问右子树，最后交换左孩子和右孩子，从下往上如此
     * 交换直到根结点
     */
    public TreeNode invertTree(TreeNode root) {
        if (root == null) {
            return null;
        }
        TreeNode left = invertTree(root.left);
        TreeNode right = invertTree(root.right);
        root.left = right;
        root.right = left;
        return root;
    }
}
