/**
 * 94. Binary Tree Inorder Traversal
 *
 * Given the root of a binary tree, return the inorder traversal of its nodes' values.
 * 
 * Example 1:
 * Input: root = [1,null,2,3]
 * Output: [1,3,2]
 * 
 * Constraints:
 * The number of nodes in the tree is in the range [0, 100].
 * -100 <= Node.val <= 100
 */

package binaryTree;

import java.util.ArrayList;
import java.util.List;
import java.util.ArrayDeque;
import java.util.Deque;

public class InorderTraversal {

    public static void main(String[] args) {
        LevelOrder l = new LevelOrder();
        TreeNode root = l.createTree();
        InorderTraversal i = new InorderTraversal();
        System.out.println("inorder: " + i.inorderTraversal(root));
        System.out.println("inorder: " + i.inorderTraversal2(root));
    }

    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> list = new ArrayList<>();
        this.inorder(root, list);
        return list;
    }

    /**
     * 深度优先遍历
     */
    private void inorder(TreeNode node, List<Integer> list) {
        if (node == null) {
            return;
        }
        inorder(node.left, list);
        list.add(node.val);
        inorder(node.right, list);
    }

    /**
     * 先迭代访问左子树直到最左边的叶子节点，然后将当前节点加入到结果中，最后迭代访问右子树，
     * 访问方法和之前一样
     */
    public List<Integer> inorderTraversal2(TreeNode root) {
        List<Integer> list = new ArrayList<>();
        Deque<TreeNode> stack = new ArrayDeque<>();
        while (root != null || !stack.isEmpty()) {
            while (root != null) {
                stack.push(root);
                root = root.left;
            }
            root = stack.pop();
            list.add(root.val);
            root = root.right;
        }
        return list;
    }

}
