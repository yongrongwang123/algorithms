/**
 * 230. Kth Smallest Element in a BST
 *
 * Given the root of a binary search tree, and an integer k, return the kth smallest
 * value (1-indexed) of all the values of the nodes in the tree.
 *
 * Example 1:
 * Input: root = [3,1,4,null,2], k = 1
 * Output: 1
 * 
 * Constraints:
 * The number of nodes in the tree is n.
 * 1 <= k <= n <= 10^4
 * 0 <= Node.val <= 10^4
 */
import { TreeNode } from '../binaryTree/TreeNode.js';

let count = 0;
let kth = 0;

/**
 * 先访问左子树直到最左边的叶子节点，然后统计访问节点的个数，最后访问右子树，访问
 * 方法和之前一样，当访问节点的个数达到k个的时候，返回当前节点的值
 */
var kthSmallest = function(root, k) {
    count = k;
    find(root);
    return kth;
}

var find = function(root) {
    if (!root || count <= 0) {
        return;
    }
    find(root.left);
    count--;
    kth = (!count ? root.val : kth);
    find(root.right);
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
    let k = 3;
    console.log('k: ' + k);
    let node4 = new TreeNode(nums[4], null, null);
    let node3 = new TreeNode(nums[3], null, null);
    let node2 = new TreeNode(nums[2], null, node4);
    let node1 = new TreeNode(nums[1], node3, null);
    let root = new TreeNode(nums[0], node1, node2);
    console.log('val: ' + kthSmallest(root, k));
}

main();
