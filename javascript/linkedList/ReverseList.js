/**
 * Given the head of a singly linked list, reverse the list, and return the reversed
 * list.
 *
 * Example 1:
 * Input: head = [1,2,3,4,5]
 * Output: [5,4,3,2,1]
 *
 * Constraints:
 * The number of nodes in the list is the range [0, 5000].
 * -5000 <= Node.val <= 5000
 */

import { MyLinkedList } from "./MyLinkedList.js";

/**
 * 迭代法：使用两个相邻指针，一个指向head，一个指向head前一个节点prev，每次循环先保存head
 * 后一个节点next，然后反转head的next指针指向preｖ，最后prev和head同时向前走一步．
 */
var reverseList = function(head) {
    let prev = null;
    let next = null;
    while (head) {
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}

let nums = [1,2,3,4,5];
console.log('nums: ' + nums);
let list = new MyLinkedList();
for (let num of nums) {
    list.addAtTail(num);
}
list.visit();
let head = reverseList(list.head);
let list2 = new MyLinkedList(head);
list2.visit();
