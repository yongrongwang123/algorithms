/**
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
import arrays.ArrayUtils;

public class BuildTree {
    int p = 0;

    public static void main(String[] args) {
        int[] inorder = {9,3,15,20,7};
        int[] postorder = {9,15,7,20,3};
        BuildTree b = new BuildTree();
        LevelOrder l = new LevelOrder();
        TreeNode root = b.buildTree(inorder, postorder);
        ArrayUtils a = new ArrayUtils();
        a.print2dArray(a.toArray(l.levelOrder(root)));
    }

    public TreeNode buildTree(int[] inorder, int[] postorder) {
        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
        int n = inorder.length - 1;
        for (int i = 0; i <= n; i++) {
            map.put(inorder[i], i);
        }
        p = n;
        return build(postorder, 0, n, map);
    }

    /**
     * map保存中序遍历的元素值和对应索引，首先将后序遍历的最后一个元素值作为当前节点的值，然后
     * 通过map来获得中序遍历中相同元素值对应索引，将其作为中序遍历左右子树数组的分割点，最后分
     * 别递归遍历左右子树
     */
    private TreeNode build(int[] postorder, int inStart, int inEnd, HashMap<Integer, Integer> map) {
        if (inStart > inEnd) {
            return null;
        }
        TreeNode node = new TreeNode(postorder[p]);
        int mid = map.get(postorder[p]);
        p--;
        node.right = build(postorder, mid + 1, inEnd, map);
        node.left = build(postorder, inStart, mid - 1, map);
        return node;
    }

}
