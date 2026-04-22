/**
 * Given the roots of two binary trees p and q, write a function to check if they
 * are the same or not. Two binary trees are considered the same if they are structurally
 * identical, and the nodes have the same value.
 *
 * Example 1:
 * Input: p = [1,2,3], q = [1,2,3]
 * Output: true
 *
 * Constraints:
 * The number of nodes in both trees is in the range [0, 100].
 * -10^4 <= Node.val <= 10^4
 */

import { TreeNode } from "./TreeNode.js";

/**
 * 如果节点只有一个为空或者值不相等则直接判断不相等，否则递归比较左右子树
 */
var isSameTree = function(p, q) {
    if (!p || !q) {
        return p == q;
    }
    return p.val == q.val && isSameTree(p.left, q.left) &&
        isSameTree(p.right, q.right);
}

var main = function() {
    let nums = [5,2,4,1,3];
    let node4 = new TreeNode(nums[4], null, null);
    let node3 = new TreeNode(nums[3], null, null);
    let node2 = new TreeNode(nums[2], node4, null);
    let node1 = new TreeNode(nums[1], node3, null);
    let root = new TreeNode(nums[0], node1, node2);
    let numss = [5,2,4,1,3];
    let nodes4 = new TreeNode(numss[4], null, null);
    let nodes3 = new TreeNode(numss[3], null, null);
    let nodes2 = new TreeNode(numss[2], nodes4, null);
    let nodes1 = new TreeNode(numss[1], nodes3, null);
    let roots = new TreeNode(numss[0], nodes1, nodes2);
    console.log('nums: ' + nums);
    console.log('numss: ' + numss);
    console.log('same: ' + isSameTree(root, roots));
}

main();
