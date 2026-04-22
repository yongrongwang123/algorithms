/**
 * Given the root of a binary tree and an integer targetSum, return true if the 
 * tree has a root-to-leaf path such that adding up all the values along the path 
 * equals targetSum. A leaf is a node with no children.
 * 
 * Example 1:
 * Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
 * Output: true
 * Explanation: The root-to-leaf path with the target sum is shown.
 * 
 * Constraints:
 * The number of nodes in the tree is in the range [0, 5000].
 * -1000 <= Node.val <= 1000
 * -1000 <= targetSum <= 1000
 */

package binaryTree;

public class HasPathSum {

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
        int targetSum = 8;
        HasPathSum h = new HasPathSum();
        System.out.println(h.hasPathSum(root, targetSum));
    }
    
    /**
     * 如果当前节点不是叶子节点，则递归访问它的左子树和右子树，访问的过程中将目标值减去当前节点
     * 的值作为新的目标值，如果当前节点是叶子节点，则判断当前节点的值是否等于目标值，是的话返回true
     */
    public boolean hasPathSum(TreeNode root, int targetSum) {
        if (root == null) {
            return false;
        }
        if (root.left == null && root.right == null) {
            return root.val == targetSum;
        }
        return hasPathSum(root.left, targetSum - root.val) ||
            hasPathSum(root.right, targetSum - root.val);
    }
    
}
