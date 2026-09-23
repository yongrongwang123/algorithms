/**
 * 108. Convert Sorted Array to Binary Search Tree
 *
 * Given an integer array nums where the elements are sorted in ascending order, 
 * convert it to a height-balanced binary search tree. A height-balanced binary 
 * tree is a binary tree in which the depth of the two subtrees of every node never 
 * differs by more than one.
 * 
 * Example 1:
 * Input: nums = [-10,-3,0,5,9]
 * Output: [0,-3,9,-10,null,5]
 * Explanation: [0,-10,5,null,-3,null,9] is also accepted:
 * 
 * Constraints:
 * 1 <= nums.length <= 10^4
 * -10^4 <= nums[i] <= 10^4
 * nums is sorted in a strictly increasing order.
 */

package binarySearchTree;

import binaryTree.TreeNode;

public class SortedArrayToBST {
    public static void main(String[] args) {
        /*
         *          0
         *         / \
         *       -3   9
         *       /   /  
         *    -10   5    
         */
        int[] nums = {-10,-3,0,5,9};
        SortedArrayToBST s = new SortedArrayToBST();
        BSTIterator b = new BSTIterator(s.sortedArrayToBST(nums));
        String str = "";
        while (b.hasNext()) {
            str += b.next() + " ";
        }
        System.out.println(str);
    }
    
    public TreeNode sortedArrayToBST(int[] nums) {
        return build(nums, 0, nums.length - 1);
    }
    
    /**
     * 取中间元素作为根结点，然后递归构建左子树和右子树
     */
    private TreeNode build(int[] nums, int left, int right) {
        if (left > right) {
            return null;
        }
        int mid = left + (right - left) / 2;
        TreeNode root = new TreeNode(nums[mid]);
        root.left = build(nums, left, mid - 1);
        root.right = build(nums, mid + 1, right);
        return root;
    }
}
