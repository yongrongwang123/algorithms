/**
 * Implement a first in first out (FIFO) queue using only two stacks. The implemented 
 * queue should support all the functions of a normal queue (push, peek, pop, and empty).
 * Implement the MyQueue class:
 * - void push(int x) Pushes element x to the back of the queue.
 * - int pop() Removes the element from the front of the queue and returns it.
 * - int peek() Returns the element at the front of the queue.
 * - boolean empty() Returns true if the queue is empty, false otherwise.
 * Notes:
 * - You must use only standard operations of a stack, which means only push to top, 
 *   peek/pop from top, size, and isempty operations are valid.
 * - Depending on your language, the stack may not be supported natively. You may 
 * 	 simulate a stack using a list or deque (double-ended queue) as long as you use 
 * 	 only a stack's standard operations.
 *   
 * Example 1:
 * Input
 * ["MyQueue", "push", "push", "peek", "pop", "empty"]
 * [[], [1], [2], [], [], []]
 * Output
 * [null, null, null, 1, 1, false]
 * Explanation
 * MyQueue myQueue = new MyQueue();
 * myQueue.push(1); // queue is: [1]
 * myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
 * myQueue.peek(); // return 1
 * myQueue.pop(); // return 1, queue is [2]
 * myQueue.empty(); // return false
 * 
 * Constraints:
 * 1 <= x <= 9
 * At most 100 calls will be made to push, pop, peek, and empty.
 * All the calls to pop and peek are valid.
 */

var MyQueue = function() {
    this.input = [];
    this.output = [];
}

MyQueue.prototype.push = function(x) {
    this.input.push(x);
}

MyQueue.prototype.pop = function() {
    this.reverse();
    return this.output.pop();
}

MyQueue.prototype.peek = function() {
    this.reverse();
    return this.output[this.output.length - 1];
}

MyQueue.prototype.empty = function() {
    return this.input.length == 0 && this.output.length == 0;
}

MyQueue.prototype.reverse = function() {
    if (this.output.length == 0) {
        while (this.input.length != 0) {
            this.output.push(this.input.pop());
        }
    }
}

let arr = [1,2];
console.log('input array: ' + arr);
let queue = new MyQueue();
console.log('push: ' + queue.push(arr[0]));
console.log('push: ' + queue.push(arr[1]));
console.log('peek: ' + queue.peek());
console.log('pop: ' + queue.pop());
console.log('empty: ' + queue.empty());
