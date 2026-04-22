/**
 * 117. Populating Next Right Pointers in Each Node II
 *
 * Given a binary tree
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
        Connect2 c2 = new Connect2();
        LevelOrder l = new LevelOrder();
        TreeNode root= l.createTree();
        root = c2.connect(root);
        String str = "";
        for (List<TreeNode> level : l.levelOrder2(root)) {
            for (TreeNode node : level) {
                str += node.val + "->" + (node.next != null ? node.next.val + " " : "#\n");
            }
        }
        System.out.println(str);
    }
    
    /**
     * 注意点是要先递归右孩子然后递归左孩子，因为指针连接是左边指向右边，需要先完成右边
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
        for (node = node.next; node != null; node = node.next) {
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
