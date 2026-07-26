/**
 * Given an array of asynchronous functions functions, return a new promise promise.
 * Each function in the array accepts no arguments and returns a promise. All the
 * promises should be executed in parallel.
 * promise resolves:
 *  - When all the promises returned from functions were resolved successfully in
 *    parallel. The resolved value of promise should be an array of all the resolved
 *    values of promises in the same order as they were in the functions. The promise
 *    should resolve when all the asynchronous functions in the array have completed
 *    execution in parallel.
 * promise rejects:
 *  - When any of the promises returned from functions were rejected. promise should
 *    also reject with the reason of the first rejection.
 *    Please solve it without using the built-in Promise.all function.
 * 
 * Example 1:
 * Input: functions = [() => new Promise(resolve => setTimeout(() => resolve(5), 200))]
 * Output: {"t": 200, "resolved": [5]}
 * Explanation: 
 * promiseAll(functions).then(console.log); // [5]
 * The single function was resolved at 200ms with a value of 5.
 * 
 * Constraints:
 * functions is an array of functions that returns promises
 * 1 <= functions.length <= 10
 */

var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        let n = functions.length;
        let results = new Array(n);
        let j = 0;
        for (let i = 0; i < n; i++) {
            functions[i]()
                .then(result => {
                    results[i] = result;
                    j++;
                    if (j == n) {
                        resolve(results);
                    }
                })
                .catch(reject);
        }
    });
};

var main = function() {
    let start = Date.now();
    let timer = () => Date.now() - start;
    let functions = [() => new Promise(resolve => setTimeout(() => resolve(4), 50)), 
                     () => new Promise(resolve => setTimeout(() => resolve(10), 150)), 
                     () => new Promise(resolve => setTimeout(() => resolve(16), 100))];
    promiseAll(functions).then(val => console.log('output: ' + val + ', time: ' + timer()));
};

main();
