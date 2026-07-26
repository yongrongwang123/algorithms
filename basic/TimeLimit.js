/**
 * Given an asynchronous function fn and a time t in milliseconds, return a new
 * time limited version of the input function. fn takes arguments provided to the
 * time limited function. The time limited function should follow these rules:
 *  - If the fn completes within the time limit of t milliseconds, the time limited
 *    function should resolve with the result.
 *  - If the execution of the fn exceeds the time limit, the time limited function
 *    should reject with the string "Time Limit Exceeded".
 * 
 * Example 1:
 * Input: 
 * fn = async (n) => { 
 *   await new Promise(res => setTimeout(res, 100)); 
 *   return n * n; 
 * }
 * inputs = [5]
 * t = 50
 * Output: {"rejected":"Time Limit Exceeded","time":50}
 * Explanation:
 * const limited = timeLimit(fn, t)
 * const start = performance.now()
 * let result;
 * try {
 *    const res = await limited(...inputs)
 *    result = {"resolved": res, "time": Math.floor(performance.now() - start)};
 * } catch (err) {
 *    result = {"rejected": err, "time": Math.floor(performance.now() - start)};
 * }
 * console.log(result) // Output
 * The provided function is set to resolve after 100ms. However, the time limit
 * is set to 50ms. It rejects at t=50ms because the time limit was reached.
 * 
 * Constraints:
 * 0 <= inputs.length <= 10
 * 0 <= t <= 1000
 * fn returns a promise
 */

var timeLimit = function(fn, t) {
    return async (...args) => {
        let promise1 = fn(...args);
        let promise2 = new Promise((_, reject) => 
            setTimeout(reject, t, 'Time Limit Exceeded'));
        return Promise.race([promise1, promise2]);
    }
};

var main = function() {
    let fn = async n => {
        await new Promise(resolve => setTimeout(resolve, 100));
        return n * n;
    }
    let t = 50;
    let limited = timeLimit(fn, t);
    let input = [5];
    limited(...input).then(console.log).catch(console.log);
};

main();
