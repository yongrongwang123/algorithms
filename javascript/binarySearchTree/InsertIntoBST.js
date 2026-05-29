/**
 * You are given the root node of a binary search tree (BST) and a value to insert 
 * into the tree. Return the root node of the BST after the insertion. It is guaranteed 
 * that the new value does not exist in the original BST.
 * Notice that there may exist multiple valid ways for the insertion, as long as the 
 * tree remains a BST after insertion. You can return any of them.
 * 
 * Example 1:
 * Input: root = [4,2,7,1,3], val = 5
 * Output: [4,2,7,1,3,5]
 * Explanation: Another accepted tree is:
 * 
 * Constraints:
 * The number of nodes in the tree will be in the range [0, 10^4].
 * -10^8 <= Node.val <= 10^8
 * All the values Node.val are unique.
 * -10^8 <= val <= 10^8
 * It's guaranteed that val does not exist in the original BST.
 */
import { TreeNode } from "../binaryTree/TreeNode.js";
import { BSTIterator } from "./BSTIterator.js";

/**
 * 迭代法：如果当前值大于目标值则查找左子树，小于目标值则查找右子树，如果查找
 * 到空节点则插入新节点
 */
var insertIntoBST = function(root, val) {
    if (!root) {
        return new TreeNode(val);
    }
    let cur = root;
    while (true) {
        if (cur.val > val) {
            if (cur.left) {
                cur = cur.left;
            } else {
                cur.left = new TreeNode(val);
                break;
            }
        } else {
            if (cur.right) {
                cur = cur.right;
            } else {
                cur.right = new TreeNode(val);
                break;
            }
        }
    }
    return root;
}

var main = function() {
    /**
     *                4
     *               / \
     *              3   5
     *             /     \
     *            1       6
     */
    let nums = [4,3,5,1,6];
    let node4 = new TreeNode(nums[4], null, null);
    let node3 = new TreeNode(nums[3], null, null);
    let node2 = new TreeNode(nums[2], null, node4);
    let node1 = new TreeNode(nums[1], node3, null);
    let root = new TreeNode(nums[0], node1, node2);
    let val = 2;
    let bst = new BSTIterator(root);
    let inorder = 'before: ';
    while (bst.hasNext()) {
        inorder += bst.next() + ' ';
    }
    root = insertIntoBST(root, val);
    bst = new BSTIterator(root);
    inorder += '\nafter: ';
    while (bst.hasNext()) {
        inorder += bst.next() + ' ';
    }
    console.log(inorder);
}

main();
