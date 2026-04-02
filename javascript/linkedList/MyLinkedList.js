/**
 * 707. Design Linked List
 *
 * Design your implementation of the linked list. You can choose to use a singly
 * or doubly linked list. A node in a singly linked list should have two attributes:
 * val and next. val is the value of the current node, and next is a pointer/reference
 * to the next node. If you want to use the doubly linked list, you will need one
 * more attribute prev to indicate the previous node in the linked list. Assume
 * all nodes in the linked list are 0-indexed.
 * Implement the MyLinkedList class:
 *   - MyLinkedList() Initializes the MyLinkedList object.
 *   - int get(int index) Get the value of the indexth node in the linked list. If
 *     the index is invalid, return -1.
 *   - void addAtHead(int val) Add a node of value val before the first element of
 *     the linked list. After the insertion, the new node will be the first node of
 *     the linked list.
 *   - void addAtTail(int val) Append a node of value val as the last element of the
 *     linked list.
 *   - void addAtIndex(int index, int val) Add a node of value val before the indexth
 *     node in the linked list. If index equals the length of the linked list, the
 *     node will be appended to the end of the linked list. If index is greater than
 *     the length, the node will not be inserted.
 *   - void deleteAtIndex(int index) Delete the indexth node in the linked list,
 *     if the index is valid.
 *
 * Example 1:
 * Input
 * ["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
 * [[], [1], [3], [1, 2], [1], [1], [1]]
 * Output
 * [null, null, null, null, 2, null, 3]
 * Explanation
 * MyLinkedList myLinkedList = new MyLinkedList();
 * myLinkedList.addAtHead(1);
 * myLinkedList.addAtTail(3);
 * myLinkedList.addAtIndex(1, 2);    // linked list becomes 1->2->3
 * myLinkedList.get(1);              // return 2
 * myLinkedList.deleteAtIndex(1);    // now the linked list is 1->3
 * myLinkedList.get(1);              // return 3
 *
 * Constraints:
 * 0 <= index, val <= 1000
 * Please do not use the built-in LinkedList library.
 * At most 2000 calls will be made to get, addAtHead, addAtTail, addAtIndex and
 * deleteAtIndex.
 */
import { ListNode } from './ListNode.js';

var MyLinkedList = function(head) {
    if (!head) {
        this.size = 0;
        this.head = null;
    } else {
        this.head = head;
        this.size = this.calcSize();
    }
}

MyLinkedList.prototype.get = function(index) {
    if (index >= this.size) {
        return -1;
    }
    let cur = this.head;
    for (let i = 0; i < index; i++) {
        cur = cur.next;
    }
    return cur.val;
}

MyLinkedList.prototype.addAtHead = function(val) {
    let node = new ListNode(val);
    node.next = this.head;
    this.head = node;
    this.size++;
}

MyLinkedList.prototype.addAtTail = function(val) {
    let node = new ListNode(val);
    if (!this.head) {
        this.head = node;
    } else {
        let cur = this.head;
        for (; cur.next; cur = cur.next) {}
        cur.next = node;
    }
    this.size++;
}

MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index > this.size) {
        return;
    } 
    if (!index) {
        this.addAtHead(val);
    } else {
        let node = new ListNode(val);
        let cur = this.head;
        for (let i = 0; i < index - 1; i++) {
            cur = cur.next;
        }
        node.next = cur.next;
        cur.next = node;
        this.size++;
    }
}

MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index >= this.size) {
        return;
    }
    if (!index) {
        this.head = this.head.next;
    } else {
        let cur = this.head;
        for (let i = 0; i < index - 1; i++) {
            cur = cur.next;
        }
        cur.next = cur.next.next;
    }
    this.size--;
}

MyLinkedList.prototype.addAtTailNode = function(node) {
    if (!this.head) {
        this.head = node;
    } else {
        let cur = this.head;
        for (; cur.next; cur = cur.next) {}
        cur.next = node;
    }
    this.size++;
}

MyLinkedList.prototype.calcSize = function() {
    let size = 0;
    for (let cur = this.head; cur; cur = cur.next) {
        size++;
    }
    return size;
}

MyLinkedList.prototype.visit = function() {
    let str = '';
    for (let cur = this.head; cur; cur = cur.next) {
        str += cur.val + (cur.next ? ' -> ' : '');
    }
    console.log(str);
}

var main = function() {
    let arr = [1, 3, 2];
    let list = new MyLinkedList();
    let index = 1;
    console.log('add head: ' + arr[0]);
    list.addAtHead(arr[0]);
    list.visit();
    console.log('add tail: ' + arr[1]);
    list.addAtTail(arr[1]);
    list.visit();
    console.log('add ' + index + ': ' + arr[2]);
    list.addAtIndex(index, arr[2]);
    list.visit();
    console.log('get ' + index + ': ' + list.get(index));
    console.log('delete ' + index);
    list.deleteAtIndex(index);
    list.visit();
    console.log('get ' + index + ': ' + list.get(index));
}

// main();

export { MyLinkedList };
