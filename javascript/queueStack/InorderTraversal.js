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

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

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
 * 迭代法：先迭代访问左子树直到最左边的叶子节点，然后将当前节点加入到数组中，最后迭代访问右子树，
 * 访问方法和之前一样
 */
var inorderTraversal2 = function(root) {
    let list = [];
    let stack = [];
    let cur = root;

    while (cur || stack.length != 0) {
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

/*
 *    1
 *     \
 *      2
 *     /
 *    3
 */
let root = [1,null,2,3];
console.log('input array: ' + root);
let node1 = new TreeNode(root[3], null, null);
let node2 = new TreeNode(root[2], node1, null);
let node3 = new TreeNode(root[0], null, node2);
console.log('output array: ' + inorderTraversal(node3));
console.log('output array: ' + inorderTraversal2(node3));
