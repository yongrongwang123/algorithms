/**
 * 112. Path Sum
 *
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
        int target = 8;
        System.out.println("target: " + target);
        LevelOrder l = new LevelOrder();
        TreeNode root = l.createTree();
        HasPathSum h = new HasPathSum();
        System.out.println("path sum: " + h.hasPathSum(root, target));
    }
    
    /**
     * 如果当前节点不是叶子节点，则递归访问它的左子树和右子树，访问的过程中将目标值减去当前节点
     * 的值作为新的目标值，如果当前节点是叶子节点，则判断当前节点的值是否等于目标值，是的话返回true
     */
    public boolean hasPathSum(TreeNode root, int targetSum) {
        if (root == null) {
            return false;
        }
        targetSum -= root.val;
        boolean has = root.left == null && root.right == null && targetSum == 0;
        has |= hasPathSum(root.left, targetSum);
        has |= hasPathSum(root.right, targetSum);
        return has;
    }
    
}
