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

import { MyLinkedList, ListNode } from "./MyLinkedList.js";

/**
 * 迭代法：如果两个链表有一个为空则返回不为空的那个链表，否则使用虚拟头节点，让cur指向虚拟
 * 头节点，之后开始遍历两个链表，如果两个链表都没有遍历结束，则对比list1和list2指向的节点的值，将
 * cur.next指向值较小的那个节点，然后相应指针前移一步，如果两个链表有一个遍历结束了，则将
 * cur.next指向剩余的没有遍历完的部分
 */
var mergeTwoLists = function(list1, list2) {
    if (!list1) {
        return list2;
    }
    if (!list2) {
        return list1;
    }

    let dummy = new ListNode();
    let cur = dummy;
    while (list1 && list2) {
        cur.next = (list1.val < list2.val ? list1 : list2);
        if (list1.val < list2.val) {
            list1 = list1.next;
        } else {
            list2 = list2.next;
        }
        cur = cur.next;
    }
    cur.next = (list1 ? list1 : list2);
    
    return dummy.next;
}

let nums1 = [1,2,4];
console.log('nums1: ' + nums1);
let list1 = new MyLinkedList();
for (let num of nums1) {
    list1.addAtTail(num);
}
list1.visit();
let nums2 = [1,3,4];
console.log('nums2: ' + nums2);
let list2 = new MyLinkedList();
for (let num of nums2) {
    list2.addAtTail(num);
}
list2.visit();
let head = mergeTwoLists(list1.head, list2.head);
let list3 = new MyLinkedList(head);
console.log('merge:');
list3.visit();
