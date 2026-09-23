/**
 * 124. Binary Tree Maximum Path Sum
 *
 * A path in a binary tree is a sequence of nodes where each pair of adjacent nodes
 * in the sequence has an edge connecting them. A node can only appear in the sequence
 * at most once. Note that the path does not need to pass through the root. The path
 * sum of a path is the sum of the node's values in the path. Given the root of a
 * binary tree, return the maximum path sum of any non-empty path.
 * 
 * Example 1:
 * Input: root = [1,2,3]
 * Output: 6
 * Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.
 * 
 * Constraints:
 * The number of nodes in the tree is in the range [1, 3 * 10^4].
 * -1000 <= Node.val <= 1000
 */
import { TreeNode } from './TreeNode.js';
import { createTree } from './LevelOrder.js';

let max;

var maxPathSum = function(root) {
    max = -1001;
    path(root);
    return max;
};

/**
 * 用后序遍历，因为每个节点只能计算一次，所以如果当前节点是终点，则路径包含左右子
 * 树，如果当前节点是中点，则路径只能包含左子树或者右子树，如果左子树或者右子树的
 * 路径和为负数，则舍弃该子树
 */
var path = function(root) {
    if (!root) {
        return 0;
    }
    let left = path(root.left);
    let right = path(root.right);
    left = (left >= 0 ? left : 0);
    right = (right >= 0 ? right : 0);
    let sum = root.val + left + right;
    max = (max >= sum ? max : sum);
    return root.val + (left > right ? left : right);
};

var main = function() {
    let root = createTree();
    console.log('max sum: ' + JSON.stringify(maxPathSum(root)));
};

main();
