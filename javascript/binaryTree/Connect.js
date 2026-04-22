/**
 * You are given a perfect binary tree where all leaves are on the same level, 
 * and every parent has two children. The binary tree has the following definition:
 * struct Node {
 *   int val;
 *   Node *left;
 *   Node *right;
 *   Node *next;
 * }
 * Populate each next pointer to point to its next right node. If there is no next 
 * right node, the next pointer should be set to NULL. Initially, all next pointers 
 * are set to NULL.
 * 
 * Example 1:
 * Input: root = [1,2,3,4,5,6,7]
 * Output: [1,#,2,3,#,4,5,6,7,#]
 * Explanation: Given the above perfect binary tree (Figure A), your function should 
 * populate each next pointer to point to its next right node, just like in Figure 
 * B. The serialized output is in level order as connected by the next pointers, 
 * with '#' signifying the end of each level.
 * 
 * Constraints:
 * The number of nodes in the tree is in the range [0, 212 - 1].
 * -1000 <= Node.val <= 1000
 */
import { TreeNode } from "./TreeNode.js";
import { levelOrder2 } from "./LevelOrder.js";

/**
 * 迭代法，一层一层地遍历，head指向当前层的最左边一个节点，cur指向正在遍历节点，对于遍历到
 * 的每一个有孩子的节点，将它的左孩子指向右孩子，右孩子指向下一个节点的左孩子
 */
var connect = function(root) {
    if (!root || !root.left) {
        return root;
    }
    root.left.next = root.right;
    root.right.next = (root.next ? root.next.left : null);
    connect(root.right);
    connect(root.left);
    return root;
}

var main = function() {
    /*
     *        1
     *       / \
     *      2   3
     *     / \ / \
     *    4  5 6  7
     */
    let nums = [1,2,3,4,5,6,7];
    console.log('input array: ' + nums);
    let node1 = new TreeNode(nums[6], null, null);
    let node2 = new TreeNode(nums[5], null, null);
    let node3 = new TreeNode(nums[4], null, null);
    let node4 = new TreeNode(nums[3], null, null);
    let node5 = new TreeNode(nums[2], node2, node1);
    let node6 = new TreeNode(nums[1], node4, node3);
    let node7 = new TreeNode(nums[0], node6, node5);
    let root = connect(node7);
    let str = '';
    for (let level of levelOrder2(root)) {
        for (let node of level) {
            str += (node.val + '->' + (node.next ? node.next.val + ' ' : '#\n'));
        }
    }
    console.log(str);
}

main();
