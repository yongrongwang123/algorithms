/**
 * 701. Insert into a Binary Search Tree
 *
 * You are given the root node of a binary search tree (BST) and a value to insert 
 * into the tree. Return the root node of the BST after the insertion. It is guaranteed 
 * that the new value does not exist in the original BST.
 * Notice that there may exist multiple valid ways for the insertion, as long as the 
 * tree remains a BST after insertion. You can return any of them.
 * 
 * Example 1:
 * Input: root = [4,2,7,1,3], val = 5
 * Output: [4,2,7,1,3,5]
 * Explanation: Another accepted tree is:
 * 
 * Constraints:
 * The number of nodes in the tree will be in the range [0, 10^4].
 * -10^8 <= Node.val <= 10^8
 * All the values Node.val are unique.
 * -10^8 <= val <= 10^8
 * It's guaranteed that val does not exist in the original BST.
 */

package binarySearchTree;

import binaryTree.TreeNode;

public class InsertIntoBST {

    public static void main(String[] args) {
        /**
         *                4
         *               / \
         *              3   5
         *             /     \
         *            1       6
         */
        int val = 2;
        int[] nums = {4,3,5,1,6};
        System.out.println("val: " + val);
        TreeNode node4 = new TreeNode(nums[4], null, null);
        TreeNode node3 = new TreeNode(nums[3], null, null);
        TreeNode node2 = new TreeNode(nums[2], null, node4);
        TreeNode node1 = new TreeNode(nums[1], node3, null);
        TreeNode root = new TreeNode(nums[0], node1, node2);
        BSTIterator b = new BSTIterator(root);
        String str = "";
        while (b.hasNext()) {
            str += b.next() + " ";
        }
        System.out.println(str);
        InsertIntoBST i = new InsertIntoBST();
        b = new BSTIterator(i.insertIntoBST(root, val));
        str = "";
        while (b.hasNext()) {
            str += b.next() + " ";
        }
        System.out.println(str);
    }
    
    /**
     * 如果当前值大于目标值则查找左子树，小于目标值则查找右子树，如果查找
     * 到空节点则插入新节点
     */
    public TreeNode insertIntoBST(TreeNode root, int val) {
        if (root == null) {
            return new TreeNode(val);
        }
        TreeNode cur = root;
        while (true) {
            if (cur.val > val) {
                if (cur.left != null) {
                    cur = cur.left;
                } else {
                    cur.left = new TreeNode(val);
                    return root;
                }
            } else {
                if (cur.right != null) {
                    cur = cur.right;
                } else {
                    cur.right = new TreeNode(val);
                    return root;
                }
            }
        }
    }

}
