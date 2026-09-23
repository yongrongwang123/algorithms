/**
 * 138. Copy List with Random Pointer
 *
 * A linked list of length n is given such that each node contains an additional
 * random pointer, which could point to any node in the list, or null.
 * Construct a deep copy of the list. The deep copy should consist of exactly n
 * brand new nodes, where each new node has its value set to the value of its
 * corresponding original node. Both the next and random pointer of the new nodes
 * should point to new nodes in the copied list such that the pointers in the original
 * list and copied list represent the same list state. None of the pointers in the
 * new list should point to nodes in the original list.
 * For example, if there are two nodes X and Y in the original list, where X.random --> Y,
 * then for the corresponding two nodes x and y in the copied list, x.random --> y.
 * Return the head of the copied linked list.
 * The linked list is represented in the input/output as a list of n nodes. Each
 * node is represented as a pair of [val, random_index] where:
 *  - val: an integer representing Node.val
 *  - random_index: the index of the node (range from 0 to n-1) that the random pointer
 *    points to, or null if it does not point to any node.
 * Your code will only be given the head of the original linked list.
 *
 * Example 1:
 * Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
 * Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]
 *
 * Constraints:
 * 0 <= n <= 1000
 * -10^4 <= Node.val <= 10^4
 * Node.random is null or is pointing to some node in the linked list.
 */

import { ListNode } from './ListNode.js';
import { MyLinkedList } from './MyLinkedList.js';

var visit = function(head) {
    let str = '';
    for (let cur = head; cur; cur = cur.next) {
        str += cur.val + ": " + (!cur.random ? null : cur.random.val) +
            (cur.next ? ' -> ' : '');
    }
    console.log(str);
}

var createList = function(nums) {
    let map = new Map();
    let dummy = new ListNode(0);
    let cur = dummy;
    for (let i = 0; i < nums.length; i++) {
        cur.next = new ListNode(nums[i][0]);
        cur = cur.next;
        map.set(i, cur);
    }
    cur = dummy.next;
    for (let i = 0; i < nums.length; i++) {
        cur.random = map.get(nums[i][1]);
        cur = cur.next;
    }
    return dummy.next;
}

/**
 * 1.在原来的链表的每个节点后面复制一个相同值的节点
 * 2.通过原来的链表结构构造新的节点的random指针
 * 3.抽取新构造的链表和原来的链表
 */
var copyRandomList = function(head) {
    if (!head) {
        return null;
    }
    for (let cur = head; cur; cur = cur.next.next) {
        cur.next = new ListNode(cur.val, cur.next);
    }
    for (let cur = head; cur; cur = cur.next.next) {
        cur.next.random = cur.random?.next;
    }
    let head2 = head.next;
    let next = null;
    for (let cur = head; cur && cur.next; cur = next) {
        next = cur.next;
        cur.next = cur.next.next;
    }
    return head2;
}

var main = function() {
    let nums = [[7,null],[13,0],[11,4],[10,2],[1,0]];
    let head = createList(nums);
    visit(head);
    head = copyRandomList(head);
    visit(head);
}

main();
