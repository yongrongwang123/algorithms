/**
 * Given a binary tree, determine if it is height-balanced. For this problem, a 
 * height-balanced binary tree is defined as: a binary tree in which the left and 
 * right subtrees of every node differ in height by no more than 1.
 * 
 * Example 1:
 * Input: root = [3,9,20,null,null,15,7]
 * Output: true
 * 
 * Constraints:
 * The number of nodes in the tree is in the range [0, 5000].
 * -10^4 <= Node.val <= 10^4
 */
import { TreeNode } from "../binaryTree/TreeNode.js";

var isBalanced = function(root) {
    return depth(root) != -1;
}

/**
 * 递归法：如果当前节点为空则返回0，否则依次递归检查左右子树，如果左右子树高度之差小于等于1，
 * 则返回左右子树高度较大者加一，否则返回-1，如果左右子树至少有一边返回-1，则直接返回-1
 */
var depth = function(node) {
    if (!node) {
        return 0;
    }
    let left = depth(node.left);
    if (left == -1) {
        return -1;
    }
    let right = depth(node.right);
    if (right == -1) {
        return -1;
    }
    let diff = (left >= right ? left - right : right - left);
    if (diff > 1) {
        return -1;
    }
    return (left >= right ? left : right) + 1;
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
    console.log('balanced: ' + isBalanced(root));
}

main();
