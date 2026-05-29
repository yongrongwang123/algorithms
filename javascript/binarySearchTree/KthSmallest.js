/**
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
import { TreeNode } from "../binaryTree/TreeNode.js";

/**
 * 迭代法：先迭代访问左子树直到最左边的叶子节点，然后将当前节点加入到堆栈中，最后迭代访问右子树，
 * 访问方法和之前一样，当访问节点的个数达到k个的时候，返回当前节点的值
 */
var kthSmallest = function(root, k) {
    let stack = [];
    let cur = root;
    while (cur || stack.length > 0) {
        if (cur) {
            stack.push(cur);
            cur = cur.left;
        } else {
            cur = stack.pop();
            k--;
            if (!k) {
                return cur.val;
            }
            cur = cur.right;
        }
    }
    return -1;
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
    let k = 3;
    console.log('k: ' + k + ', val: ' + kthSmallest(root, k));
}

main();
