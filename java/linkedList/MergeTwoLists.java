package linkedList;

/**
 * Merge two sorted linked lists and return it as a sorted list. The list should
 * be made by splicing together the nodes of the first two lists.
 *
 * Example 1:
 * Input: list1 = [1,2,4], list2 = [1,3,4]
 * Output: [1,1,2,3,4,4]
 *
 * Constraints:
 * The number of nodes in both lists is in the range [0, 50].
 * -100 <= Node.val <= 100
 * Both list1 and list2 are sorted in non-decreasing order.
 */
public class MergeTwoLists {

    public static void main(String[] args) {
        int[] nums = {1,2,4};
        MyLinkedList list = new MyLinkedList();
        for (int i = 0; i < nums.length; i++) {
            list.addAtTail(nums[i]);
        }
        list.visit();
        int[] nums1 = {1,3,4};
        MyLinkedList list1 = new MyLinkedList();
        for (int i = 0; i < nums1.length; i++) {
            list1.addAtTail(nums1[i]);
        }
        list1.visit();
        MergeTwoLists m = new MergeTwoLists();
        ListNode h = m.mergeTwoLists(list.getHead(), list1.getHead());
        MyLinkedList list2 = new MyLinkedList(h);
        list2.visit();
    }

    /**
     * 迭代法：如果两个链表有一个为空则返回不为空的那个链表，否则使用虚拟头节点，让cur指向虚拟
     * 头节点，之后开始遍历两个链表，如果两个链表都没有遍历结束，则对比list1和list2指向的节点的值，将
     * cur.next指向值较小的那个节点，然后相应指针前移一步，如果两个链表有一个遍历结束了，则将
     * cur.next指向剩余的没有遍历完的部分
     */
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        if (list1 == null) {
            return list2;
        }
        if (list2 == null) {
            return list1;
        }
        ListNode dummy = new ListNode();
        ListNode cur = dummy;
        while (list1 != null && list2 != null) {
            cur.next = (list1.val < list2.val ? list1 : list2);
            if (list1.val < list2.val) {
                list1 = list1.next;
            } else {
                list2 = list2.next;
            }
            cur = cur.next;
        }
        cur.next = (list1 != null ? list1 : list2);
        return dummy.next;
    }

}
