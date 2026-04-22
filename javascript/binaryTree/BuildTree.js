/**
 * Given two integer arrays inorder and postorder where inorder is the inorder 
 * traversal of a binary tree and postorder is the postorder traversal of the same 
 * tree, construct and return the binary tree.
 * 
 * Example 1:
 * Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
 * Output: [3,9,20,null,null,15,7]
 * 
 * Constraints:
 * 1 <= inorder.length <= 3000
 * postorder.length == inorder.length
 * -3000 <= inorder[i], postorder[i] <= 3000
 * inorder and postorder consist of unique values.
 * Each value of postorder also appears in inorder.
 * inorder is guaranteed to be the inorder traversal of the tree.
 * postorder is guaranteed to be the postorder traversal of the tree.
 */
import { TreeNode } from "./TreeNode.js";
import { levelOrder } from "./LevelOrder.js";

let p = 0;

var buildTree = function(inorder, postorder) {
    let map = {};
    let n = inorder.length - 1;
    for (let i = 0; i <= n; i++) {
        map[inorder[i]] = i;
    }
    p = n;
    return build(postorder, 0, n, map);
}

/**
 * map保存中序遍历的元素值和对应索引，首先将后序遍历的最后一个元素值作为当前节点的值，然后
 * 通过map来获得中序遍历中相同元素值对应索引，将其作为中序遍历左右子树数组的分割点，最后分
 * 别递归遍历左右子树
 */
var build = function(postorder, inStart, inEnd, map) {
    if (inStart > inEnd) {
        return null;
    }
    let node = new TreeNode(postorder[p]);
    let mid = map[postorder[p]];
    p--;
    node.right = build(postorder, mid + 1, inEnd, map);
    node.left = build(postorder, inStart, mid - 1, map);
    return node;
}

var prettyMatrix = function(matrix) {
    return matrix.map(row => row.join(',')).join('\n');
}

var main = function() {
    /**
     *      3
     *     / \
     *    9   20
     *       / \
     *     15   7
     */
    let inorder = [9,3,15,20,7];
    let postorder = [9,15,7,20,3];
    console.log('inorder: ' + inorder);
    console.log('postorder: ' + postorder);
    let root = buildTree(inorder, postorder);
    console.log('output matrix:\n' + prettyMatrix(levelOrder(root)));
}

main();
