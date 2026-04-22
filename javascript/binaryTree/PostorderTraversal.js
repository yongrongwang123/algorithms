/**
 * 145. Binary Tree Postorder Traversal
 *
 * Given the root of a binary tree, return the postorder traversal of its nodes' values.
 * 
 * Example 1:
 * Input: root = [1,null,2,3]
 * Output: [3,2,1]
 * 
 * Constraints:
 * The number of the nodes in the tree is in the range [0, 100].
 * -100 <= Node.val <= 100
 */
import { TreeNode } from './TreeNode.js';
import { createTree } from './LevelOrder.js';

/**
 * 深度优先遍历
 */
var postorderTraversal = function(root) {
    let list = [];
    postorder(root, list);
    return list;
}

var postorder = function(node, list) {
    if (!node) {
        return;
    }
    postorder(node.left, list);
    postorder(node.right, list);
    list.push(node.val);
}

/**
 * 先迭代访问左子树直到最左边的叶子节点，然后迭代访问右子树，访问方法和之前一样，最
 * 后将当前节点加入到结果中。当访问的当前节点是叶子节点或者左右节点都已经访问过后才
 * 可以加入当前节点到结果中
 */
var postorderTraversal2 = function(root) {
    let list = [];
    let stack = [];
    let pre = null;
    while (root || stack.length) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.at(-1).right;
        if (!root || root === pre) {
            pre = stack.pop();
            list.push(pre.val);
            root = null;
        }
    }
    return list;
}

var main = function() {
    let root = createTree();
    console.log('postorder: ' + postorderTraversal(root));
    console.log('postorder: ' + postorderTraversal2(root));
}

main();
