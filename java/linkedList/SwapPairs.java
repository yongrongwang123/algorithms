/**
 * 24. Swap Nodes in Pairs
 *
 * Given a linked list, swap every two adjacent nodes and return its head. You
 * must solve the problem without modifying the values in the list's nodes (i.e.,
 * only nodes themselves may be changed.)
 *
 * Example 1:
 * Input: head = [1,2,3,4]
 * Output: [2,1,4,3]
 *
 * Constraints:
 * The number of nodes in the list is in the range [0, 100].
 * 0 <= Node.val <= 100
 */

package linkedList;

public class SwapPairs {

    public static void main(String[] args) {
        int[] nums = {1,2,3,4};
        MyLinkedList list1 = new MyLinkedList();
        for (int num : nums) {
            list1.addAtTail(num);
        }
        list1.visit();
        SwapPairs s = new SwapPairs();
        MyLinkedList list2 = new MyLinkedList(s.swapPairs(list1.head));
        list2.visit();
    }

    /**
     * dummy -> 1 -> 2 -> 3 -> 4，使用虚拟头节点，假设pre指向节点dummy，head指向节点1，
     * head.next指向节点2，head.next.next指向节点3，每次循环先保存节点2，然后让节点1的
     * next指针指向节点3，再让节点2的next指针指向节点1，最后让pre的next指针指向节点2
     */
    public ListNode swapPairs(ListNode head) {
        ListNode dummy = new ListNode(0, head);
        ListNode pre = dummy;
        ListNode next = null;
        for (; head != null && head.next != null; head = head.next) {
            next = head.next;
            head.next = next.next;
            next.next = head;
            pre.next  = next;
            pre = head;
        }
        return dummy.next;
    }

}
