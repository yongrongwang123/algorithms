/**
 * 234. Palindrome Linked List
 *
 * Given the head of a singly linked list, return true if it is a palindrome or
 * false otherwise.
 *
 * Example 1:
 * Input: head = [1,2,2,1]
 * Output: true
 *
 * Constraints:
 * The number of nodes in the list is in the range [1, 10^5].
 * 0 <= Node.val <= 9
 */

import { MyLinkedList } from './MyLinkedList.js';

/**
 * 1.使用一快一慢两个指针同时从链表起点出发，快指针一次两步，慢指针一次一步，慢指针
 * 一边走一边反转链表，当快指针到达终点的时候，慢指针刚好到达中点，如果是奇数个节点，
 * 则慢指针继续往前走一步；
 * 2.使用两个指针分别指向两个新生成的链表头节点，然后挨个比较节点，如果出现不相等的
 * 节点数值则返回false，如果所有节点数值都相等则返回true
 */
var isPalindrome = function(head) {
    let fast = head;
    let slow = head;
    let pre = null;
    let next = null;
    while (fast && fast.next) {
        fast = fast.next.next;
        next = slow.next;
        slow.next = pre;
        pre = slow;
        slow = next;
    }
    slow = (fast ? slow.next : slow);
    for (; slow; slow = slow.next, pre = pre.next) {
        if (slow.val != pre.val) {
            return false;
        }
    }
    return true;
}

var main = function() {
    let nums = [1,2,2,1];
    let list = new MyLinkedList();
    for (let num of nums) {
        list.addAtTail(num);
    }
    list.visit();
    console.log('palindrome: ' + isPalindrome(list.head));
}

main();
