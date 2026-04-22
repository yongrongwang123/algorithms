/**
 * 100. Same Tree
 *
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

import { TreeNode } from './TreeNode.js';
import { createTree } from './LevelOrder.js';

/**
 * 如果节点只有一个为空或者值不相等则直接判断不相等，否则递归比较左右子树
 */
var isSameTree = function(p, q) {
    if (!p && !q) {
        return true;
    }
    if (!p || !q || p.val != q.val) {
        return false;
    }
    let same1 = isSameTree(p.left, q.left);
    let same2 = isSameTree(p.right, q.right);
    return same1 && same2;
}

var main = function() {
    let root1 = createTree();
    let root2 = createTree();
    console.log('same: ' + isSameTree(root1, root2));
}

main();
