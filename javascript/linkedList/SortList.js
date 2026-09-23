/**
 * 148. Sort List
 *
 * Given the head of a linked list, return the list after sorting it in ascending order.
 *
 * Example 1:
 * Input: head = [4,2,1,3]
 * Output: [1,2,3,4]
 * 
 * Constraints:
 * The number of nodes in the list is in the range [0, 5 * 10^4].
 * -10^5 <= Node.val <= 10^5
 */
import { ListNode } from '../linkedList/ListNode.js';
import { MyLinkedList } from '../linkedList/MyLinkedList.js';

/**
 * 归并排序分为分解，递归和合并，分解通过两个指针 fast 和 slow 找到中点
 */
var sortList = function(head) {
    if (!head || !head.next) {
        return head;
    }
    let slow = head;
    for (let fast = head.next; fast && fast.next;) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let head2 = slow.next;
    slow.next = null;
    let list1 = sortList(head);
    let list2 = sortList(head2);
    return merge(list1, list2);
};

/**
 * 合并两个有序链表
 */
var merge = function(list1, list2) {
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
};

var main = function() {
    let nums = [4,2,1,3];
    let list1 = new MyLinkedList();
    for (let num of nums) {
        list1.addAtTail(num);
    }
    list1.visit();
    let list2 = new MyLinkedList(sortList(list1.head));
    list2.visit();
};

main();
