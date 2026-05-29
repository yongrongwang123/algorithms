/**
 * Given a root node reference of a BST and a key, delete the node with the given 
 * key in the BST. Return the root node reference (possibly updated) of the BST.
 * Basically, the deletion can be divided into two stages:
 * 1. Search for a node to remove.
 * 2. If the node is found, delete the node.
 * 
 * Example 1:
 * Input: root = [5,3,6,2,4,null,7], key = 3
 * Output: [5,4,6,2,null,null,7]
 * Explanation: Given key to delete is 3. So we find the node with value 3 and delete it.
 * One valid answer is [5,4,6,2,null,null,7], shown in the above BST.
 * Please notice that another valid answer is [5,2,6,null,4,null,7] and it's also accepted.
 * 
 * Constraints:
 *     The number of nodes in the tree is in the range [0, 10^4].
 *     -10^5 <= Node.val <= 10^5
 *     Each node has a unique value.
 *     root is a valid binary search tree.
 *     -10^5 <= key <= 10^5
 */
import { TreeNode } from "../binaryTree/TreeNode.js";
import { BSTIterator } from "./BSTIterator.js";

/**
 * 如果当前值大于目标值则查找左子树，如果当前值小于目标值则查找右子树，如果当前值等于目标值则：
 * 如果右子树为空则返回左子树，如果左子树为空则返回右子树，如果左右子树都不为空则删除当前节点
 */
var deleteNode = function(root, key) {
    if (!root) {
        return null;
    }
    if (root.val > key) {
        root.left = deleteNode(root.left, key);
    } else if (root.val < key) {
        root.right = deleteNode(root.right, key);
    } else {
        if (!root.right) {
            return root.left;
        } else if (!root.left) {
            return root.right;
        } else {
            deletes(root, key);
        }
    }
    return root;
}

/**
 * 首先寻找待删除节点的后继节点和后继节点的父节点，然后将后继节点值复制给待删除节点，最后将
 * 后继节点的右子树连接到后继节点的父节点上面
 */
var deletes = function(node) {
    let parent = node;
    let successor = node.right;
    for (; successor.left; parent = successor, successor = successor.left) {}
    node.val = successor.val;
    if (node == parent) {
        parent.right = successor.right;
    } else {
        parent.left = successor.right;
    }
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
    let key = 3;
    let bst = new BSTIterator(root);
    let inorder = 'before: ';
    while (bst.hasNext()) {
        inorder += bst.next() + ' ';
    }
    root = deleteNode(root, key);
    bst = new BSTIterator(root);
    inorder += '\nafter: ';
    while (bst.hasNext()) {
        inorder += bst.next() + ' ';
    }
    console.log(inorder);
}

main();
