/**
 * Serialization is the process of converting a data structure or object into a
 * sequence of bits so that it can be stored in a file or memory buffer, or transmitted
 * across a network connection link to be reconstructed later in the same or another
 * computer environment. Design an algorithm to serialize and deserialize a binary
 * tree. There is no restriction on how your serialization/deserialization algorithm
 * should work. You just need to ensure that a binary tree can be serialized to
 * a string and this string can be deserialized to the original tree structure.
 * Clarification: The input/output format is the same as how LeetCode serializes
 * a binary tree. You do not necessarily need to follow this format, so please be
 * creative and come up with different approaches yourself.
 *
 * Example 1:
 * Input: root = [1,2,3,null,null,4,5]
 * Output: [1,2,3,null,null,4,5]
 *
 * Constraints:
 * The number of nodes in the tree is in the range [0, 10^4].
 * -1000 <= Node.val <= 1000
 */

package binaryTree;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.Queue;
import arrays.ArrayUtils;

public class Codec {
    String spliter = ",";
    String NULL = "$";

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
        int[] nums = {7,5,6,1,2,3,4,8,9};
        TreeNode node8 = new TreeNode(nums[8], null, null, null);
        TreeNode node7 = new TreeNode(nums[7], null, null, null);
        TreeNode node6 = new TreeNode(nums[6], null, node8, null);
        TreeNode node5 = new TreeNode(nums[5], null, null, null);
        TreeNode node4 = new TreeNode(nums[4], null, null, null);
        TreeNode node3 = new TreeNode(nums[3], node7, null, null);
        TreeNode node2 = new TreeNode(nums[2], node5, node6, null);
        TreeNode node1 = new TreeNode(nums[1], node3, node4, null);
        TreeNode root = new TreeNode(nums[0], node1, node2, null);
        Codec c = new Codec();
        String data = c.serialize(root);
        System.out.println(c.serialize(root));
        root = c.deserialize(data);
        LevelOrder l = new LevelOrder();
        ArrayUtils a = new ArrayUtils();
        a.print2dArray(a.toArray(l.levelOrder(root)));
    }

    public String serialize(TreeNode root) {
        StringBuilder builder = new StringBuilder();
        return buildString(root, builder).toString();
    }

    /**
     * 递归法，使用','表示分隔符，'$'表示null，按照先序遍历顺序来拼接序列化后的字符串，对于每个
     * 节点先拼接节点值再拼接分隔符
     */
    private StringBuilder buildString(TreeNode node, StringBuilder builder) {
        if (node == null) {
            builder.append(NULL).append(spliter);
        } else {
            builder.append(node.val).append(spliter);
            builder = buildString(node.left, builder);
            builder = buildString(node.right, builder);
        }
        return builder;
    }

    public TreeNode deserialize(String data) {
        Queue<String> queue = new LinkedList<String>(Arrays.asList(data.split(spliter)));
        return buildTree(queue);
    }

    /**
     * 递归法，队列中存储了按照先序遍历顺序的节点值，每次使用从队列头弹出的字符串表示的数字作为
     * 当前节点的值，然后分别递归构造左子树和右子树
     */
    private TreeNode buildTree(Queue<String> queue) {
        String val = queue.poll();
        if (val.equals(NULL)) {
            return null;
        } else {
            TreeNode node = new TreeNode(Integer.valueOf(val));
            node.left = buildTree(queue);
            node.right = buildTree(queue);
            return node;
        }
    }

}
