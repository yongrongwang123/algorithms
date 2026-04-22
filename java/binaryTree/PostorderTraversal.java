/**
 * 145. Binary Tree Postorder Traversal
 *
 * Given the root of a binary tree, return the postorder traversal of its nodes' values.
 * 
 * Example 1:
 * Input: root = [1,null,2,3]
 * Output: [3,2,1]
 * 
 * Constraints:
 * The number of the nodes in the tree is in the range [0, 100].
 * -100 <= Node.val <= 100
 */

package binaryTree;

import java.util.ArrayList;
import java.util.List;
import java.util.ArrayDeque;
import java.util.Deque;

public class PostorderTraversal {

    public static void main(String[] args) {
        LevelOrder l = new LevelOrder();
        TreeNode root = l.createTree();
        PostorderTraversal p = new PostorderTraversal();
        System.out.println("postorder: " + p.postorderTraversal(root));
        System.out.println("postorder: " + p.postorderTraversal2(root));
    }
    
    public List<Integer> postorderTraversal(TreeNode root) {
        List<Integer> list = new ArrayList<>();
        postorder(root, list);
        return list;
    }
    
    private void postorder(TreeNode node, List<Integer> list) {
        if (node == null) {
            return;
        }
        postorder(node.left, list);
        postorder(node.right, list);
        list.add(node.val);
    }

    /**
     * 先迭代访问左子树直到最左边的叶子节点，然后迭代访问右子树，访问方法和之前一样，最
     * 后将当前节点加入到结果中。当访问的当前节点是叶子节点或者左右节点都已经访问过后才
     * 可以加入当前节点到结果中
     */
    public List<Integer> postorderTraversal2(TreeNode root) {
        List<Integer> list = new ArrayList<>();
        Deque<TreeNode> stack = new ArrayDeque<>();
        TreeNode pre = null;
        while (root != null || !stack.isEmpty()) {
            while (root != null) {
                stack.push(root);
                root = root.left;
            }
            root = stack.peek().right;
            if (root == null || root == pre) {
                pre = stack.pop();
                list.add(pre.val);
                root = null;
            }
        }
        return list;
    }

}
