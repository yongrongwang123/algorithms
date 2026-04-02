package linkedList;

public class MyCycle {
    MyLinkedList list;

    public MyCycle (MyLinkedList list) {
        this.list = list;
    }

    public void createCycle(int[] nums, int pos) {
        for (int num : nums) {
            list.addAtTail(num);
        }
        if (nums.length <= 1 || pos < 0 || pos >= nums.length - 1) {
            return;
        }
        ListNode node1 = list.head;
        for (; node1.next != null; node1 = node1.next) {}
        ListNode node2 = list.head;
        for (int i = 0; i < nums.length; i++) {
            if (i == pos) {
                node1.next = node2;
                return;
            }
            node2 = node2.next;
        }
    }

    public void visitCycle() {
        ListNode cur = list.head;
        int size = list.size;
        String str = "";
        for (int i = 0; i < size; i++) {
            str += cur.val + (i == size - 1 ? "" : " -> ");
            cur = cur.next;
        }
        System.out.println(str);
    }
}
