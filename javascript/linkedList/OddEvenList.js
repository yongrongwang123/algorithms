/**
 * Given the head of a singly linked list, group all the nodes with odd indices
 * together followed by the nodes with even indices, and return the reordered list.
 * The first node is considered odd, and the second node is even, and so on.
 * Note that the relative order inside both the even and odd groups should remain
 * as it was in the input. You must solve the problem in O(1) extra space complexity
 * and O(n) time complexity.
 *
 * Example 1:
 * Input: head = [1,2,3,4,5]
 * Output: [1,3,5,2,4]
 *
 * Constraints:
 * n == number of nodes in the linked list
 * 0 <= n <= 10^4
 * -10^6 <= Node.val <= 10^6
 */

import { MyLinkedList } from "./MyLinkedList.js";

/**
 * 使用两个指针，一个用来连接所有的奇数节点，一个用来连接所有的偶数节点，最后拼接奇数节点链表
 * 和偶数节点链表
 */
var oddEvenList = function(head) {
    if (!head) {
        return null;
    }
    let head2 = head.next;
    let odd = head;
    let even = head.next;
    for (; even && even.next; odd = odd.next, even = even.next) {
        odd.next = odd.next.next;
        even.next = even.next.next;
    }
    odd.next = head2;
    return head;
}

let nums = [1,2,3,4,5];
console.log('nums: ' + nums);
let list = new MyLinkedList();
for (let num of nums) {
    list.addAtTail(num);
}
list.visit();
let head = oddEvenList(list.head);
let list2 = new MyLinkedList(head);
list2.visit();
