/**
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

import { MyLinkedList } from "./MyLinkedList.js";

/**
 * 使用两个指针p和q，p先出发，q后出发，先出发的比后出发的早走n步．如果p在走n步之后为null，
 * 则删掉头节点并返回；否则两指针每次走一步，当p为尾节点的时候，删掉q后面一个节点
 */
var removeNthFromEnd = function(head, n) {
    let p = head;
    let q = head;
    for (let i = 0; i < n && p; i++) {
        p = p.next;
    }
    if (!p) {
        return head.next;
    }
    while (p && p.next) {
        p = p.next;
        q = q.next;
    }
    q.next = q.next.next;
    return head;
}

let nums = [1,2,3,4,5];
let n = 2;
console.log('nums: ' + nums);
console.log('n: ' + n);
let list = new MyLinkedList();
for (let num of nums) { 
    list.addAtTail(num);
}
list.visit();
let head = removeNthFromEnd(list.head, n);
let list2 = new MyLinkedList(head);
list2.visit();
