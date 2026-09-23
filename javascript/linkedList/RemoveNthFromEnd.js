/**
 * 19. Remove Nth Node From End of List
 *
 * Given the head of a linked list, remove the nth node from the end of the list
 * and return its head.
 *
 * Example 1:
 * Input: head = [1,2,3,4,5], n = 2
 * Output: [1,2,3,5]
 *
 * Constraints:
 * The number of nodes in the list is sz.
 * 1 <= sz <= 30
 * 0 <= Node.val <= 100
 * 1 <= n <= sz
 */

import { MyLinkedList } from './MyLinkedList.js';

/**
 * 使用两个指针fast和slow，fast先出发，slow后出发，先出发的比后出发的早走n+1步．两指针
 * 每次走一步，当fast为null的时候，删掉slow后面一个节点
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0, head);
    let fast = dummy;
    let slow = dummy;
    for (; n >= 0; n--) {
        fast = fast.next;
    }
    for (; fast; fast = fast.next) {
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return dummy.next;
}

var main = function() {
    let nums = [1,2,3,4,5];
    let n = 2;
    console.log('n: ' + n);
    let list1 = new MyLinkedList();
    for (let num of nums) { 
        list1.addAtTail(num);
    }
    list1.visit();
    let list2 = new MyLinkedList(removeNthFromEnd(list1.head, n));
    list2.visit();
}

main();
