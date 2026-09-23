/**
 * 102. Binary Tree Level Order Traversal
 *
 * Given the root of a binary tree, return the level order traversal of its nodes' 
 * values. (i.e., from left to right, level by level).
 * 
 * Example 1:
 * Input: root = [3,9,20,null,null,15,7]
 * Output: [[3],[9,20],[15,7]]
 * 
 * Constraints:
 * The number of nodes in the tree is in the range [0, 2000].
 * -1000 <= Node.val <= 1000
 */
import { TreeNode } from './TreeNode.js';

var createTree = function() {
    /*
     *            7
     *           / \
     *          5   6
     *         /\   /\
     *        1  2 3  4
     *       /         \
     *      8           9
     */
    let nums = [7,5,6,1,2,3,4,8,9];
    let node8 = new TreeNode(nums[8], null, null);
    let node7 = new TreeNode(nums[7], null, null);
    let node6 = new TreeNode(nums[6], null, node8);
    let node5 = new TreeNode(nums[5], null, null);
    let node4 = new TreeNode(nums[4], null, null);
    let node3 = new TreeNode(nums[3], node7, null);
    let node2 = new TreeNode(nums[2], node5, node6);
    let node1 = new TreeNode(nums[1], node3, node4);
    return new TreeNode(nums[0], node1, node2);
};

/**
 * 先将根节点压入队列，之后每弹出一个节点，先将该节点的值添加到保存该层节点的数组中，然后将
 * 该节点的左孩子和右孩子分别加入到队列，遍历完一层节点就将保存该层节点的数组添加到保存所有
 * 节点的数组中，队列为空时返回保存所有节点的数组
 */
var levelOrder = function(root) {
    let lists = [];
    if (!root) {
        return lists;
    }
    let queue = [];
    queue.push(root);
    while (queue.length) {
        let level = [];
        for (let i = queue.length; i > 0; i--) {
            root = queue.shift();
            level.push(root.val);
            if (root.left) {
                queue.push(root.left);
            }
            if (root.right) {
                queue.push(root.right);
            }
        }
        lists.push(level);
    }
    return lists;
}

var levelOrder2 = function(root) {
    let lists = [];
    if (!root) {
        return lists;
    }
    let queue = [];
    queue.push(root);
    while (queue.length) {
        let level = [];
        for (let i = queue.length; i > 0; i--) {
            root = queue.shift();
            level.push(root);
            if (root.left) {
                queue.push(root.left);
            }
            if (root.right) {
                queue.push(root.right);
            }
        }
        lists.push(level);
    }
    return lists;
}

var main = function() {
    let root = createTree();
    console.log('level order: ' + JSON.stringify(levelOrder(root)));
}

// main();

export { createTree, levelOrder, levelOrder2 };
