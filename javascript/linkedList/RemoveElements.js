/**
 * 203. Remove Linked List Elements
 *
 * Given the head of a linked list and an integer val, remove all the nodes of the
 * linked list that has Node.val == val, and return the new head.
 *
 * Example 1:
 * Input: head = [1,2,6,3,4,5,6], val = 6
 * Output: [1,2,3,4,5]
 *
 * Constraints:
 * The number of nodes in the list is in the range [0, 104].
 * 1 <= Node.val <= 50
 * 0 <= val <= 50
 */

import { MyLinkedList } from './MyLinkedList.js';

/**
 * 先处理除了头节点以外的所有节点，使用一个指针遍历所有节点，如果当前节点数值等于val则删除
 * 当前节点，否则跳过当前节点，最后如果头节点数值等于val则删除头节点。
 */
var removeElements = function(head, val) {
    if (!head) {
        return null;
    }
    for (let cur = head; cur && cur.next;) {
        if (cur.next.val == val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return head.val == val ? head.next : head;
}

var main = function() {
    let nums = [1,2,6,3,4,5,6];
    let val = 6;
    console.log('val: ' + val);
    let list1 = new MyLinkedList();
    for (let num of nums) {
        list1.addAtTail(num);
    }
    list1.visit();
    let list2 = new MyLinkedList(removeElements(list1.head, val));
    list2.visit();
}

main();
