/**
 * Implement the BSTIterator class that represents an iterator over the in-order 
 * traversal of a binary search tree (BST):
 * - BSTIterator(TreeNode root) Initializes an object of the BSTIterator class. 
 *   The root of the BST is given as part of the constructor. The pointer should be 
 *   initialized to a non-existent number smaller than any element in the BST.
 * - boolean hasNext() Returns true if there exists a number in the traversal to 
 *   the right of the pointer, otherwise returns false.
 * - int next() Moves the pointer to the right, then returns the number at the pointer.
 * Notice that by initializing the pointer to a non-existent smallest number, the 
 * first call to next() will return the smallest element in the BST.
 * You may assume that next() calls will always be valid. That is, there will be 
 * at least a next number in the in-order traversal when next() is called.
 * 
 * Example 1:
 * Input
 * ["BSTIterator", "next", "next", "hasNext", "next", "hasNext", "next", "hasNext", 
 * "next", "hasNext"]
 * [[[7, 3, 15, null, null, 9, 20]], [], [], [], [], [], [], [], [], []]
 * Output
 * [null, 3, 7, true, 9, true, 15, true, 20, false] 
 * Explanation
 * BSTIterator bSTIterator = new BSTIterator([7, 3, 15, null, null, 9, 20]);
 * bSTIterator.next();    // return 3
 * bSTIterator.next();    // return 7
 * bSTIterator.hasNext(); // return True
 * bSTIterator.next();    // return 9
 * bSTIterator.hasNext(); // return True
 * bSTIterator.next();    // return 15
 * bSTIterator.hasNext(); // return True
 * bSTIterator.next();    // return 20
 * bSTIterator.hasNext(); // return False
 * 
 * Constraints:
 * The number of nodes in the tree is in the range [1, 10^5].
 * 0 <= Node.val <= 10^6
 * At most 10^5 calls will be made to hasNext, and next.
 */
import { TreeNode } from "../binaryTree/TreeNode.js";

var BSTIterator = function(root) {
    this.stack = [];
    this.node = root;
}

BSTIterator.prototype.next = function() {
    for (; this.node; this.node = this.node.left) {
        this.stack.push(this.node);
    }
    this.node = this.stack.pop();
    let val = this.node.val;
    this.node = this.node.right;
    return val;
}

BSTIterator.prototype.hasNext = function() {
    return this.stack.length || !!this.node;
}

var main = function() {
    /**
     *                4
     *               / \
     *              3   5
     *             /     \
     *            1       6
     */
    let nums = [4,3,5,1,6];
    let node4 = new TreeNode(nums[4], null, null);
    let node3 = new TreeNode(nums[3], null, null);
    let node2 = new TreeNode(nums[2], null, node4);
    let node1 = new TreeNode(nums[1], node3, null);
    let root = new TreeNode(nums[0], node1, node2);
    let bst = new BSTIterator(root);
    let str = '';
    while (bst.hasNext()) {
        str += bst.next() + ' ';
    }
    console.log(str);
}

// main();
export { BSTIterator };
