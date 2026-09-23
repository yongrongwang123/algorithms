/**
 * 199. Binary Tree Right Side View
 *
 * Given the root of a binary tree, imagine yourself standing on the right side of
 * it, return the values of the nodes you can see ordered from top to bottom.
 *
 * Example 1:
 * Input: root = [1,2,3,null,5,null,4]
 * Output: [1,3,4]
 * 
 * Constraints:
 * The number of nodes in the tree is in the range [0, 100].
 * -100 <= Node.val <= 100
 */
import { TreeNode } from './TreeNode.js';
import { createTree } from './LevelOrder.js';
import { levelOrder } from './LevelOrder.js';

var rightSideView = function(root) {
    let list = [];
    view(root, 0, list);
    return list;
};

/**
 * 使用反转的后序遍历，遍历顺序是根结点到右子树到左子树，记录同一个深度遇到的第一个节点
 */
var view = function(root, depth, list) {
    if (!root) {
        return;
    }
    if (depth == list.length) {
        list.push(root.val);
    }
    view(root.right, depth + 1, list);
    view(root.left, depth + 1, list);
};

var main = function() {
    let root = createTree();
    console.log('level order: ' + JSON.stringify(levelOrder(root)));
    console.log('right view: ' + rightSideView(root));
};

main();
