/**
 * You are given the root of a binary search tree (BST) and an integer val.
 * Find the node in the BST that the node's value equals val and return the subtree
 * rooted with that node. If such a node does not exist, return null.
 *
 * Example 1:
 * Input: root = [4,2,7,1,3], val = 2
 * Output: [2,1,3]
 *
 * Constraints:
 * The number of nodes in the tree is in the range [1, 5000].
 * 1 <= Node.val <= 10^7
 * root is a binary search tree.
 * 1 <= val <= 10^7
 */
import { TreeNode } from "../binaryTree/TreeNode.js";
import { levelOrder } from "../binaryTree/LevelOrder.js";
import { print2dArray } from '../arrays/ArrayUtils.js';

/**
 * 迭代法：如果当前值等于目标值则返回当前节点，如果当前值大于目标值则查找左子树，否则查找右子树
 */
var searchBST = function(root, val) {
    while (root && root.val !== val) {
        if (root.val > val) {
            root = root.left;
        } else {
            root = root.right;
        }
    }
    return root;
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
    let val = 2;
    let node = searchBST(root, val);
    if (node) {
        print2dArray(levelOrder(node));
        console.log('false');
    } else {
        console.log('false');
    }
}

main();
