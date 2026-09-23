/**
 * 23. Merge k Sorted Lists
 *
 * You are given an array of k linked-lists lists, each linked-list is sorted in
 * ascending order. Merge all the linked-lists into one sorted linked-list and
 * return it.
 * 
 * Example 1:
 * Input: lists = [[1,4,5],[1,3,4],[2,6]]
 * Output: [1,1,2,3,4,4,5,6]
 * Explanation: The linked-lists are:
 * 1->4->5,
 * 1->3->4,
 * 2->6,
 * merging them into one sorted linked list:
 * 1->1->2->3->4->4->5->6
 * 
 * Constraints:
 * k == lists.length
 * 0 <= k <= 10^4
 * 0 <= lists[i].length <= 500
 * -10^4 <= lists[i][j] <= 10^4
 * lists[i] is sorted in ascending order.
 * The sum of lists[i].length will not exceed 10^4.
 */

package linkedList;

public class MergeKLists {
    public static void main(String[] args) {
        int[][] arrs = {{1,4,5},{1,3,4},{2,6}};
        ListNode[] lists = new ListNode[arrs.length];
        for (int i = 0; i < arrs.length; i++) {
            MyLinkedList list1 = new MyLinkedList();
            for (int num : arrs[i]) {
                list1.addAtTail(num);
            }
            lists[i] = list1.head;
            list1.visit();
        }
        MergeKLists m = new MergeKLists();
        MyLinkedList list2 = new MyLinkedList(m.mergeKLists(lists));
        list2.visit();
    }

    public ListNode mergeKLists(ListNode[] lists) {
        if (lists.length == 0) {
            return null;
        }
        return mergek(lists, 0, lists.length - 1);
    }

    /**
     * 类似归并排序的分解步骤
     */
    private ListNode mergek(ListNode[] lists, int left, int right) {
        if (left >= right) {
            return lists[left];
        }
        int mid = left + (right - left) / 2;
        ListNode list1 = mergek(lists, left, mid);
        ListNode list2 = mergek(lists, mid + 1, right);
        return merge(list1, list2);
    }

    /**
     * 合并两个有序链表
     */
    private ListNode merge(ListNode list1, ListNode list2) {
        if (list2 == null) {
            return list1;
        }
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
