/**
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).
 * A valid BST is defined as follows:
 * - The left subtree of a node contains only nodes with keys less than the node's key.
 * - The right subtree of a node contains only nodes with keys greater than the node's key.
 * - Both the left and right subtrees must also be binary search trees.
 *
 * Example 1:
 * Input: root = [2,1,3]
 * Output: true
 *
 * Constraints:
 * The number of nodes in the tree is in the range [1, 10^4].
 * -2^31 <= Node.val <= 2^31 - 1
 */
import { TreeNode } from "../binaryTree/TreeNode.js";

var isValidBST = function(root) {
    return validate(root, null, null);
}

/**
 * 递归法：从根节点向左子树递归，则小于当前节点值，向右子树递归，则大于当前节点值。每次遇到
 * 一个节点，如果当前节点小于等于最小值或者大于等于最大值，则返回false
 */
var validate = function(node, min, max) {
    if (!node) {
        return true;
    }
    if ((min && min.val >= node.val) || (max && max.val <= node.val)) {
        return false;
    }
    return validate(node.left, min, node) && validate(node.right, node, max);
}

var main = function() {
    /**
     *                4
     *               / \
     *              3   5
     *             /     \
     *            1       6
     */
    let nums = [4,3,5,1,6];
    let node4 = new TreeNode(nums[4], null, null);
    let node3 = new TreeNode(nums[3], null, null);
    let node2 = new TreeNode(nums[2], null, node4);
    let node1 = new TreeNode(nums[1], node3, null);
    let root = new TreeNode(nums[0], node1, node2);
    console.log('valid: ' + isValidBST(root));
}

main();
