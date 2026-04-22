/**
 * Given two integer arrays preorder and inorder where preorder is the preorder 
 * traversal of a binary tree and inorder is the inorder traversal of the same 
 * tree, construct and return the binary tree.
 * 
 * Example 1:
 * Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
 * Output: [3,9,20,null,null,15,7]
 * 
 * Constraints:
 * 1 <= preorder.length <= 3000
 * inorder.length == preorder.length
 * -3000 <= preorder[i], inorder[i] <= 3000
 * preorder and inorder consist of unique values.
 * Each value of inorder also appears in preorder.
 * preorder is guaranteed to be the preorder traversal of the tree.
 * inorder is guaranteed to be the inorder traversal of the tree.
 */
import { TreeNode } from "./TreeNode.js";
import { levelOrder } from "./LevelOrder.js";
import { print2dArray } from '../arrays/ArrayUtils.js';

let p = 0;

var buildTree = function(preorder, inorder) {
    let map = {};
    let n = inorder.length - 1;
    for (let i = 0; i <= n; i++) {
        map[inorder[i]] = i;
    }
    p = 0;
    return build(preorder, 0, n, map);
}

/**
 * map保存中序遍历的元素值和对应索引，首先将先序遍历的第一个元素值作为当前节点的值，然后
 * 通过map来获得中序遍历中相同元素值对应索引，将其作为中序遍历左右子树数组的分割点，最后分
 * 别递归遍历左右子树
 */
var build = function(preorder, inStart, inEnd, map) {
    if (inStart > inEnd) {
        return null;
    }
    let node = new TreeNode(preorder[p]);
    let mid = map[preorder[p]];
    p++;
    node.left = build(preorder, inStart, mid - 1, map);
    node.right = build(preorder, mid + 1, inEnd, map);
    return node;
}

var main = function() {
    /**
     *      3
     *     / \
     *    9   20
     *       / \
     *     15   7
     */
    let preorder = [3,9,20,15,7];
    let inorder = [9,3,15,20,7];
    let root = buildTree(preorder, inorder);
    print2dArray(levelOrder(root));
}

main();
