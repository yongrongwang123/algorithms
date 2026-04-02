/**
 * 430. Flatten a Multilevel Doubly Linked List
 *
 * You are given a doubly linked list, which contains nodes that have a next pointer,
 * a previous pointer, and an additional child pointer. This child pointer may or
 * may not point to a separate doubly linked list, also containing these special
 * nodes. These child lists may have one or more children of their own, and so on,
 * to produce a multilevel data structure as shown in the example below. Given the
 * head of the first level of the list, flatten the list so that all the nodes appear
 * in a single-level, doubly linked list. Let curr be a node with a child list. The
 * nodes in the child list should appear after curr and before curr.next in the
 * flattened list. Return the head of the flattened list. The nodes in the list must
 * have all of their child pointers set to null.
 *
 * Example 1:
 * Input: head = [1,2,null,3]
 * Output: [1,3,2]
 * Explanation: The multilevel linked list in the input is shown. 
 * After flattening the multilevel linked list it becomes:
 * 1---2---NULL
 * |
 * 3---NULL
 *
 * Constraints:
 * The number of Nodes will not exceed 1000.
 * 1 <= Node.val <= 10^5
 */
package linkedList;

public class Flatten {

    public static void main(String[] args) {
        Integer[] nums = {1,2,null,3};
        Flatten f = new Flatten();
        ListNode head = f.createList(nums);
        f.visit(f.flatten(head));
    }

    public void visit(ListNode head) {
        String str = "";
        for (ListNode cur = head; cur != null; cur = cur.next) {
            str += cur.val + (cur.next == null ? "" : " <-> ");
        }
        System.out.println(str);
    }

    private ListNode createList(Integer[] nums) {
        if (nums.length == 0) {
            return null;
        }
        ListNode head = new ListNode(nums[0]);
        ListNode cur = head;
        ListNode t = cur;
        for (int i = 0; i < nums.length;) {
            if (nums[i] != null) {
                if (++i == nums.length || nums[i] == null) {
                    cur.next = null;
                } else {
                    cur.next = new ListNode(nums[i]);
                }
                cur.child = null;
                cur = cur.next;
            } else {
                for (i += 1; nums[i] == null; i++) {
                    t = t.next;
                }
                cur = new ListNode(nums[i]);
                t.child = cur;
                t = cur;
            }
        }
        return head;
    }

    /**
     * 依次遍历每一个节点
     * 1.如果当前节点没有子节点，继续前进；
     * 2.如果当前节点有子节点，找到子节点所在层的尾节点，然后将尾节点和当前节点下一个节点连接，
     * 再将当前节点和子节点连接
     */
    public ListNode flatten(ListNode head) {
        if (head == null) {
            return null;
        }
        for (ListNode cur = head; cur != null; ) {
            if (cur.child == null) {
                cur = cur.next;
                continue;
            }
            ListNode tail = cur.child;
            for (; tail.next != null; tail = tail.next) {}
            tail.next = cur.next;
            if (cur.next != null) {
                cur.next.prev = tail;
            }
            cur.next = cur.child;
            cur.child.prev = cur;
            cur.child = null;
        }
        return head;
    }

}
