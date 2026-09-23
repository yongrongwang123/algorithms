/**
 * 543. Diameter of Binary Tree
 *
 * Given the root of a binary tree, return the length of the diameter of the tree.
 * The diameter of a binary tree is the length of the longest path between any two
 * nodes in a tree. This path may or may not pass through the root. The length of
 * a path between two nodes is represented by the number of edges between them.
 * 
 * Example 1:
 * Input: root = [1,2,3,4,5]
 * Output: 3
 * Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
 * 
 * Constraints:
 * The number of nodes in the tree is in the range [1, 10^4].
 * -100 <= Node.val <= 100
 */
import { TreeNode } from './TreeNode.js';
import { createTree } from './LevelOrder.js';

let max;

var diameterOfBinaryTree = function(root) {
    max = 0;
    path(root);
    return max;
};

/**
 * 用后序遍历，因为每个节点只能计算一次，所以如果当前节点是终点，则路径包含左右子
 * 树，如果当前节点是中点，则路径只能包含左子树或者右子树
 */
var path = function(root) {
    if (!root) {
        return 0;
    }
    let left = path(root.left);
    let right = path(root.right);
    let sum = left + right;
    max = (sum > max ? sum : max);
    return 1 + (left > right ? left : right);
};

var main = function() {
    let root = createTree();
    console.log('longest path: ' + diameterOfBinaryTree(root));
};

main();
