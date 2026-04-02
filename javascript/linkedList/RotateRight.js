/**
 * 61. Rotate List
 *
 * Given the head of a linked list, rotate the list to the right by k places.
 *
 * Example 1:
 * Input: head = [1,2,3,4,5], k = 2
 * Output: [4,5,1,2,3]
 *
 * Constraints:
 * The number of nodes in the list is in the range [0, 500].
 * -100 <= Node.val <= 100
 * 0 <= k <= 2 * 10^9
 */

import { MyLinkedList } from './MyLinkedList.js';

/**
 * 首先计算出链表中节点个数 size，然后将链表首尾相连成环状，再从尾节点往前走 size-k%size
 * 步，最后断开环状链表
 */
var rotateRight = function(head, k) {
    if (!head) {
        return null;
    }
    let cur = head;
    let size = 1;
    for (; cur.next; cur = cur.next) {
        size++;
    }
    cur.next = head;
    for (let i = 0; i < size - k % size; i++) {
        cur = cur.next;
    }
    head = cur.next;
    cur.next = null;
    return head;
}

var main = function() {
    let nums = [1,2,3,4,5];
    let k = 2;
    console.log('k: ' + k);
    let list1 = new MyLinkedList();
    for (let num of nums) {
        list1.addAtTail(num);
    }
    list1.visit();
    let list2 = new MyLinkedList(rotateRight(list1.head, k));
    list2.visit();
}

main();
