/**
 * Given the root of a binary tree, return the preorder traversal of its nodes' values.
 * 
 * Example 1:
 * Input: root = [1,null,2,3]
 * Output: [1,2,3]
 * 
 * Constraints:
 * The number of nodes in the tree is in the range [0, 100].
 * -100 <= Node.val <= 100
 */

package binaryTree;

import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

public class PreorderTraversal {

    public static void main(String[] args) {
        /*
         *            5
         *           / \
         *          2   4
         *         /   /
         *        1   3
         */
        int[] nums = {5,2,4,1,3};
        TreeNode node4 = new TreeNode(nums[4], null, null);
        TreeNode node3 = new TreeNode(nums[3], null, null);
        TreeNode node2 = new TreeNode(nums[2], node4, null);
        TreeNode node1 = new TreeNode(nums[1], node3, null);
        TreeNode root = new TreeNode(nums[0], node1, node2);
        PreorderTraversal p = new PreorderTraversal();
        System.out.println(p.preorderTraversal(root));
        System.out.println(p.preorderTraversal2(root));
    }
    
    /**
     * 递归法：深度优先遍历
     */
    public List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> list = new ArrayList<Integer>();
        this.dfs(root, list);
        return list;
    }
    
    private void dfs(TreeNode node, List<Integer> list) {
        if (node == null) {
            return;
        }
        list.add(node.val);
        dfs(node.left, list);
        dfs(node.right, list);
    }
    
    /**
     * 迭代法：先将当前节点加入到堆栈中，然后迭代访问左子树直到最左边的叶子节点，最后迭代访问右子树，
     * 访问方法和之前一样
     */
    public List<Integer> preorderTraversal2(TreeNode root) {
        List<Integer> list = new ArrayList<Integer>();
        Stack<TreeNode> stack = new Stack<TreeNode>();
        TreeNode cur = root;
        while (cur != null || !stack.isEmpty()) {
            if (cur != null) {
                list.add(cur.val);
                if (cur.right != null) {
                    stack.push(cur.right);
                }
                cur = cur.left;
            } else {
                cur = stack.pop();
            }
        }
        return list;
    }

}
