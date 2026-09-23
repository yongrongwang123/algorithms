/**
 * 155. Min Stack
 *
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

var MinStack = function() {
    this.data = [];
    this.min = 2147483647;
}

/**
 * 如果小于等于上一个最小值，就先压入上一个最小值，再压入当前最小值，并且更新最小值
 */
MinStack.prototype.push = function(value) {
    if (value <= this.min) {
        this.data.push(this.min);
        this.min = value;
    }
    this.data.push(value);
}

/**
 * 如果等于当前最小值，就先弹出当前最小值，再弹出上一个最小值，并且更新最小值
 */
MinStack.prototype.pop = function() {
    if (this.data.pop() == this.min) {
        this.min = this.data.pop();
    }
}

MinStack.prototype.top = function() {
    return this.data.at(-1);
}

MinStack.prototype.getMin = function() {
    return this.min;
}

var main = function() {
    let arr = [-2,0,3];
    let stack = new MinStack();
    console.log('push: ' + arr[0]);
    stack.push(arr[0]);
    console.log('push: ' + arr[1]);
    stack.push(arr[1]);
    console.log('push: ' + arr[2]);
    stack.push(arr[2]);
    console.log('get min: ' + stack.getMin());
    console.log('pop: ');
    stack.pop();
    console.log('top: ' + stack.top());
    console.log('get min: ' + stack.getMin());
}

main();
