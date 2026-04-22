/**
 * Given the root of a binary tree, return the zigzag level order traversal of
 * its nodes' values. (i.e., from left to right, then right to left for the next
 * level and alternate between).
 *
 * Example 1:
 * Input: root = [3,9,20,null,null,15,7]
 * Output: [[3],[20,9],[15,7]]
 * 
 * Constraints:
 * The number of nodes in the tree is in the range [0, 2000].
 * -100 <= Node.val <= 100
 */
import { TreeNode } from './TreeNode.js';
import { print2dArray } from '../arrays/ArrayUtils.js';

/**
 * 用双端队列，如果是先压入左孩子再压入右孩子，则跟普通队列相同，从队头弹出队尾
 * 压入，如果是先压入右孩子再压入左孩子，则跟普通队列相反，从队尾弹出队头压入，
 * 完成一层遍历就反转方向
 */
var zigzagLevelOrder = function(root) {
    let list = [];
    if (!root) {
        return list;
    }
    let deque = [];
    deque.push(root);
    let cur = null;
    let reverse = false;

    while (deque.length > 0) {
        let level = [];
        for (let i = deque.length; i > 0; i--) {
            if (reverse) {
                cur = deque.pop();
                if (cur.right) {
                    deque.unshift(cur.right);
                }
                if (cur.left) {
                    deque.unshift(cur.left);
                }
            } else {
                cur = deque.shift();
                if (cur.left) {
                    deque.push(cur.left);
                }
                if (cur.right) {
                    deque.push(cur.right);
                }
            }
            level.push(cur.val);
        }
        list.push(level);
        reverse = !reverse;
    }

    return list;
}

var main = function() {
    /*
     *            5
     *           / \
     *          2   4
     *         /   /
     *        1   3
     */
    let nums = [5,2,4,1,3];
    let node4 = new TreeNode(nums[4], null, null);
    let node3 = new TreeNode(nums[3], null, null);
    let node2 = new TreeNode(nums[2], node4, null);
    let node1 = new TreeNode(nums[1], node3, null);
    let root = new TreeNode(nums[0], node1, node2);
    print2dArray(zigzagLevelOrder(root));
}

main();
