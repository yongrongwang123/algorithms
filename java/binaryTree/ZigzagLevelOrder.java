/**
 * Given the root of a binary tree, return the zigzag level order traversal of
 * its nodes' values. (i.e., from left to right, then right to left for the next
 * level and alternate between).
 *
 * Example 1:
 * Input: root = [3,9,20,null,null,15,7]
 * Output: [[3],[20,9],[15,7]]
 * 
 * Constraints:
 * The number of nodes in the tree is in the range [0, 2000].
 * -100 <= Node.val <= 100
 */

package binaryTree;

import java.util.List;
import java.util.LinkedList;
import java.util.ArrayDeque;
import java.util.Deque;
import arrays.ArrayUtils;

public class ZigzagLevelOrder {

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
        ZigzagLevelOrder z = new ZigzagLevelOrder();
        ArrayUtils a = new ArrayUtils();
        a.print2dArray(a.toArray(z.zigzagLevelOrder(root)));
    }

    /**
     * 用双端队列，如果是先压入左孩子再压入右孩子，则跟普通队列相同，从队头弹出队尾
     * 压入，如果是先压入右孩子再压入左孩子，则跟普通队列相反，从队尾弹出队头压入，
     * 完成一层遍历就反转方向
     */
    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
        List<List<Integer>> list = new LinkedList<>();
        if (root == null) {
            return list;
        }
        Deque<TreeNode> deque = new ArrayDeque<>();
        deque.add(root);
        TreeNode cur = null;
        boolean reverse = false;

        while (!deque.isEmpty()) {
            List<Integer> level = new LinkedList<>();
            for (int i = deque.size(); i > 0; i--) {
                if (reverse) {
                    cur = deque.pollLast();
                    if (cur.right != null) {
                        deque.addFirst(cur.right);
                    }
                    if (cur.left != null) {
                        deque.addFirst(cur.left);
                    }
                } else {
                    cur = deque.pollFirst();
                    if (cur.left != null) {
                        deque.addLast(cur.left);
                    }
                    if (cur.right != null) {
                        deque.addLast(cur.right);
                    }
                }
                level.add(cur.val);
            }
            list.add(level);
            reverse = !reverse;
        }

        return list;
    }

}
