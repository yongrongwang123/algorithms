/**
 * Given a binary tree, find the lowest common ancestor (LCA) of two given nodes 
 * in the tree. According to the definition of LCA on Wikipedia: “The lowest common 
 * ancestor is defined between two nodes p and q as the lowest node in T that has 
 * both p and q as descendants (where we allow a node to be a descendant of itself).”
 * 
 * Example 1:
 * Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
 * Output: 3
 * Explanation: The LCA of nodes 5 and 1 is 3.
 * 
 * Constraints:
 * The number of nodes in the tree is in the range [2, 105].
 * -109 <= Node.val <= 109
 * All Node.val are unique.
 * p != q
 * p and q will exist in the tree.
 */
import { TreeNode } from "./TreeNode.js";

let lca = null;

/**
 * 如果当前节点等于p或者q，则不再遍历子节点，直接返回当前节点；否则分别递归遍历左子树和右子树。
 * 如果两个子树有一个返回的等于null，则返回另一个的结果，如果两个子树返回的都不等于null，
 * 则返回当前节点
 */
var lowestCommonAncestor = function(root, p, q) {
    if (lca) {
        return null;
    }
    if (!root || root == p || root == q) {
        return root;
    }
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);
    if (!left) {
        return right;
    } else if (!right) {
        return left;
    } else {
        lca = root;
        return root;
    }
}

var main = function() {
    /*
     *        3
     *       / \
     *      5   1
     *     /\  /\
     *    6 2 0 8
     *     /\
     *    7 4
     */
    let nums = [3,5,1,6,2,0,8,null,null,7,4];
    console.log('input array: ' + nums);
    let node1 = new TreeNode(nums[10], null, null);
    let node2 = new TreeNode(nums[9], null, null);
    let node3 = new TreeNode(nums[6], null, null);
    let node4 = new TreeNode(nums[5], null, null);
    let node5 = new TreeNode(nums[4], node2, node1);
    let node6 = new TreeNode(nums[3], null, null);
    let node7 = new TreeNode(nums[2], node4, node3);
    let node8 = new TreeNode(nums[1], node6, node5);
    let node9 = new TreeNode(nums[0], node8, node7);
    let ancestor = lowestCommonAncestor(node9, node8, node7);
    console.log('ancestor: ' + (ancestor ? ancestor.val : null));
}

main();
