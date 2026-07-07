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

package dynamicProgramming;

import arrays.ArrayUtils;

class LeastInterval {

    public static void main(String[] args) {
        char[] tasks = {'A','A','A','B','B','B'};
        int n = 2;
        ArrayUtils a = new ArrayUtils();
        a.printArray3(tasks);
        System.out.println("n: " + n);
        LeastInterval l = new LeastInterval();
        System.out.println("interval: " + l.leastInterval(tasks, n));
    }

    /**
     * 用贪心算法，将出现次数最多的任务依次放到每个时间间隔，然后在剩下的任务中重复
     * 之前的操作直到放好所有的任务，因为任务最多出现次数比时间间隔多一个，最后在末
     * 尾放多出来的那一个
     */
    public int leastInterval(char[] tasks, int n) {
        int[] freqs = new int[26];
        int max = 0;
        for (int task : tasks) {
            freqs[task - 'A']++;
            int freq = freqs[task - 'A'];
            max = (max >= freq ? max : freq);
        }
        int intervals = (max - 1) * (n + 1);
        for (int freq : freqs) {
            intervals += (freq == max ? 1 : 0);
        }
        return tasks.length >= intervals ? tasks.length : intervals;
    }

}
