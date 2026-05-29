/**
 * Given an integer array nums where the elements are sorted in ascending order, 
 * convert it to a height-balanced binary search tree. A height-balanced binary 
 * tree is a binary tree in which the depth of the two subtrees of every node never 
 * differs by more than one.
 * 
 * Example 1:
 * Input: nums = [-10,-3,0,5,9]
 * Output: [0,-3,9,-10,null,5]
 * Explanation: [0,-10,5,null,-3,null,9] is also accepted:
 * 
 * Constraints:
 * 1 <= nums.length <= 10^4
 * -10^4 <= nums[i] <= 10^4
 * nums is sorted in a strictly increasing order.
 */
import { TreeNode } from "../binaryTree/TreeNode.js";
import { BSTIterator } from "./BSTIterator.js";

var sortedArrayToBST = function(nums) {
    return buildBST(nums, 0, nums.length - 1);
}

/**
 * 递归法：取中间元素作为根结点，然后递归构建左子树和右子树
 */
var buildBST = function(nums, left, right) {
    if (left > right) {
        return null;
    }
    let mid = left + parseInt((right - left) / 2);
    let node = new TreeNode(nums[mid]);
    node.left = buildBST(nums, left, mid - 1);
    node.right = buildBST(nums, mid + 1, right);
    return node;
}

var main = function() {
    /*
     *          0
     *         / \
     *       -3   9
     *       /   /  
     *    -10   5    
     */
    let nums = [-10,-3,0,5,9];
    console.log('input array: ' + nums);
    let node = sortedArrayToBST(nums);
    let bst = new BSTIterator(node);
    let inorder = 'inorder: ';
    while (bst.hasNext()) {
        inorder += bst.next() + ' ';
    }
    console.log(inorder);
}

main();
