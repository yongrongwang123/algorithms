/**
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
import { TreeNode } from "./TreeNode.js";

/**
 * 递归法：深度优先遍历
 */
var inorderTraversal = function(root) {
    let list = [];
    dfs(root, list);
    return list;
}

var dfs = function(node, list) {
    if (!node) {
        return;
    }
    dfs(node.left, list);
    list.push(node.val);
    dfs(node.right, list);
}

/**
 * 迭代法：先迭代访问左子树直到最左边的叶子节点，然后将当前节点加入到堆栈中，最后迭代访问右子树，
 * 访问方法和之前一样
 */
var inorderTraversal2 = function(root) {
    let list = [];
    let stack = [];
    let cur = root;

    while (cur || stack.length) {
        if (cur) {
            stack.push(cur);
            cur = cur.left;
        } else {
            cur = stack.pop();
            list.push(cur.val);
            cur = cur.right;
        }
    }
    
    return list;
}

var main = function() {
    /*
     *            5
     *           / \
     *          2   4
     *         /   /
     *        1   3
     */
    let nums = [5,2,4,1,3];
    let node4 = new TreeNode(nums[4], null, null);
    let node3 = new TreeNode(nums[3], null, null);
    let node2 = new TreeNode(nums[2], node4, null);
    let node1 = new TreeNode(nums[1], node3, null);
    let root = new TreeNode(nums[0], node1, node2);
    console.log('output array: ' + inorderTraversal(root));
    console.log('output array: ' + inorderTraversal2(root));
}

main();
