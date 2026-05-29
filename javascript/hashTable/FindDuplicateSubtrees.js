/**
 * 652. Find Duplicate Subtrees
 *
 * Given the root of a binary tree, return all duplicate subtrees. For each kind 
 * of duplicate subtrees, you only need to return the root node of any one of them.
 * Two trees are duplicate if they have the same structure with the same node values.
 * 
 * Example 1:
 * Input: root = [1,2,3,4,null,2,4,null,null,4]
 * Output: [[2,4],[4]]
 * 
 * Constraints:
 * The number of the nodes in the tree will be in the range [1, 10^4]
 * -200 <= Node.val <= 200
 */
import { TreeNode } from '../binaryTree/TreeNode.js';

let currentId = 1;

var findDuplicateSubtrees = function(root) {
    let seriaToId = new Map();
    let idToCount = new Map();
    let trees = [];
    postOrder(root, seriaToId, idToCount, trees);
    return trees;
}

/**
 * 使用后序遍历将子树序列化成字符串，相同字符串表示的子树重复出现，则将其根结点加入结果，通
 * 过使用id表示左右子树来简化字符串拼接操作
 */
var postOrder = function(root, seriaToId, idToCount, trees) {
    if (!root) {
        return 0;
    }
    let leftId = postOrder(root.left, seriaToId, idToCount, trees);
    let rightId = postOrder(root.right, seriaToId, idToCount, trees);
    let seria = root.val + ',' + leftId + ',' + rightId;
    seriaToId.set(seria, seriaToId.get(seria) ?? currentId);
    let id = seriaToId.get(seria);
    currentId += (id == currentId ? 1 : 0);
    let count = (idToCount.get(id) ?? 0) + 1;
    if (count == 2) {
        trees.push(root);
    }
    idToCount.set(id, count);
    return id;
}

var main = function() {
    /**
     *        1
     *       / \
     *      2   3
     *     /   / \
     *    4   2   4
     *       /
     *      4
     */
    let nums = [1,2,3,4,2,4,4];
    let node6 = new TreeNode(nums[6], null, null);
    let node5 = new TreeNode(nums[5], null, null);
    let node4 = new TreeNode(nums[4], node6, null);
    let node3 = new TreeNode(nums[3], null, null);
    let node2 = new TreeNode(nums[2], node4, node5);
    let node1 = new TreeNode(nums[1], node3, null);
    let root = new TreeNode(nums[0], node1, node2);
    let str = '';
    for (let node of findDuplicateSubtrees(root)) {
        str += node.val + ' ';
    }
    console.log(str);
}

main();
