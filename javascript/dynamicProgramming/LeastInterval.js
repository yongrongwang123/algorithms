/**
 * You are given an array of CPU tasks, each labeled with a letter from A to Z,
 * and a number n. Each CPU interval can be idle or allow the completion of one
 * task. Tasks can be completed in any order, but there's a constraint: there has
 * to be a gap of at least n intervals between two tasks with the same label. Return
 * the minimum number of CPU intervals required to complete all tasks.
 * 
 * Example 1:
 * Input: tasks = ["A","A","A","B","B","B"], n = 2
 * Output: 8
 * Explanation: A possible sequence is: A -> B -> idle -> A -> B -> idle -> A -> B.
 * After completing task A, you must wait two intervals before doing A again. The
 * same applies to task B. In the 3rd interval, neither A nor B can be done, so
 * you idle. By the 4th interval, you can do A again as 2 intervals have passed.
 * 
 * Constraints:
 * 1 <= tasks.length <= 10^4
 * tasks[i] is an uppercase English letter.
 * 0 <= n <= 100
 */

/**
 * 用贪心算法，将出现次数最多的任务依次放到每个时间间隔，然后在剩下的任务中重复
 * 之前的操作直到放好所有的任务，因为任务最多出现次数比时间间隔多一个，最后在末
 * 尾放多出来的那一个
 */
var leastInterval = function(tasks, n) {
    let freqs = new Array(26).fill(0);
    let max = 0;
    let a = 'A'.charCodeAt(0);
    for (let task of tasks) {
        freqs[task.charCodeAt(0) - a]++;
        let freq = freqs[task.charCodeAt(0) - a];
        max = (max >= freq ? max : freq);
    }
    let intervals = (max - 1) * (n + 1);
    for (let freq of freqs) {
        intervals += (freq == max ? 1 : 0);
    }
    return tasks.length >= intervals ? tasks.length : intervals;
}

var main = function() {
    let tasks = ["A","A","A","B","B","B"];
    let n = 2;
    console.log('tasks: ' + tasks);
    console.log('n: ' + n);
    console.log('interval: ' + leastInterval(tasks, n));
}

main();
