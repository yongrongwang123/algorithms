/**
 * Write a class that allows getting and setting key-value pairs, however a time
 * until expiration is associated with each key. The class has three public methods:
 *  - set(key, value, duration): accepts an integer key, an integer value, and a
 *    duration in milliseconds. Once the duration has elapsed, the key should be
 *    inaccessible. The method should return true if the same un-expired key already
 *    exists and false otherwise. Both the value and duration should be overwritten
 *    if the key already exists.
 *  - get(key): if an un-expired key exists, it should return the associated value.
 *    Otherwise it should return -1.
 *  - count(): returns the count of un-expired keys.
 * 
 * Example 1:
 * Input: 
 * actions = ["TimeLimitedCache", "set", "get", "count", "get"]
 * values = [[], [1, 42, 100], [1], [], [1]]
 * timeDelays = [0, 0, 50, 50, 150]
 * Output: [null, false, 42, 1, -1]
 * Explanation:
 * At t=0, the cache is constructed. At t=0, a key-value pair (1: 42) is added with
 * a time limit of 100ms. The value doesn't exist so false is returned. At t=50,
 * key=1 is requested and the value of 42 is returned. At t=50, count() is called
 * and there is one active key in the cache. At t=100, key=1 expires. At t=150,
 * get(1) is called but -1 is returned because the cache is empty.
 * 
 * Constraints:
 * 0 <= key, value <= 10^9
 * 0 <= duration <= 1000
 * 1 <= actions.length <= 100
 * actions.length === values.length
 * actions.length === timeDelays.length
 * 0 <= timeDelays[i] <= 1450
 * actions[i] is one of "TimeLimitedCache", "set", "get" and "count"
 * First action is always "TimeLimitedCache" and must be executed immediately, with
 * a 0-millisecond delay
 */

var TimeLimitedCache = function() {
    this.cache = {};
};

TimeLimitedCache.prototype.set = function(key, value, duration) {
    let existed = !!this.cache[key];
    clearTimeout(this.cache[key]?.['timer']);
    this.cache[key] = {
        value,
        timer: setTimeout(() => delete this.cache[key], duration)
    }
    return existed;
};

TimeLimitedCache.prototype.get = function(key) {
    return this.cache[key]?.['value'] ?? -1;
};

TimeLimitedCache.prototype.count = function() {
    return Object.keys(this.cache).length;
};

var main = function() {
    let start = Date.now();
    let timer = () => Date.now() - start;
    let limited = new TimeLimitedCache();
    setTimeout(() => console.log('set: ' + limited.set(1, 42, 100) + ', time: ' + timer()), 0);
    setTimeout(() => console.log('get: ' + limited.get(1) + ', time: ' + timer()), 50);
    setTimeout(() => console.log('count: ' + limited.count() + ', time: ' + timer()), 50);
};

main();
