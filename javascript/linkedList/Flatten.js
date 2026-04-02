/**
 * 430. Flatten a Multilevel Doubly Linked List
 *
 * You are given a doubly linked list, which contains nodes that have a next pointer,
 * a previous pointer, and an additional child pointer. This child pointer may or
 * may not point to a separate doubly linked list, also containing these special
 * nodes. These child lists may have one or more children of their own, and so on,
 * to produce a multilevel data structure as shown in the example below. Given the
 * head of the first level of the list, flatten the list so that all the nodes appear
 * in a single-level, doubly linked list. Let curr be a node with a child list. The
 * nodes in the child list should appear after curr and before curr.next in the
 * flattened list. Return the head of the flattened list. The nodes in the list must
 * have all of their child pointers set to null.
 *
 * Example 1:
 * Input: head = [1,2,null,3]
 * Output: [1,3,2]
 * Explanation: The multilevel linked list in the input is shown. 
 * After flattening the multilevel linked list it becomes:
 * 1---2---NULL
 * |
 * 3---NULL
 *
 * Constraints:
 * The number of Nodes will not exceed 1000.
 * 1 <= Node.val <= 10^5
 */

import { ListNode } from './ListNode.js';
import { MyLinkedList } from './MyLinkedList.js';

var visit = function(head) {
    let str = '';
    for (let cur = head; cur; cur = cur.next) {
        str += cur.val + (cur.next ? ' <-> ' : '');
    }
    console.log(str);
}

var createList = function(nums) {
    if (!nums.length) {
        return null;
    }
    let head = new ListNode(nums[0]);
    let cur = head;
    let t = cur;
    for (let i = 0; i < nums.length;) {
        if (nums[i]) {
            if (++i == nums.length || !nums[i]) {
                cur.next = null;
            } else {
                cur.next = new ListNode(nums[i]);
            }
            cur.child = null;
            cur = cur.next;
        } else {
            for (i += 1; !nums[i]; i++) {
                t = t.next;
            }
            cur = new ListNode(nums[i]);
            t.child = cur;
            t = cur;
        }
    }
    return head;
}

/**
 * 依次遍历每一个节点
 * 1.如果当前节点没有子节点，继续前进；
 * 2.如果当前节点有子节点，找到子节点所在层的尾节点，然后将尾节点和当前节点下一个节点连接，
 * 再将当前节点和子节点连接
 */
var flatten = function(head) {
    if (!head) {
        return null;
    }
    for (let cur = head; cur;) {
        if (!cur.child) {
            cur = cur.next;
            continue;
        }
        let tail = cur.child;
        for (; tail.next; tail = tail.next) {}
        tail.next = cur.next;
        if (cur.next) {
            cur.next.prev = tail;
        }
        cur.next = cur.child;
        cur.child.prev = cur;
        cur.child = null;
    }
    return head;
}

var main = function() {
    let nums = [1,2,null,3];
    let head = createList(nums);
    visit(flatten(head));
}

main();
