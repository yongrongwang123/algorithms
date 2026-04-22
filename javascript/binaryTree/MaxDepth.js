/**
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
import { TreeNode } from "./TreeNode.js";

/**
 * 自底向上法，递归访问子节点，如果当前节点为空则返回0，否则取左右子树的高度较大者加一作为
 * 返回值
 */
var maxDepth = function(root) {
    if (!root) {
        return 0;
    }
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    return Math.max(left, right) + 1;
}

var main = function() {
    /**
     *      3
     *     / \
     *    9  20
     *       / \
     *      15 7
     */
    let nums = [3,9,20,null,null,15,7];
    console.log('input array: ' + nums);
    let node1 = new TreeNode(nums[6], null, null);
    let node2 = new TreeNode(nums[5], null, null);
    let node3 = new TreeNode(nums[2], node2, node1);
    let node4 = new TreeNode(nums[1], null, null);
    let node5 = new TreeNode(nums[0], node4, node3);
    console.log('depth: ' + maxDepth(node5));
}

main();
