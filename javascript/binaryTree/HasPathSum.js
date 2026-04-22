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
import { TreeNode } from "./TreeNode.js";

/**
 * 如果当前节点不是叶子节点，则递归访问它的左子树和右子树，访问的过程中将目标值减去当前节点
 * 的值作为新的目标值，如果当前节点是叶子节点，则判断当前节点的值是否等于目标值，是的话返回true
 */
var hasPathSum = function(root, targetSum) {
    if (!root) {
        return false;
    }
    if (!root.left && !root.right) {
        return root.val === targetSum;
    }
    return hasPathSum(root.left, targetSum - root.val) ||
        hasPathSum(root.right, targetSum - root.val);
}

var main = function() {
    /**
     *           5
     *         /   \
     *        4     8
     *       /     / \
     *      11    13  4
     *     / \         \
     *    7   2         1
     */
    let nums = [5,4,8,11,null,13,4,7,2,null,null,null,1];
    let target = 22;
    console.log('input array: ' + nums);
    console.log('target: ' + target);
    let node1 = new TreeNode(nums[12], null, null);
    let node2 = new TreeNode(nums[8], null, null);
    let node3 = new TreeNode(nums[7], null, null);
    let node4 = new TreeNode(nums[6], null, node1);
    let node5 = new TreeNode(nums[5], null, null);
    let node6 = new TreeNode(nums[3], node3, node2);
    let node7 = new TreeNode(nums[2], node5, node4);
    let node8 = new TreeNode(nums[1], node6, null);
    let node9 = new TreeNode(nums[0], node8, node7);
    console.log('path sum: ' + hasPathSum(node9, target));
}

main();
