/**
 * 21. Merge Two Sorted Lists
 *
 * You are given the heads of two sorted linked lists list1 and list2. Merge the
 * two lists into one sorted list. The list should be made by splicing together the
 * nodes of the first two lists. Return the head of the merged linked list.
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

import { MyLinkedList } from './MyLinkedList.js';
import { ListNode } from './ListNode.js';

/**
 * 指针 list1 从虚拟头节点出发，当指针 list1 不为空时，如果 list1 后一个节点的值小
 * 于 list2 的值，交换 list1 后一个节点和 list2，否则只需要 list1 向前移一步，当
 * list1 为空但 list2 不为空时，将 list2 接在 list1 后面
 */
var mergeTwoLists = function(list1, list2) {
    if (!list2) {
        return list1;
    }
    let dummy = new ListNode(0, list1);
    let next = null;
    for (list1 = dummy; list1.next; list1 = list1.next) {
        if (list1.next.val > list2.val) {
            next = list1.next;
            list1.next = list2;
            list2 = next;
        }
    }
    list1.next = list2;
    return dummy.next;
}

var main = function() {
    let nums1 = [1,2,4];
    let list1 = new MyLinkedList();
    for (let num of nums1) {
        list1.addAtTail(num);
    }
    list1.visit();
    let nums2 = [1,3,4];
    let list2 = new MyLinkedList();
    for (let num of nums2) {
        list2.addAtTail(num);
    }
    list2.visit();
    let list3 = new MyLinkedList(mergeTwoLists(list1.head, list2.head));
    list3.visit();
}

main();
