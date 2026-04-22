/**
 * Given the root of a binary tree, check whether it is a mirror of itself (i.e., 
 * symmetric around its center).
 * 
 * Example 1:
 * Input: root = [1,2,2,3,4,4,3]
 * Output: true
 * 
 * Constraints:
 * The number of nodes in the tree is in the range [1, 1000].
 * -100 <= Node.val <= 100
 */
import { TreeNode } from "./TreeNode.js";

var isSymmetric = function(root) {
    return validate(root.left, root.right);
}

/**
 * 递归法：深度优先遍历，如果两边都是叶子节点则直接返回 true，如果只有一边是叶子
 * 节点或者两边都不是叶子节点但是值不同，则直接返回 false，最后递归对比镜像节点，
 * 即对比左孩子的左孩子和右孩子的右孩子，以及对比左孩子的右孩子和右孩子的左孩子
 */
var validate = function(left, right) {
    if (!left && !right) {
        return true;
    }
    if (!left || !right || left.val !== right.val) {
        return false;
    }
    return validate(left.left, right.right) && validate(left.right, right.left);
}

var main = function() {
    /**
     *           1
     *         /   \
     *        2     2
     *       / \   / \
     *      3  4  4  3
     */
    let nums = [1,2,2,3,4,4,3];
    console.log('input array: ' + nums);
    let node1 = new TreeNode(nums[6], null, null);
    let node2 = new TreeNode(nums[5], null, null);
    let node3 = new TreeNode(nums[4], null, null);
    let node4 = new TreeNode(nums[3], null, null);
    let node5 = new TreeNode(nums[2], node2, node1);
    let node6 = new TreeNode(nums[1], node4, node3);
    let node7 = new TreeNode(nums[0], node6, node5);
    console.log('symmetric: ' + isSymmetric(node7));
}

main();
