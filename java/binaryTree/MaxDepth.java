/**
 * 104. Maximum Depth of Binary Tree
 *
 * Given the root of a binary tree, return its maximum depth. A binary tree's maximum
 * depth is the number of nodes along the longest path from the root node down to
 * the farthest leaf node.
 *
 * Example 1:
 * Input: root = [3,9,20,null,null,15,7]
 * Output: 3
 *
 * Constraints:
 * The number of nodes in the tree is in the range [0, 10^4].
 * -100 <= Node.val <= 100
 */

package binaryTree;

public class MaxDepth {

    public static void main(String[] args) {
        LevelOrder l = new LevelOrder();
        TreeNode root = l.createTree();
        MaxDepth m = new MaxDepth();
        System.out.println("depth: " + m.maxDepth(root));
    }

    /**
     * 自底向上法，递归访问子节点，如果当前节点为空则返回0，否则取左右子树的高度较大者加一作为
     * 返回值
     */
    public int maxDepth(TreeNode root) {
        if (root == null) {
            return 0;
        }
        int left = maxDepth(root.left);
        int right = maxDepth(root.right);
        return (left >= right ? left : right) + 1;
    }

}
