/**
 * 144. Binary Tree Preorder Traversal
 *
 * Given the root of a binary tree, return the preorder traversal of its nodes' values.
 *
 * Example 1:
 * Input: root = [1,null,2,3]
 * Output: [1,2,3]
 *
 * Constraints:
 * The number of nodes in the tree is in the range [0, 100].
 * -100 <= Node.val <= 100
 */
import { TreeNode } from './TreeNode.js';
import { createTree } from './LevelOrder.js';

/**
 * 深度优先遍历
 */
var preorderTraversal = function(root) {
    let list = [];
    preorder(root, list);
    return list;
}

var preorder = function(node, list) {
    if (!node) {
        return;
    }
    list.push(node.val);
    preorder(node.left, list);
    preorder(node.right, list);
}

/**
 * 先将当前节点加入到结果中，然后迭代访问左子树直到最左边的叶子节点，最后迭代访问右子树，
 * 访问方法和之前一样
 */
var preorderTraversal2 = function(root) {
    let list = [];
    let stack = [];
    while (root || stack.length) {
        while (root) {
            list.push(root.val);
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        root = root.right;
    }
    return list;
}

var main = function() {
    let root = createTree();
    console.log('preorder: ' + preorderTraversal(root));
    console.log('preorder: ' + preorderTraversal2(root));
}

main();
