/**
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
        ListNode node4 = new ListNode(4, null);
        ListNode node3 = new ListNode(3, node4);
        ListNode node2 = new ListNode(2, node3);
        ListNode node1 = new ListNode(1, node2);
        MyLinkedList list = new MyLinkedList(node1);
        list.visit();
        SwapPairs s = new SwapPairs();
        node1 = s.swapPairs(node1);
        list = new MyLinkedList(node1);
        list.visit();
    }

    /**
     * dummy -> 1 -> 2 -> 3 -> 4
     * 迭代法：使用虚拟头节点，假设pre指向节点dummy，head指向节点1，head.next指向节点2，
     * head.next.next指向节点3，每次循环先保存节点2，然后让节点1的next指针指向节点3，再让节
     * 点2的next指针指向节点1，最后让pre的next指针指向节点2
     */
    public ListNode swapPairs(ListNode head) {
        ListNode dummy = new ListNode(-1);
        dummy.next = head;
        for (ListNode pre = dummy, next = null; head != null && head.next != null; head = head.next) {
            next = head.next;
            head.next = next.next;
            next.next = head;
            pre.next  = next;
            pre = head;
        }
        return dummy.next;
    }

}
