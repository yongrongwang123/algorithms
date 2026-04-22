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

package binaryTree;

import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

public class Connect {

    public static void main(String[] args) {
        /*
         *            7
         *           / \
         *          5   6
         *         /\   /\
         *        1  2 3  4
         */
        TreeNode node1 = new TreeNode(1, null, null, null);
        TreeNode node2 = new TreeNode(2, null, null, null);
        TreeNode node3 = new TreeNode(3, null, null, null);
        TreeNode node4 = new TreeNode(4, null, null, null);
        TreeNode node5 = new TreeNode(5, node1, node2, null);
        TreeNode node6 = new TreeNode(6, node3, node4, null);
        TreeNode node7 = new TreeNode(7, node5, node6, null);
        Connect c = new Connect();
        LevelOrder l = new LevelOrder();
        node7 = c.connect(node7);
        for (List<TreeNode> level : l.levelOrder2(node7)) {
            for (TreeNode node : level) {
                System.out.print(node.val + "->" + (node.next != null ? node.next.val + " " : "#" + "\n"));
            }
        }
    }
    
    /**
     * 递归法，充分利用next指针，对于每一个有孩子的节点，将它的左孩子指向右孩子，右孩子指向下一
     * 个节点的左孩子，最后递归遍历左孩子和右孩子
     */
    public TreeNode connect(TreeNode root) {
        if (root == null || root.left == null) {
            return root;
        }
        root.left.next = root.right;
        root.right.next = (root.next != null ? root.next.left : null);
        connect(root.right);
        connect(root.left);
        return root;
    }

}
