/**
 * 61. Rotate List
 *
 * Given the head of a linked list, rotate the list to the right by k places.
 *
 * Example 1:
 * Input: head = [1,2,3,4,5], k = 2
 * Output: [4,5,1,2,3]
 *
 * Constraints:
 * The number of nodes in the list is in the range [0, 500].
 * -100 <= Node.val <= 100
 * 0 <= k <= 2 * 10^9
 */
package linkedList;

public class RotateRight {

    public static void main(String[] args) {
        int[] nums = {1,2,3,4,5};
        int k = 2;
        System.out.println("k: " + k);
        MyLinkedList list1 = new MyLinkedList();
        for (int num : nums) {
            list1.addAtTail(num);
        }
        list1.visit();
        RotateRight r = new RotateRight();
        MyLinkedList list2 = new MyLinkedList(r.rotateRight(list1.head, k));
        list2.visit();
    }

    /**
     * 首先计算出链表中节点个数 size，然后将链表首尾相连成环状，再从尾节点往前走 size-k%size
     * 步，最后断开环状链表
     */
    public ListNode rotateRight(ListNode head, int k) {
        if (head == null) {
            return null;
        }
        int size = 1;
        ListNode cur = head;
        for (; cur.next != null; cur = cur.next) {
            size++;
        }
        cur.next = head;
        for (int i = 0; i < size - k % size; i++) {
            cur = cur.next;
        }
        head = cur.next;
        cur.next = null;
        return head;
    }

}
