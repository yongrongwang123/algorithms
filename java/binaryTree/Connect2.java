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

package binaryTree;

import java.util.List;

public class Connect2 {

    public static void main(String[] args) {
        /*
         *            7
         *           / \
         *          5   6
         *         /\   /\
         *        1  2 3  4
         *       /         \
         *      8           9
         */
        TreeNode node8 = new TreeNode(8, null, null, null);
        TreeNode node9 = new TreeNode(9, null, null, null);
        TreeNode node1 = new TreeNode(1, node8, null, null);
        TreeNode node2 = new TreeNode(2, null, null, null);
        TreeNode node3 = new TreeNode(3, null, null, null);
        TreeNode node4 = new TreeNode(4, null, node9, null);
        TreeNode node5 = new TreeNode(5, node1, node2, null);
        TreeNode node6 = new TreeNode(6, node3, node4, null);
        TreeNode node7 = new TreeNode(7, node5, node6, null);
        Connect2 c2 = new Connect2();
        LevelOrder l = new LevelOrder();
        node7 = c2.connect(node7);
        for (List<TreeNode> level : l.levelOrder2(node7)) {
            for (TreeNode node : level) {
                System.out.print(node.val + "->" + (node.next != null ? node.next.val + " " : "#" + "\n"));
            }
        }
    }
    
    /**
     * 递归法，注意点是要先递归右孩子然后递归左孩子，因为指针连接是左边指向右边，需要先完成右边
     * 再去完成左边，否则在下一层查找下一个非null的节点的时候会出错
     */
    public TreeNode connect(TreeNode root) {
        if (root == null) {
            return null;
        }
        if (root.left != null) {
            root.left.next = (root.right != null ? root.right : findNext(root));
        }
        if (root.right != null) {
            root.right.next = findNext(root);
        }
        connect(root.right);
        connect(root.left);
        return root;
    }
    
    /**
     * 在下一层查找下一个非null的节点
     */
    private TreeNode findNext(TreeNode node) {
        while (node.next != null) {
            node = node.next;
            if (node.left != null) {
                return node.left;
            }
            if (node.right != null) {
                return node.right;
            }
        }
        return null;
    }
    
}
