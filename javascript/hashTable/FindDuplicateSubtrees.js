/**
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

var TreeNode = function(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let currentId = 1;

var findDuplicateSubtrees = function(root) {
    let seriaToId = {};
    let idToCount = {};
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
    let id = seriaToId[seria] || currentId;
    currentId += (id == currentId ? 1 : 0);
    seriaToId[seria] = id;
    let count = (idToCount[id] || 0) + 1;
    if (count == 2) {
        trees.push(root);
    }
    idToCount[id] = count;

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
    let node1 = new TreeNode(4, null, null);
    let node2 = new TreeNode(4, null, null);
    let node3 = new TreeNode(2, node1, null);
    let node4 = new TreeNode(4, null, null);
    let node5 = new TreeNode(2, node2, null);
    let node6 = new TreeNode(3, node3, node4);
    let node7 = new TreeNode(1, node5, node6);
    let s = '';
    for (let node of findDuplicateSubtrees(node7)) {
        s += node.val + ' ';
    }
    console.log(s);
}

main();
