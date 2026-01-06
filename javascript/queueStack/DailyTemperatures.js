/**
 * Given an array of integers temperatures represents the daily temperatures, return 
 * an array answer such that answer[i] is the number of days you have to wait after 
 * the ith day to get a warmer temperature. If there is no future day for which 
 * this is possible, keep answer[i] == 0 instead.
 * 
 * Example 1:
 * Input: temperatures = [73,74,75,71,69,72,76,73]
 * Output: [1,1,4,2,1,1,0,0]
 * 
 * Constraints:
 * 1 <= temperatures.length <= 10^5
 * 30 <= temperatures[i] <= 100
 */

/**
 * 遍历数组中每一个元素，如果当前元素比栈顶数据作为索引的元素要大，则弹出栈顶数据并且求出索引差值，
 * 然后再将当前元素所在索引压入栈中
 */
var dailyTemperatures = function(temperatures) {
    let answers = new Array(temperatures.length).fill(0);
    let stack = [];

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length != 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let index = stack.pop();
            answers[index] = i - index;
        }
        stack.push(i);
    }

    return answers;
}

let temperatures = [73,74,75,71,69,72,76,73];
console.log('input array: ' + temperatures);
console.log('answers: ' + dailyTemperatures(temperatures));
