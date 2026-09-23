/**
 * 226. Invert Binary Tree
 *
 * Given the root of a binary tree, invert the tree, and return its root.
 *
 * Example 1:
 * Input: root = [4,2,7,1,3,6,9]
 * Output: [4,7,2,9,6,3,1]
 * 
 * Constraints:
 * 
 * The number of nodes in the tree is in the range [0, 100].
 * -100 <= Node.val <= 100
 */
import { TreeNode } from './TreeNode.js';
import { levelOrder } from './LevelOrder.js';
import { createTree } from './LevelOrder.js';

/**
 * 先访问左子树直到最左边节点，然后访问右子树，最后交换左孩子和右孩子，从下往上如此
 * 交换直到根结点
 */
var invertTree = function(root) {
    if (!root) {
        return null;
    }
    let left = invertTree(root.left);
    let right = invertTree(root.right);
    root.left = right;
    root.right = left;
    return root;
};

var main = function() {
    let root = createTree();
    console.log('level order: ' + JSON.stringify(levelOrder(root)));
    root = invertTree(root);
    console.log('level order: ' + JSON.stringify(levelOrder(root)));
};

main();
