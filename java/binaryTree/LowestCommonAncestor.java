/**
 * 236. Lowest Common Ancestor of a Binary Tree
 *
 * Given a binary tree, find the lowest common ancestor (LCA) of two given nodes 
 * in the tree. According to the definition of LCA on Wikipedia: “The lowest common 
 * ancestor is defined between two nodes p and q as the lowest node in T that has 
 * both p and q as descendants (where we allow a node to be a descendant of itself).”
 * 
 * Example 1:
 * Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
 * Output: 3
 * Explanation: The LCA of nodes 5 and 1 is 3.
 * 
 * Constraints:
 * The number of nodes in the tree is in the range [2, 10^5].
 * -10^9 <= Node.val <= 10^9
 * All Node.val are unique.
 * p != q
 * p and q will exist in the tree.
 */

package binaryTree;

public class LowestCommonAncestor {

    public static void main(String[] args) {
        LowestCommonAncestor l = new LowestCommonAncestor();
        TreeNode[] nodes = l.createTree();
        TreeNode node = l.lowestCommonAncestor(nodes[0], nodes[1], nodes[2]);
        System.out.println("ancestor: " + (node != null ? node.val : "NULL"));
    }

    private TreeNode[] createTree() {
        /*
         *            7
         *           / \
         *          5   6
         *         /\   /\
         *        1  2 3  4
         *       /         \
         *      8           9
         */
        int[] nums = {7,5,6,1,2,3,4,8,9};
        TreeNode node8 = new TreeNode(nums[8], null, null);
        TreeNode node7 = new TreeNode(nums[7], null, null);
        TreeNode node6 = new TreeNode(nums[6], null, node8);
        TreeNode node5 = new TreeNode(nums[5], null, null);
        TreeNode node4 = new TreeNode(nums[4], null, null);
        TreeNode node3 = new TreeNode(nums[3], node7, null);
        TreeNode node2 = new TreeNode(nums[2], node5, node6);
        TreeNode node1 = new TreeNode(nums[1], node3, node4);
        TreeNode root = new TreeNode(nums[0], node1, node2);
        return new TreeNode[]{root, node5, node8};
    }
    
    /**
     * 如果当前节点等于null，p或者q，则不再遍历子节点，直接返回当前节点；否则分别递归
     * 遍历左子树和右子树。如果两个子树有一个返回的等于null，则返回另一个的结果，如果
     * 两个子树返回的都不等于null，则返回当前节点
     */
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if (root == null || root == p || root == q) {
            return root;
        }
        TreeNode left = lowestCommonAncestor(root.left, p, q);
        TreeNode right = lowestCommonAncestor(root.right, p, q);
        if (left != null && right != null) {
            return root;
        }
        return left != null ? left : right;
    }
    
}
