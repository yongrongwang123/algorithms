/**
 * 106. Construct Binary Tree from Inorder and Postorder Traversal
 *
 * Given two integer arrays inorder and postorder where inorder is the inorder
 * traversal of a binary tree and postorder is the postorder traversal of the same
 * tree, construct and return the binary tree.
 *
 * Example 1:
 * Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
 * Output: [3,9,20,null,null,15,7]
 *
 * Constraints:
 * 1 <= inorder.length <= 3000
 * postorder.length == inorder.length
 * -3000 <= inorder[i], postorder[i] <= 3000
 * inorder and postorder consist of unique values.
 * Each value of postorder also appears in inorder.
 * inorder is guaranteed to be the inorder traversal of the tree.
 * postorder is guaranteed to be the postorder traversal of the tree.
 */

package binaryTree;

import java.util.HashMap;

public class BuildTree {
    int p;
    int i;

    public static void main(String[] args) {
        /**
         *      3
         *     / \
         *    9   20
         *       / \
         *     15   7
         */
        int[] inorder = {9,3,15,20,7};
        int[] postorder = {9,15,7,20,3};
        BuildTree b = new BuildTree();
        LevelOrder l = new LevelOrder();
        TreeNode root = b.buildTree(inorder, postorder);
        System.out.println("level order: " + l.levelOrder(root));
    }

    public TreeNode buildTree(int[] inorder, int[] postorder) {
        p = postorder.length - 1;
        i = inorder.length - 1;
        return build(postorder, inorder, 3001);
    }

    /**
     * 首先将后序遍历的最后一个元素值作为当前节点的值，依次往前顺序是根结点到右子树到左子树
     * ，然后将当前节点的值作为中序遍历左右子树数组的分割点，最后分别递归遍历左右子树，后序
     * 遍历和中序遍历的子树数组长度相同，中序遍历右子树数组停止点是根节点的值，左子树数组停
     * 止点是分割前的停止点
     */
    private TreeNode build(int[] postorder, int[] inorder, int stop) {
        if (i < 0 || inorder[i] == stop) {
            return null;
        }
        TreeNode root = new TreeNode(postorder[p]);
        p--;
        root.right = build(postorder, inorder, root.val);
        i--;
        root.left = build(postorder, inorder, stop);
        return root;
    }

}
