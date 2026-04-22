/**
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
import { TreeNode } from "./TreeNode.js";

/**
 * 递归法：深度优先遍历
 */
var postorderTraversal = function(root) {
    let list = [];
    dfs(root, list);
    return list;
}

var dfs = function(node, list) {
    if (!node) {
        return;
    }
    dfs(node.left, list);
    dfs(node.right, list);
    list.push(node.val);
}

/**
 * 迭代法：先迭代访问左子树直到最左边的叶子节点，然后迭代访问右子树，访问方法和之前一样，最
 * 后将当前节点加入到堆栈中。当访问的当前节点是叶子节点或者左右节点都已经访问过后才可以加入
 * 当前节点到堆栈中
 */
var postorderTraversal2 = function(root) {
    let list = [];
    let stack = [];
    let cur = root;
    let pre = null;

    while (cur || stack.length) {
        if (cur) {
            stack.push(cur);
            cur = cur.left;
        } else {
            cur = stack[stack.length - 1].right;
            if (!cur || cur === pre) {
                pre = stack.pop();
                list.push(pre.val);
                cur = null;
            }
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
    console.log('output array: ' + postorderTraversal(root));
    console.log('output array: ' + postorderTraversal2(root));
}

main();
