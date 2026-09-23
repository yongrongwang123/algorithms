/**
 * 25. Reverse Nodes in k-Group
 *
 * Given the head of a linked list, reverse the nodes of the list k at a time, and
 * return the modified list. k is a positive integer and is less than or equal to
 * the length of the linked list. If the number of nodes is not a multiple of k then
 * left-out nodes, in the end, should remain as it is. You may not alter the values
 * in the list's nodes, only nodes themselves may be changed.
 * 
 * Example 1:
 * Input: head = [1,2,3,4,5], k = 2
 * Output: [2,1,4,3,5]
 * 
 * Constraints:
 * The number of nodes in the list is n.
 * 1 <= k <= n <= 5000
 * 0 <= Node.val <= 1000
 */
import { MyLinkedList } from './MyLinkedList.js';
import { ListNode } from './ListNode.js';

/**
 * 分成 k 个一组，满足 k 个的组反转内部顺序，不满足 k 个的组内部顺序不变，难点是
 * 组和组之间的连接，虚拟头节点可以方便连接第一组
 */
var reverseKGroup = function(head, k) {
    let dummy = new ListNode(0, head);
    let start = dummy;
    let end = head;
    while (true) {
        for (let i = 0; i < k; i++) {
            if (!end) {
                return dummy.next;
            }
            end = end.next;
        }
        reverse(start, end);
        start = head;
        head = end;
    }
};

/**
 * 反转 (start, end) 之间的链表并且插入到 start 和 end 之间
 */
var reverse = function(start, end) {
    let pre = end;
    let next = null;
    for (let cur = start.next; cur != end; cur = next) {
        next = cur.next;
        cur.next = pre;
        pre = cur;
    }
    start.next = pre;
};

var main = function() {
    let nums = [1,2,3,4,5];
    let k = 2;
    console.log('k: ' + k);
    let list1 = new MyLinkedList();
    for (let num of nums) {
        list1.addAtTail(num);
    }
    list1.visit();
    let list2 = new MyLinkedList(reverseKGroup(list1.head, k));
    list2.visit();
};

main();
