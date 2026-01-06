/**
 * Design a stack that supports push, pop, top, and retrieving the minimum element 
 * in constant time.Implement the MinStack class:
 * - MinStack() initializes the stack object.
 * - void push(int val) pushes the element val onto the stack.
 * - void pop() removes the element on the top of the stack.
 * - int top() gets the top element of the stack.
 * - int getMin() retrieves the minimum element in the stack.
 * 
 * Example 1:
 * Input
 * ["MinStack","push","push","push","getMin","pop","top","getMin"]
 * [[],[-2],[0],[-3],[],[],[],[]]
 * Output
 * [null,null,null,null,-3,null,0,-2]
 * Explanation
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.getMin(); // return -3
 * minStack.pop();
 * minStack.top();    // return 0
 * minStack.getMin(); // return -2
 * 
 * Constraints:
 * -2^31 <= val <= 2^31 - 1
 * Methods pop, top and getMin operations will always be called on non-empty stacks.
 * At most 3 * 10^4 calls will be made to push, pop, top, and getMin.
 */

var Node = function(val, min) {
    this.val = val;
    this.min = min;
}

var MinStack = function() {
    this.data = [];
}

MinStack.prototype.push = function(val) {
    let min = val;
    if (this.data.length > 0) {
        let last = this.data[this.data.length - 1].min;
        min = (val >= last ? last : val);
    }
    this.data.push(new Node(val, min));
}

MinStack.prototype.pop = function() {
    this.data.pop();
}

MinStack.prototype.top = function() {
    return this.data[this.data.length - 1].val;
}

MinStack.prototype.getMin = function() {
    return this.data[this.data.length - 1].min;
}

let arr = [-2,0,3];
let obj = new MinStack();
console.log('push: ' + obj.push(arr[0]));
console.log('push: ' + obj.push(arr[1]));
console.log('push: ' + obj.push(arr[2]));
console.log('getMin: ' + obj.getMin());
console.log('pop: ' + obj.pop());
console.log('top: ' + obj.top());
console.log('getMin: ' + obj.getMin());
