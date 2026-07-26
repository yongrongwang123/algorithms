/**
 * Given a function fn and a time in milliseconds t, return a debounced version
 * of that function. A debounced function is a function whose execution is delayed
 * by t milliseconds and whose execution is cancelled if it is called again within
 * that window of time. The debounced function should also receive the passed parameters.
 * For example, let's say t = 50ms, and the function was called at 30ms, 60ms, and
 * 100ms. The first 2 function calls would be cancelled, and the 3rd function call
 * would be executed at 150ms. If instead t = 35ms, The 1st call would be cancelled,
 * the 2nd would be executed at 95ms, and the 3rd would be executed at 135ms. The
 * above diagram shows how debounce will transform events. Each rectangle represents
 * 100ms and the debounce time is 400ms. Each color represents a different set of
 * inputs. Please solve it without using lodash's _.debounce() function.
 * 
 * Example 1:
 * Input: 
 * t = 50
 * calls = [{"t": 50, inputs: [1]}, {"t": 75, inputs: [2]}]
 * Output: [{"t": 125, inputs: [2]}]
 * Explanation:
 * let start = Date.now();
 * function log(...inputs) { 
 *   console.log([Date.now() - start, inputs ])
 * }
 * const dlog = debounce(log, 50);
 * setTimeout(() => dlog(1), 50);
 * setTimeout(() => dlog(2), 75);
 * The 1st call is cancelled by the 2nd call because the 2nd call occurred before 100ms
 * The 2nd call is delayed by 50ms and executed at 125ms. The inputs were (2).
 * 
 * Constraints:
 * 0 <= t <= 1000
 * 1 <= calls.length <= 10
 * 0 <= calls[i].t <= 1000
 * 0 <= calls[i].inputs.length <= 10
 */

var debounce = function(fn, t) {
    let timer = null;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(fn, t, ...args);
    };
};

var main = function() {
    let start = Date.now();
    let timer = () => Date.now() - start;
    let fn = (...inputs) => console.log('inputs: ' + inputs + ', time: ' + timer());
    let t = 50;
    let dfn = debounce(fn, t);
    setTimeout(dfn, 50, 1);
    setTimeout(dfn, 75, 2);
};

main();
