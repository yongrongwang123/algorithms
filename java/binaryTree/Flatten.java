/**
 * 114. Flatten Binary Tree to Linked List
 *
 * Given the root of a binary tree, flatten the tree into a "linked list":
 * - The "linked list" should use the same TreeNode class where the right child pointer
 *   points to the next node in the list and the left child pointer is always null.
 * - The "linked list" should be in the same order as a pre-order traversal of the
 *   binary tree.
 * 
 * Example 1:
 * Input: root = [1,2,5,3,4,null,6]
 * Output: [1,null,2,null,3,null,4,null,5,null,6]
 * 
 * Constraints:
 * The number of nodes in the tree is in the range [0, 2000].
 * -100 <= Node.val <= 100
 */

package binaryTree;

public class Flatten {
    TreeNode pre;

    public static void main(String[] args) {
        LevelOrder l = new LevelOrder();
        TreeNode root = l.createTree();
        System.out.println("level order: " + l.levelOrder(root));
        Flatten f = new Flatten();
        f.flatten(root);
        System.out.println("level order: " + l.levelOrder(root));
    }

    public void flatten(TreeNode root) {
        pre = null;
        flat(root);
    }

    /**
     * 使用反转的前序遍历，访问顺序是右子树到左子树到根结点，当递归返回的时候，使用链表
     * 的头插法，在进入下一次递归前记录当前节点的后一个节点
     */
    private void flat(TreeNode root) {
        if (root == null) {
            return;
        }
        flat(root.right);
        flat(root.left);
        root.right = pre;
        root.left = null;
        pre = root;
    }
}
