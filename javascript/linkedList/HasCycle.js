/**
 * Given head, the head of a linked list, determine if the linked list has a cycle
 * in it. There is a cycle in a linked list if there is some node in the list that
 * can be reached again by continuously following the next pointer. Internally,
 * pos is used to denote the index of the node that node1's next pointer is connected
 * to. Note that pos is not passed as a parameter. Return true if there is a cycle
 * in the linked list. Otherwise, return false.
 *
 * Example 1:
 * Input: head = [3,2,0,-4], pos = 1
 * Output: true
 * Explanation: There is a cycle in the linked list, where the node1 connects to
 * the 1st node (0-indexed).
 *
 * Constraints:
 * The number of the nodes in the list is in the range [0, 10^4].
 * -10^5 <= Node.val <= 10^5
 * pos is -1 or a valid index in the linked-list.
 */

import { MyCycle } from "./MyLinkedList.js";

/**
 * 使用一个快指针和一个慢指针同时遍历链表，如果快指针和慢指针相遇了，则说明有环路，否则没有环路
 */
var hasCycle = function(head) {
    let fast = head;
    let slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast == slow) {
            return true;
        }
    }
    return false;
}

let nums = [3,2,0,-4];
let pos = 1;
console.log('head: ' + nums);
console.log('pos: ' + pos);
let cycle = new MyCycle();
let list = cycle.createCycle(nums, pos);
cycle.visitCycle(list, list.size);
console.log('cycle: ' + hasCycle(list.head));
