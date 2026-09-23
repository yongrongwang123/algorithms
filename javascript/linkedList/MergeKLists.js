/**
 * 23. Merge k Sorted Lists
 *
 * You are given an array of k linked-lists lists, each linked-list is sorted in
 * ascending order. Merge all the linked-lists into one sorted linked-list and
 * return it.
 * 
 * Example 1:
 * Input: lists = [[1,4,5],[1,3,4],[2,6]]
 * Output: [1,1,2,3,4,4,5,6]
 * Explanation: The linked-lists are:
 * 1->4->5,
 * 1->3->4,
 * 2->6,
 * merging them into one sorted linked list:
 * 1->1->2->3->4->4->5->6
 * 
 * Constraints:
 * k == lists.length
 * 0 <= k <= 10^4
 * 0 <= lists[i].length <= 500
 * -10^4 <= lists[i][j] <= 10^4
 * lists[i] is sorted in ascending order.
 * The sum of lists[i].length will not exceed 10^4.
 */
import { MyLinkedList } from './MyLinkedList.js';
import { ListNode } from './ListNode.js';

var mergeKLists = function(lists) {
    if (lists.length == 0) {
        return null;
    }
    return mergek(lists, 0, lists.length - 1);
};

/**
 * 类似归并排序的分解步骤
 */
var mergek = function(lists, left, right) {
    if (left >= right) {
        return lists[left];
    }
    let mid = left + Math.floor((right - left) / 2);
    let list1 = mergek(lists, left, mid);
    let list2 = mergek(lists, mid + 1, right);
    return merge(list1, list2);
};

/**
 * 合并两个有序链表
 */
var merge = function(list1, list2) {
    if (!list2) {
        return list1;
    }
    let dummy = new ListNode(0, list1);
    let next = null;
    for (list1 = dummy; list1.next; list1 = list1.next) {
        if (list1.next.val > list2.val) {
            next = list1.next;
            list1.next = list2;
            list2 = next;
        }
    }
    list1.next = list2;
    return dummy.next;
};

var main = function() {
    let arrs = [[1,4,5],[1,3,4],[2,6]];
    let lists = new Array(arrs.length);
    for (let i = 0; i < arrs.length; i++) {
        let list1 = new MyLinkedList();
        for (let num of arrs[i]) {
            list1.addAtTail(num);
        }
        lists[i] = list1.head;
        list1.visit();
    }
    let list2 = new MyLinkedList(mergeKLists(lists));
    list2.visit();
};

main();
