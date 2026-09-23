/**
 * 94. Binary Tree Inorder Traversal
 *
 * Given the root of a binary tree, return the inorder traversal of its nodes' values.
 * 
 * Example 1:
 * Input: root = [1,null,2,3]
 * Output: [1,3,2]
 * 
 * Constraints:
 * The number of nodes in the tree is in the range [0, 100].
 * -100 <= Node.val <= 100
 */
import { TreeNode } from './TreeNode.js';
import { createTree } from './LevelOrder.js';

var inorderTraversal = function(root) {
    let list = [];
    inorder(root, list);
    return list;
}

/**
 * 深度优先遍历
 */
var inorder = function(node, list) {
    if (!node) {
        return;
    }
    inorder(node.left, list);
    list.push(node.val);
    inorder(node.right, list);
}

/**
 * 先迭代访问左子树直到最左边的叶子节点，然后将当前节点加入到结果中，最后迭代访问右子树，
 * 访问方法和之前一样
 */
var inorderTraversal2 = function(root) {
    let list = [];
    let stack = [];
    while (root || stack.length) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        list.push(root.val);
        root = root.right;
    }
    return list;
}

var main = function() {
    let root = createTree();
    console.log('inorder: ' + inorderTraversal(root));
    console.log('inorder: ' + inorderTraversal2(root));
}

main();
