/**
 * 141. Linked List Cycle
 *
 * Given head, the head of a linked list, determine if the linked list has a cycle
 * in it. There is a cycle in a linked list if there is some node in the list that
 * can be reached again by continuously following the next pointer. Internally,
 * pos is used to denote the index of the node that node1's next pointer is connected
 * to. Note that pos is not passed as a parameter. Return true if there is a cycle
 * in the linked list. Otherwise, return false.
 *
 * Example 1:
 * Input: head = [3,2,0,-4], pos = 1
 * Output: true
 * Explanation: There is a cycle in the linked list, where the node1 connects to
 * the 1st node (0-indexed).
 *
 * Constraints:
 * The number of the nodes in the list is in the range [0, 10^4].
 * -10^5 <= Node.val <= 10^5
 * pos is -1 or a valid index in the linked-list.
 */
package linkedList;

public class HasCycle {

    public static void main(String[] args) {
        int[] nums = {3,2,0,-4};
        int pos = 1;
        System.out.println("pos: " + pos);;
        MyCycle cycle = new MyCycle(new MyLinkedList());
        cycle.createCycle(nums, pos);
        cycle.visitCycle();
        HasCycle h = new HasCycle();
        System.out.println("cycle: " + h.hasCycle(cycle.list.head));
    }

    /**
     * 使用一个快指针和一个慢指针同时遍历链表，如果快指针和慢指针相遇了，则说明有环路，否则没有环路
     */
    public boolean hasCycle(ListNode head) {
        for (ListNode slow = head, fast = head; fast != null && fast.next != null;) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) {
                return true;
            }
        }
        return false;
    }

}
