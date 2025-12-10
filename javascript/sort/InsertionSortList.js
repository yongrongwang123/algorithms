/**
 * Given the head of a singly linked list, sort the list using insertion sort, and
 * return the sorted list's head.
 * The steps of the insertion sort algorithm:
 * 1. Insertion sort iterates, consuming one input element each repetition and growing
 *    a sorted output list.
 * 2. At each iteration, insertion sort removes one element from the input data,
 *    finds the location it belongs within the sorted list and inserts it there.
 * 3. It repeats until no input elements remain.
 *
 * Example 1:
 * Input: head = [4,2,1,3]
 * Output: [1,2,3,4]
 *
 * Constraints:
 * The number of nodes in the list is in the range [1, 5000].
 * -5000 <= Node.val <= 5000
 */

var ListNode = function(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

/**
 * 因为可能要在 head 节点之前插入节点，所以引入 helper 节点，从 head 节点开始遍历
 * 原来的链表，每次遇到一个节点，就遍历已经排好序的新链表，在新链表中查找合适的
 * 插入位置，最后将节点插入新链表。
 */
var insertionSortList = function(head) {
    let helper = new ListNode(0);
    let cur = head;

    while (cur != null) {
        let pre = helper;
        for (; pre.next != null; pre = pre.next) {
            if (pre.next.val >= cur.val) {
                break;
            }
        }
        let next = cur.next;
        cur.next = pre.next;
        pre.next = cur;
        cur = next;
    }

    return helper.next;
}

var create = function(vals) {
    let helper = new ListNode(0);
    let pre = helper;

    for (let val of vals) {
        let cur = new ListNode(val);
        pre.next = cur;
        pre = cur;
    }

    return helper.next;
}

var visit = function(head) {
    let str = '';
    for (let cur = head; cur != null; cur = cur.next) {
        let split = (cur.next == null ? '' : '->');
        str += cur.val + split;
    }
    console.log(str);
}

let vals = [4,2,1,3];
let head = create(vals);
visit(head);
visit(insertionSortList(head));
