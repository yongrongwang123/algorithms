/**
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
 * -10000 <= Node.val <= 10000
 * Node.random is null or is pointing to some node in the linked list.
 */

import { MyLinkedList } from "./MyLinkedList.js";

var _Node = function(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
}

var createList = function(nums) {
    if (nums.length == 0) {
        return null;
    }

    let head = new _Node(nums[0][0]);
    let cur = head;
    for (let i = 1; i < nums.length; i++) {
        cur.next = new _Node(nums[i][0]);
        cur = cur.next;
    }
    cur = head;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i][1]) {
            let random = head;
            for (let j = 0; j < nums[i][1]; j++) {
                random = random.next;
            }
            cur.random = random;
        }
        cur = cur.next;
    }

    return head;
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
        let node = new _Node(cur.val);
        node.next = cur.next;
        cur.next = node;
    }
    for (let cur = head; cur && cur.next; cur = cur.next.next) {
        if (cur.random) {
            cur.next.random = cur.random.next;
        }
    }
    let newHead = head.next;
    for (let cur = head; cur && cur.next; cur = cur.next) {
        let next = cur.next;
        cur.next = cur.next.next;
        if (next.next) {
            next.next = next.next.next;
        }
    }
    
    return newHead;
}

let nums = [[7,null],[13,0],[11,4],[10,2],[1,0]];
let str = '';
for (let num of nums) {
    str += num[0] + ':' + (num[1] != null ? num[1] : 'N') + ' ';
}
console.log(str);
let head = createList(nums);
let newHead = copyRandomList(head);
let list = new MyLinkedList(newHead);
list.visit();
