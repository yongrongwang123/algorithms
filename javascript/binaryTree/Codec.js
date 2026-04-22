/**
 * Serialization is the process of converting a data structure or object into a 
 * sequence of bits so that it can be stored in a file or memory buffer, or transmitted 
 * across a network connection link to be reconstructed later in the same or another 
 * computer environment. Design an algorithm to serialize and deserialize a binary 
 * tree. There is no restriction on how your serialization/deserialization algorithm 
 * should work. You just need to ensure that a binary tree can be serialized to 
 * a string and this string can be deserialized to the original tree structure.
 * Clarification: The input/output format is the same as how LeetCode serializes 
 * a binary tree. You do not necessarily need to follow this format, so please be 
 * creative and come up with different approaches yourself.
 * 
 * Example 1:
 * Input: root = [1,2,3,null,null,4,5]
 * Output: [1,2,3,null,null,4,5]
 * 
 * Constraints:
 * The number of nodes in the tree is in the range [0, 10^4].
 * -1000 <= Node.val <= 1000
 */
import { TreeNode } from "./TreeNode.js";
import { levelOrder } from "./LevelOrder.js";

let spliter = ',';
let NULL = '$';

var serialize = function(root) {
    let builder = '';
    return buildString(root, builder);
}

/**
 * 递归法，使用','表示分隔符，'$'表示null，按照先序遍历顺序来拼接序列化后的字符串，对于每个
 * 节点先拼接节点值再拼接分隔符
 */
var buildString = function(node, builder) {
    if (node == null) {
        builder += NULL + spliter;
    } else {
        builder += node.val + spliter;
        builder = buildString(node.left, builder);
        builder = buildString(node.right, builder);
    }
    return builder;
}

var deserialize = function(data) {
    let queue = data.split(spliter);
    return buildTree(queue);
}

/**
 * 递归法，队列中存储了按照先序遍历顺序的节点值，每次使用从队列头弹出的字符串表示的数字作为
 * 当前节点的值，然后分别递归构造左子树和右子树
 */
var buildTree = function(queue) {
    let val = queue.shift();
    if (val == NULL) {
        return null;
    } else {
        let node = new TreeNode(+val);
        node.left = buildTree(queue);
        node.right = buildTree(queue);
        return node;
    }
}

var prettyMatrix = function(matrix) {
    return matrix.map(row => row.join(',')).join('\n');
}

var main = function() {
    /*
     *        1
     *       / \
     *      2   3
     *         / \
     *        4   5
     */
    let nums = [1,2,3,null,null,4,5];
    console.log('input array: ' + nums);
    let node1 = new TreeNode(nums[6], null, null);
    let node2 = new TreeNode(nums[5], null, null);
    let node3 = new TreeNode(nums[2], node2, node1);
    let node4 = new TreeNode(nums[1], null, null);
    let node5 = new TreeNode(nums[0], node4, node3);
    let data = serialize(node5);
    console.log(data);
    let root = deserialize(data);
    console.log('output matrix:\n' + prettyMatrix(levelOrder(root)));
}

main();
