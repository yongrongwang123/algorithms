import { MyLinkedList } from './MyLinkedList.js';

var MyCycle = function(list) {
    this.list = list;
}

MyCycle.prototype.createCycle = function(nums, pos) {
    for (let num of nums) {
        this.list.addAtTail(num);
    }
    if (nums.length <= 1 || pos < 0 || pos >= nums.length - 1) {
        return;
    }
    let node1 = this.list.head;
    for (; node1.next; node1 = node1.next) {}
    let node2 = this.list.head;
    for (let i = 0; i < nums.length; i++) {
        if (i == pos) {
            node1.next = node2;
            return;
        }
        node2 = node2.next;
    }
}

MyCycle.prototype.visitCycle = function() {
    let cur = this.list.head;
    let size = this.list.size;
    let str = '';
    for (let i = 0; i < size; i++) {
        str += cur.val + (i != size - 1 ? ' -> ' : '');
        cur = cur.next;
    }
    console.log(str);
}

export { MyCycle };
