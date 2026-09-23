/**
 * 148. Sort List
 *
 * Given the head of a linked list, return the list after sorting it in ascending order.
 *
 * Example 1:
 * Input: head = [4,2,1,3]
 * Output: [1,2,3,4]
 * 
 * Constraints:
 * The number of nodes in the list is in the range [0, 5 * 10^4].
 * -10^5 <= Node.val <= 10^5
 */

package linkedList;

public class SortList {
    public static void main(String[] args) {
        int[] nums = {4,2,1,3};
        MyLinkedList list1 = new MyLinkedList();
        for (int num : nums) {
            list1.addAtTail(num);
        }
        list1.visit();
        SortList s = new SortList();
        MyLinkedList list2 = new MyLinkedList(s.sortList(list1.head));
        list2.visit();
    }

    /**
     * 归并排序分为分解，递归和合并，分解通过两个指针 fast 和 slow 找到中点
     */
    public ListNode sortList(ListNode head) {
        if (head == null || head.next == null) {
            return head;
        }
        ListNode slow = head;
        for (ListNode fast = head.next; fast != null && fast.next != null;) {
            slow = slow.next;
            fast = fast.next.next;
        }
        ListNode head2 = slow.next;
        slow.next = null;
        ListNode list1 = sortList(head);
        ListNode list2 = sortList(head2);
        return merge(list1, list2);
    }

    /**
     * 合并两个有序链表
     */
    public ListNode merge(ListNode list1, ListNode list2) {
        ListNode dummy = new ListNode(0, list1);
        ListNode next = null;
        for (list1 = dummy; list1.next != null; list1 = list1.next) {
            if (list1.next.val > list2.val) {
                next = list1.next;
                list1.next = list2;
                list2 = next;
            }
        }
        list1.next = list2;
        return dummy.next;
    }
}
