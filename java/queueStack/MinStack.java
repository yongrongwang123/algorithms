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

package queueStack;

import java.util.ArrayList;
import java.util.List;
import java.util.Arrays;

public class MinStack {
    List<Integer> data = new ArrayList<>();
    int min = Integer.MAX_VALUE;

    public static void main(String[] args) {
        int[] arr = {-2,0,3};
        MinStack stack = new MinStack();
        System.out.println("push: " + arr[0]);
        stack.push(arr[0]);
        System.out.println("push: " + arr[1]);
        stack.push(arr[1]);
        System.out.println("push: " + arr[2]);
        stack.push(arr[2]);
        System.out.println("get min: " + stack.getMin());
        System.out.println("pop: ");
        stack.pop();
        System.out.println("top: " + stack.top());
        System.out.println("get min: " + stack.getMin());
    }

    public MinStack() {}

    /**
     * 如果小于等于上一个最小值，就先压入上一个最小值，再压入当前最小值，并且更新最小值
     */
    public void push(int value) {
        if (value <= min) {
            data.add(min);
            min = value;
        }
        data.add(value);
    }

    /**
     * 如果等于当前最小值，就先弹出当前最小值，再弹出上一个最小值，并且更新最小值
     */
    public void pop() {
        if (data.removeLast() == min) {
            min = data.removeLast();
        }
    }

    public int top() {
        return data.getLast();
    }

    public int getMin() {
        return min;
    }
}
