package sort;

/**
 * Given the head of a singly linked list, sort the list using insertion sort, and
 * return the sorted list's head.
 * The steps of the insertion sort algorithm:
 * 1. Insertion sort iterates, consuming one input element each repetition and growing
 *    a sorted output list.
 * 2. At each iteration, insertion sort removes one element from the input data,
 *    finds the location it belongs within the sorted list and inserts it there.
 * 3. It repeats until no input elements remain.
 *
 * Example 1:
 * Input: head = [4,2,1,3]
 * Output: [1,2,3,4]
 *
 * Constraints:
 * The number of nodes in the list is in the range [1, 5000].
 * -5000 <= Node.val <= 5000
 */
public class InsertionSortList {
    public static void main(String[] args) {
        int[] nums = {4,2,1,3};
        InsertionSortList i = new InsertionSortList();
        ListNode head = i.create(nums);
        i.visit(head);
        i.visit(i.insertionSortList(head));
    }

    private ListNode create(int[] nums) {
        ListNode helper = new ListNode(0);
        ListNode pre = helper;

        for (int i = 0; i < nums.length; i++) {
            ListNode cur = new ListNode(nums[i]);
            pre.next = cur;
            pre = cur;
        }

        return helper.next;
    }

    private void visit(ListNode head) {
        String str = "";
        for (ListNode cur = head; cur != null; cur = cur.next) {
            String split = (cur.next == null ? "" : "->");
            str += cur.val + split;
        }
        System.out.println(str);
    }

    /**
     * 因为可能要在 head 节点之前插入节点，所以引入 helper 节点，从 head 节点开始遍历
     * 原来的链表，每次遇到一个节点，就遍历已经排好序的新链表，在新链表中查找合适的
     * 插入位置，最后将节点插入新链表。
     */
    public ListNode insertionSortList(ListNode head) {
        ListNode helper = new ListNode(0);
        ListNode cur = head;

        while (cur != null) {
            ListNode pre = helper;
            for (; pre.next != null; pre = pre.next) {
                if (pre.next.val >= cur.val)
                    break;
            }
            ListNode next = cur.next;
            cur.next = pre.next;
            pre.next = cur;
            cur = next;
        }

        return helper.next;
    }
}

class ListNode {
    int val;
    ListNode next;

    ListNode() {}

    ListNode(int val) {
        this.val = val;
    }

    ListNode(int val, ListNode next) {
        this.val = val;
        this.next = next;
    }
}
