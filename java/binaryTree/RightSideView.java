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

package binaryTree;

import java.util.ArrayList;
import java.util.List;

public class RightSideView {
    public void main(String[] args) {
        LevelOrder l = new LevelOrder();
        TreeNode root = l.createTree();
        System.out.println("level order: " + l.levelOrder(root));
        RightSideView r = new RightSideView();
        System.out.println("right view: " + r.rightSideView(root));
    }

    public List<Integer> rightSideView(TreeNode root) {
        List<Integer> list = new ArrayList<>();
        view(root, 0, list);
        return list;
    }

    /**
     * 使用反转的后序遍历，遍历顺序是根结点到右子树到左子树，记录同一个深度遇到的第一个节点
     */
    private void view(TreeNode root, int depth, List<Integer> list) {
        if (root == null) {
            return;
        }
        if (depth == list.size()) {
            list.add(root.val);
        }
        view(root.right, depth + 1, list);
        view(root.left, depth + 1, list);
    }
}
