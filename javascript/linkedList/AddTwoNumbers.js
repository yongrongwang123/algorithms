/**
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order, and each of their nodes contains a single
 * digit. Add the two numbers and return the sum as a linked list. You may assume
 * the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * Example 1:
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Output: [7,0,8]
 * Explanation: 342 + 465 = 807.
 *
 * Constraints:
 * The number of nodes in each linked list is in the range [1, 100].
 * 0 <= Node.val <= 9
 * It is guaranteed that the list represents a number that does not have leading zeros.
 */

import { MyLinkedList, ListNode } from "./MyLinkedList.js";

/**
 * 使用虚拟头节点来将头节点的插入和其它节点的插入统一化，每次从两个链表中各取一个节点，将它们
 * 的数值进行相加并加上进位作为sum，用sum % 10的结果作为val创建一个新的节点并插入新的链表，
 * 再用sum / 10的结果作为下一次循环的进位
 */
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0);
    let cur = dummy;
    let sum = 0;

    while (l1 || l2 || sum) {
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        cur.next = new ListNode(sum % 10);
        cur = cur.next;
        sum = Math.floor(sum / 10);
    }

    return dummy.next;
}

let nums1 = [2,4,3];
console.log('nums1: ' + nums1);
let list1 = new MyLinkedList();
for (let num of nums1) {
    list1.addAtTail(num);
}
list1.visit();
let nums2 = [5,6,4];
console.log('nums2: ' + nums2);
let list2 = new MyLinkedList();
for (let num of nums2) {
    list2.addAtTail(num);
}
list2.visit();
let head = addTwoNumbers(list1.head, list2.head);
let list3 = new MyLinkedList(head);
list3.visit();
