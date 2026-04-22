/**
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
import { TreeNode } from "./TreeNode.js";

/**
 * 先将根节点压入队列，之后每弹出一个节点，先将该节点的值添加到保存该层节点的数组中，然后将
 * 该节点的左孩子和右孩子分别加入到队列，遍历完一层节点就将保存该层节点的数组添加到保存所有
 * 节点的数组中，队列为空时返回保存所有节点的数组
 */
var levelOrder = function(root) {
    let list = [];
    if (!root) {
        return list;
    }
    
    let queue = [];
    queue.unshift(root);
    while (queue.length !== 0) {
        let level = [];
        for (let i = queue.length; i > 0; i--) {
            let cur = queue.pop();
            level.push(cur.val);
            if (cur.left) {
                queue.unshift(cur.left);
            }
            if (cur.right) {
                queue.unshift(cur.right);
            }
        }
        list.push(level);
    }

    return list;
}

var levelOrder2 = function(root) {
    let list = [];
    if (!root) {
        return list;
    }
    
    let queue = [];
    queue.unshift(root);
    while (queue.length !== 0) {
        let level = [];
        for (let i = queue.length; i > 0; i--) {
            let cur = queue.pop();
            level.push(cur);
            if (cur.left) {
                queue.unshift(cur.left);
            }
            if (cur.right) {
                queue.unshift(cur.right);
            }
        }
        list.push(level);
    }

    return list;
}

var prettyMatrix = function(matrix) {
    return matrix.map(row => row.join(',')).join('\n');
}

var main = function() {
    /*
     *      1
     *     / \
     *    9  20
     *       / \
     *      15 7
     */
    let nums = [3,9,20,null,null,15,7];
    console.log('input array: ' + nums);
    let node1 = new TreeNode(nums[6], null, null);
    let node2 = new TreeNode(nums[5], null, null);
    let node3 = new TreeNode(nums[2], node2, node1);
    let node4 = new TreeNode(nums[1], null, null);
    let node5 = new TreeNode(nums[0], node4, node3);
    console.log('output matrix:\n' + prettyMatrix(levelOrder(node5)));
}

// main();

export { levelOrder, levelOrder2 };
