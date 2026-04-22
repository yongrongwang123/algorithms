/**
 * Given a binary tree
 * struct Node {
 *   int val;
 *   Node *left;
 *   Node *right;
 *   Node *next;
 * }
 * Populate each next pointer to point to its next right node. If there is no next 
 * right node, the next pointer should be set to NULL. Initially, all next pointers are set to NULL.
 * 
 * Example 1:
 * Input: root = [1,2,3,4,5,null,7]
 * Output: [1,#,2,3,#,4,5,7,#]
 * Explanation: Given the above binary tree (Figure A), your function should populate 
 * each next pointer to point to its next right node, just like in Figure B. The 
 * serialized output is in level order as connected by the next pointers, with '#' 
 * signifying the end of each level.
 * 
 * Constraints:
 * The number of nodes in the tree is in the range [0, 6000].
 * -100 <= Node.val <= 100
 */
import { TreeNode } from "./TreeNode.js";
import { levelOrder2 } from "./LevelOrder.js";

/**
 * 递归法，注意点是要先递归右孩子然后递归左孩子，因为指针连接是左边指向右边，需要先完成右边
 * 再去完成左边，否则在下一层查找下一个非null的节点的时候会出错
 */
var connect = function(root) {
    if (!root) {
        return null;
    }
    if (root.left) {
        root.left.next = (root.right ? root.right : findNext(root));
    }
    if (root.right) {
        root.right.next = findNext(root);
    }
    connect(root.right);
    connect(root.left);
    return root;
}

/**
 * 在下一层查找下一个非null的节点
 */
var findNext = function(node) {
    while (node.next) {
        node = node.next;
        if (node.left) {
            return node.left;
        }
        if (node.right) {
            return node.right;
        }
    }
    return null;
}

var main = function() {
    /*
     *        1
     *       / \
     *      2   3
     *     / \   \
     *    4  5    7
     */
    let nums = [1,2,3,4,5,null,7];
    console.log('input array: ' + nums);
    let node1 = new TreeNode(nums[6], null, null);
    let node2 = new TreeNode(nums[4], null, null);
    let node3 = new TreeNode(nums[3], null, null);
    let node4 = new TreeNode(nums[2], null, node1);
    let node5 = new TreeNode(nums[1], node3, node2);
    let node6 = new TreeNode(nums[0], node5, node4);
    let root = connect(node6);
    let str = '';
    for (let level of levelOrder2(root)) {
        for (let node of level) {
            str += (node.val + '->' + (node.next ? node.next.val + ' ' : '#\n'));
        }
    }
    console.log(str);
}

main();
