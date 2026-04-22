/**
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
import { TreeNode } from "./TreeNode.js";

/**
 * 递归法：深度优先遍历
 */
var preorderTraversal = function(root) {
    let list = [];
    dfs(root, list);
    return list;
}

var dfs = function(node, list) {
    if (!node) {
        return;
    }
    list.push(node.val);
    dfs(node.left, list);
    dfs(node.right, list);
}

/**
 * 迭代法：先将当前节点加入到数组中，然后迭代访问左子树直到最左边的叶子节点，最后迭代访问右子树，
 * 访问方法和之前一样
 */
var preorderTraversal2 = function(root) {
    let list = [];
    let stack = [];
    let cur = root;

    while (cur || stack.length !== 0) {
        if (cur) {
            list.push(cur.val);
            if (cur.right) {
                stack.push(cur.right);
            }
            cur = cur.left;
        } else {
            cur = stack.pop();
        }
    }

    return list;
}

var main = function() {
    /**
     *    1
     *     \
     *      2
     *     /
     *    3
     */
    let nums = [1,null,2,3];
    console.log('input array: ' + nums);
    let node1 = new TreeNode(nums[3], null, null);
    let node2 = new TreeNode(nums[2], node1, null);
    let node3 = new TreeNode(nums[0], null, node2);
    console.log('output array: ' + preorderTraversal(node3));
    console.log('output array: ' + preorderTraversal2(node3));
}

main();
