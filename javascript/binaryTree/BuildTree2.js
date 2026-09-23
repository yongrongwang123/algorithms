/**
 * 105. Construct Binary Tree from Preorder and Inorder Traversal
 *
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
import { TreeNode } from './TreeNode.js';
import { levelOrder } from './LevelOrder.js';

let p;
let i;

var buildTree = function(preorder, inorder) {
    p = 0;
    i = 0;
    return build(preorder, inorder, 3001);
}

/**
 * 首先将先序遍历的第一个元素值作为当前节点的值，依次往后顺序是根结点到左子树到右子树，
 * 然后将当前节点的值作为中序遍历左右子树数组的分割点，最后分别递归遍历左右子树，先序
 * 遍历和中序遍历的子树数组长度相同，中序遍历左子树数组停止点是根节点的值，右子树数组
 * 停止点是分割前的停止点
 */
var build = function(preorder, inorder, stop) {
    if (i >= inorder.length || inorder[i] == stop) {
        return null;
    }
    let root = new TreeNode(preorder[p]);
    p++;
    root.left = build(preorder, inorder, root.val);
    i++;
    root.right = build(preorder, inorder, stop);
    return root;
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
    console.log('level order: ' + JSON.stringify(levelOrder(root)));
}

main();
