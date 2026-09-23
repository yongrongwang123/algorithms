/**
 * 104. Maximum Depth of Binary Tree
 *
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
import { TreeNode } from './TreeNode.js';
import { createTree } from './LevelOrder.js';

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
    return (left >= right ? left : right) + 1;
}

var main = function() {
    let root = createTree();
    console.log('depth: ' + maxDepth(root));
}

main();
